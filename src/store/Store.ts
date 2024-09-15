import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./users/users.slice";
import { tasksSlice } from "./tasks/tasks.slice";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    tasks: tasksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
