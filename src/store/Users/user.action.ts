import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../types";
import { $axios } from "../../helpers/axios";

const getCurrentDate = (): string => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `${day}.${month}.${year}`;
};

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({
    data,
    navigate,
  }: {
    data: UserType;
    navigate: (path: string) => void;
  }) => {
    const userData = {
      name: data.name,
      password: data.password,
      joinDate: getCurrentDate(),
      id: Date.now(),
    };

    try {
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate(`/profile/${data.id}`);
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const saveUserImage = createAsyncThunk(
  "users/userImage",
  async (url: string) => {
    localStorage.setItem("imageUrl", url);
    window.location.reload();
  }
);
