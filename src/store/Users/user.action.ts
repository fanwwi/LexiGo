import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../types";
import axios from "axios";

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
    const UserId = Date.now();
    const userData = {
      name: data.name,
      password: data.password,
      joinDate: getCurrentDate(),
      id: UserId,
      profilePhoto: data.profilePhoto,
    };
    try {
      await axios.post("http://localhost:8000/users", userData);
      localStorage.setItem("userId", JSON.stringify(UserId));
      navigate(`/profile/${UserId}`);
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const updateProfilePicture = createAsyncThunk(
  "users/updateProfilePicture",
  async ({
    userId,
    profilePicture,
  }: {
    userId: number;
    profilePicture: string;
  }) => {
    const profilePhoto = {
      profilePicture: profilePicture,
    };
    try {
      await axios.patch(
        `http://localhost:8000/users/${userId}/`,
        profilePhoto,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error: any) {
      console.log("Ошибка обновления фото профиля:", error);
    }
  }
);

export const clearProfilePhoto = createAsyncThunk(
  "users/clearUserProfile",
  async (userId: number) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/users/${userId}`,
        {
          profilePhoto: "",
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error clearing profile photo", error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async (id: number) => {
    try {
      const res = await axios.get(`http://localhost:8000/users/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
