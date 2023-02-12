import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { GamesContextProvider } from "./store/contexts/games/GameContextProvider";
import UIContextProvider from "./store/contexts/UI/UIContextProvider";
import { router } from "./router/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UIContextProvider>
      <GamesContextProvider>
        <RouterProvider router={router} />
      </GamesContextProvider>
    </UIContextProvider>
  </React.StrictMode>
);

export default root;
