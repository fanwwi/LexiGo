import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErroPage from "../pages/error/ErrorPage";
import ProfilePage from "../pages/profile/ProfilePage";
import ModulePage from "../pages/module/ModulePage";
import StarterPage from "../pages/starter/StarterPage";
import Task from "../pages/task/Task";

export const router = createBrowserRouter([
  {
    id: "root",
    errorElement: <ErroPage />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/", element: <StarterPage /> },
      { path: "/profile/:id", element: <ProfilePage /> },
      { path: "/module/:id", element: <ModulePage /> },
      { path: "/module/:id/task/:id", element: <Task /> },
    ],
  },
]);
