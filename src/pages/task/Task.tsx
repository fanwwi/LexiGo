import React, { useState, useEffect } from "react";
import styles from "./task.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../helpers/Types";
import { getAllTasks } from "../../store/tasks/tasks.actions";

export type TasksType = {
  question: string;
  task_id: number;
  module_id: number;
  answers: {
    one: string;
    two: string;
    three: string;
  };
  key: string;
  id: number;
};

type TaskState = {
  attempts: number;
  selectedAnswer: string | null;
  isCorrect: boolean;
  showAnswer: boolean;
  showSadEmoji: boolean;
  currentTaskIndex: number;
  tasks: TasksType[];
};

const Task: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [state, setState] = useState<TaskState>({
    attempts: 2,
    selectedAnswer: null,
    isCorrect: false,
    showAnswer: false,
    showSadEmoji: false,
    currentTaskIndex: 0,
    tasks: [],
  });

  const { allTasks } = useAppSelector((state) => state.tasks);
  const { oneTask } = useAppSelector((state) => state.tasks);

  useEffect(() => {
    const fetchTasks = async () => {
      await dispatch(getAllTasks());
    };

    fetchTasks();
  }, [dispatch]);

  useEffect(() => {
    if (allTasks) {
      const filteredTasks = allTasks
        .filter((task) => task.task_id === 1)
        .sort((a, b) => a.id - b.id);

      setState((prevState) => ({
        ...prevState,
        tasks: filteredTasks,
      }));
    }
  }, [allTasks]);

  const handleAnswerClick = (key: string) => {
    if (state.selectedAnswer === null) {
      if (currentTask) {
        const correctAnswer = currentTask.key;
        const selectedAnswer =
          currentTask.answers[key as keyof typeof currentTask.answers];

        console.log("Selected answer value:", selectedAnswer);
        console.log("Correct answer value:", correctAnswer);

        const isCorrect = selectedAnswer === correctAnswer;
        if (isCorrect) {
          console.log("Answer is correct");
          setState((prevState) => ({
            ...prevState,
            selectedAnswer: key,
            isCorrect: true,
            showAnswer: false,
            showSadEmoji: false,
          }));
          navigate(
            `/module/${currentTask.module_id}/task/${
              state.currentTaskIndex + 2
            }`
          );
        } else {
          const newAttempts = state.attempts - 1;
          console.log("Answer is incorrect");
          setState((prevState) => ({
            ...prevState,
            selectedAnswer: key,
            isCorrect: false,
            showAnswer: newAttempts === 0,
            showSadEmoji: newAttempts === 0,
            attempts: newAttempts,
          }));
        }
      } else {
        console.log("Current task is not defined");
      }
    }
  };

  const handleNext = () => {
    if (state.currentTaskIndex < state.tasks.length - 1) {
      setState((prevState) => ({
        ...prevState,
        currentTaskIndex: prevState.currentTaskIndex + 1,
        selectedAnswer: null,
        showAnswer: false,
        showSadEmoji: false,
        isCorrect: false,
      }));
    } else {
      navigate("/finish");
    }
  };

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      selectedAnswer: null,
      showAnswer: false,
      showSadEmoji: false,
      isCorrect: false,
    }));
  };

  const currentTask = state.tasks[state.currentTaskIndex];

  return (
    <div className={styles.container}>
      {currentTask && (
        <>
          <h2 className={styles.question}>{currentTask.question}</h2>
          <div className={styles.options}>
            {Object.entries(currentTask.answers).map(([key, option]) => (
              <button
                key={key}
                onClick={() => handleAnswerClick(key)}
                className={`${styles.button} ${
                  state.selectedAnswer === key
                    ? key === currentTask.key
                      ? styles.correct
                      : styles.incorrect
                    : ""
                }`}
                disabled={state.selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <div className={styles.attempts}>
            {state.attempts > 0 ? (
              <p>Attempts left: {state.attempts}</p>
            ) : (
              <div className="">
                <p
                  className={`${styles.answer} ${
                    state.showAnswer ? styles.incorrect : ""
                  }`}
                >
                  Correct answer: <br />
                  <br />
                  <span>
                    {currentTask.key}
                    <br />
                    <button className={styles.nextBtn} onClick={handleNext}>
                      Next ➡️
                    </button>
                  </span>
                </p>
              </div>
            )}
          </div>

          {state.isCorrect && (
            <div className={styles.isCorrect}>
              <p className={styles.emoji}>👍</p>
              <button className={styles.nextBtn} onClick={handleNext}>
                Next ➡️
              </button>
            </div>
          )}
          {state.showSadEmoji && <div className={styles.emoji}>😢</div>}
          {state.selectedAnswer !== null &&
            !state.isCorrect &&
            !state.showSadEmoji && (
              <button onClick={handleReset} className={styles.tryAgainButton}>
                Try Again
              </button>
            )}
        </>
      )}
    </div>
  );
};

export default Task;
