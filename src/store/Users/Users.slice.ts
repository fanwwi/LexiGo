import { createSlice } from "@reduxjs/toolkit";
import { StatesType } from "../../helpers/Types";


const INIT_STATE: StatesType = {
  error: null,
  loading: false,
  oneUser: null,
  currentUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
  },
});

export default usersSlice.reducer;