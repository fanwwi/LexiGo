import { useState, useEffect, FC } from "react";
import styles from "./task.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../helpers/Types";
import { getAllTasks } from "../../store/tasks/tasks.actions";
import { TasksType } from "../../types";

type TaskState = {
  attemptsPerTask: Record<number, number>;
  selectedAnswer: string | null;
  isCorrect: boolean;
  showAnswer: boolean;
  showSadEmoji: boolean;
  currentTaskIndex: number;
  tasks: TasksType[];
};

const Task: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [state, setState] = useState<TaskState>({
    attemptsPerTask: {},
    selectedAnswer: null,
    isCorrect: false,
    showAnswer: false,
    showSadEmoji: false,
    currentTaskIndex: 0,
    tasks: [],
  });

  const { allTasks } = useAppSelector((state) => state.tasks);

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

      const attemptsPerTask = filteredTasks.reduce((acc, task) => {
        acc[task.id] = 2;
        return acc;
      }, {} as Record<number, number>);

      setState((prevState) => ({
        ...prevState,
        tasks: filteredTasks,
        attemptsPerTask,
      }));
    }
  }, [allTasks]);

  const handleAnswerClick = (key: string) => {
    const currentTask = state.tasks[state.currentTaskIndex];

    if (state.selectedAnswer === null && currentTask) {
      const correctAnswer = currentTask.key;
      const selectedAnswer =
        currentTask.answers[key as keyof typeof currentTask.answers];

      const isCorrect = selectedAnswer === correctAnswer;
      const newAttempts = (state.attemptsPerTask[currentTask.id] || 2) - 1;

      if (isCorrect) {
        setState((prevState) => ({
          ...prevState,
          selectedAnswer: key,
          isCorrect: true,
          showAnswer: false,
          showSadEmoji: false,
          attemptsPerTask: {
            ...prevState.attemptsPerTask,
            [currentTask.id]: newAttempts,
          },
        }));
      } else {
        if (newAttempts <= 0) {
          setState((prevState) => ({
            ...prevState,
            selectedAnswer: key,
            isCorrect: false,
            showAnswer: true,
            showSadEmoji: true,
            attemptsPerTask: {
              ...prevState.attemptsPerTask,
              [currentTask.id]: newAttempts,
            },
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            selectedAnswer: key,
            isCorrect: false,
            showAnswer: false,
            showSadEmoji: false,
            attemptsPerTask: {
              ...prevState.attemptsPerTask,
              [currentTask.id]: newAttempts,
            },
          }));
        }
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
            {state.isCorrect && !state.showAnswer && (
              <div className={styles.isCorrect}>
                <p className={styles.emoji}>👍</p>
                <button className={styles.nextBtn} onClick={handleNext}>
                  Next ➡️
                </button>
              </div>
            )}
            {state.selectedAnswer !== null &&
              !state.isCorrect &&
              state.attemptsPerTask[currentTask.id] <= 0 && (
                <div className="">
                  <p className={styles.answer}>
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
            {state.selectedAnswer !== null &&
              !state.isCorrect &&
              !state.showSadEmoji &&
              state.attemptsPerTask[currentTask.id] > 0 && (
                <button onClick={handleReset} className={styles.tryAgainButton}>
                  Try Again
                </button>
              )}
            {state.showSadEmoji && !state.isCorrect && (
              <div className={styles.emoji}>😢</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
