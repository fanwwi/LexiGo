import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types";
import { getCurrentUser } from "./user.action";

type StatesType = {
  error: null | string;
  loading: boolean;
  user: null | UserType;
  currentUser: null | UserType;
};

const INIT_STATE: StatesType = {
  error: null,
  loading: false,
  user: null,
  currentUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INIT_STATE,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userId");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      });
  },
});

export const { logout } = usersSlice.actions;
