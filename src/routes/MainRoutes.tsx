import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErroPage from "../pages/ErrorPage/ErroPage";
import StarterPage from "../pages/StarterPage/StarterPage";

export const router = createBrowserRouter([
  {
     id: "root",
    errorElement: <ErroPage />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/", element: <StarterPage/>},
    ],
  },
]);

