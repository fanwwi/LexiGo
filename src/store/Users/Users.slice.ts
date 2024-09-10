import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types";

type StatesType = {
  error: null | string;
  loading: boolean;
  user: null | UserType;
};

const INIT_STATE: StatesType = {
  error: null,
  loading: false,
  user: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INIT_STATE,
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
    logout: (state) => {
      localStorage.removeItem("tokens");
      state.user = null;
    },
  },
  extraReducers: (builder) => {},
});

export const { setError, logout } = usersSlice.actions;
