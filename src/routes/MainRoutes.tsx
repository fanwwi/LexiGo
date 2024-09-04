import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErroPage from "../pages/error/ErrorPage";
import StarterPage from "../pages/StarterPage/StarterPage";
import ProfilePage from "../pages/profile/ProfilePage";

export const router = createBrowserRouter([
  {
     id: "root",
    errorElement: <ErroPage />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/", element: <StarterPage/>},
      { path: "/profile/:id", element: <ProfilePage/>},
    ],
  },
]);

