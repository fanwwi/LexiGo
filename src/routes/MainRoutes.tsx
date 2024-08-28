import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import MainPage from "../pages/mainPage/MainPage";
import Register from "../pages/auth/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/create/account" element={<Register />} />
      <Route path="/log/account" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
