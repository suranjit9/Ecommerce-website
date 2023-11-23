import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "../../Leout/Home/Home";
import Login from "../../Leout/Header/Login";
import SingUp from "../../Leout/Header/SingUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path:'/login',
            element:<Login></Login>
          },
          {
            path: '/singUp',
            element: <SingUp></SingUp>
          }
      ],
    },
  ]);

export default router;