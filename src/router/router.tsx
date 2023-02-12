import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DetailPage from "../pages/Detail/DetailPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "home/detail/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
