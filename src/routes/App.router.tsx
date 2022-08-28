import { useRoutes } from "react-router-dom";

import AuthLayout from "../pages/Auth/Layout"
import Login from "../pages/Auth/Login"
import SignUp from "../pages/Auth/Signup"
import MainLayout from "../pages/Layout/MainLayout"
import Home from "../pages/Home/index"


export default function Router() {
  const element = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        { path: "/", element: <Login /> },
        { path: "signup", element: <SignUp /> }
      ]
    },
    {
      element: <MainLayout />,
      children: [
        { path: "home", element: <Home /> },
      ]
    }
  ]);
  return element;
}
