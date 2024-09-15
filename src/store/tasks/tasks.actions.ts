import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLevels = createAsyncThunk("tasks/getLevels", async () => {
  try {
    const res = await axios.get("http://localhost:8000/levels");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getOneTask = createAsyncThunk(
  "tasks/getOneTask",
  async (id: number) => {
    try {
      const res = await axios.get(`http://localhost:8000/tasks/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllTasks = createAsyncThunk("tasks/getAllTasks", async () => {
  try {
    const res = await axios.get("http://localhost:8000/tasks");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
