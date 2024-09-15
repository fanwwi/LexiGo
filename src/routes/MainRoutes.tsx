import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErroPage from "../pages/error/ErrorPage";
import ProfilePage from "../pages/profile/ProfilePage";
import StarterPage from "../pages/starter/StarterPage";
import ModulePage1 from "../pages/module/ModulePage1";
import ModulePage2 from "../pages/module/ModulePage2";
import ModulePage3 from "../pages/module/ModulePage3";
import Task from "../pages/task/Task";
import Finish from "../pages/finish/Finish";

export const router = createBrowserRouter([
  {
    id: "root",
    errorElement: <ErroPage />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/", element: <StarterPage /> },
      { path: "/profile/:id", element: <ProfilePage /> },
      { path: "/module/1/", element: <ModulePage1 /> },
      { path: "/module/2/", element: <ModulePage2 /> },
      { path: "/module/3/", element: <ModulePage3 /> },
      { path: "/module/:id/task/:id", element: <Task /> },
      { path: "/finish/", element: <Finish /> },
    ],
  },
]);
