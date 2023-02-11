import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage/ErrorPage";

import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
