import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
