import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import MainPage from "../pages/mainPage/MainPage";
import Register from "../pages/auth/Register";
import ErroPage from "../pages/ErrorPage/ErroPage";

export const router = createBrowserRouter([
  {
     id: "root",
    errorElement: <ErroPage />,
    // element: <MainLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

