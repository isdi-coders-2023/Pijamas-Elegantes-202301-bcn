import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DetailPage from "../pages/Detail/DetailPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";

export const routesConfiguration = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "home/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routesConfiguration);
