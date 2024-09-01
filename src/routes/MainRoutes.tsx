import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErroPage from "../pages/ErrorPage/ErroPage";
import StarterPage from "../pages/StarterPage/StarterPage";
import MenuPage from "../pages/menuPage/MenuPage";

export const router = createBrowserRouter([
  {
     id: "root",
    errorElement: <ErroPage />,
    // element: <MainLayout />,
    children: [
      { path: "/starter", element: <StarterPage /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/", element: <MenuPage /> },
    ],
  },
]);

