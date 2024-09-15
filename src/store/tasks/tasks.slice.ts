import { createSlice } from "@reduxjs/toolkit";
import { GetTaskType, LevelsType, ModulesType, TasksType } from "../../types";
import { getAllTasks, getLevels, getOneTask } from "./tasks.actions";

type StatesType = {
  error: null | string;
  loading: boolean;
  allLevels: null | LevelsType[];
  oneTask: null | GetTaskType;
  allTasks: null | TasksType[];
};

const INIT_STATE: StatesType = {
  error: null,
  loading: false,
  allLevels: null,
  oneTask: null,
  allTasks: null,
};

export const tasksSlice = createSlice({
  name: "users",
  initialState: INIT_STATE,
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLevels.fulfilled, (state, { payload }) => {
        state.allLevels = payload;
      })
      .addCase(getLevels.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLevels.rejected, (state) => {
        console.log(state.error);
      })
      .addCase(getOneTask.fulfilled, (state, { payload }) => {
        state.oneTask = payload;
      })
      .addCase(getOneTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneTask.rejected, (state) => {
        console.log(state.error);
      })
      .addCase(getAllTasks.fulfilled, (state, { payload }) => {
        state.allTasks = payload;
      })
      .addCase(getAllTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTasks.rejected, (state) => {
        console.log(state.error);
      });
  },
});

export const { setError } = tasksSlice.actions;
