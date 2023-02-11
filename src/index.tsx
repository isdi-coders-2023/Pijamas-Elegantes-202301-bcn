import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GamesContextProvider } from "./store/contexts/games/GameContextProvider";
import UIContextProvider from "./store/contexts/UI/UIContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UIContextProvider>
      <GamesContextProvider>
        <App />
      </GamesContextProvider>
    </UIContextProvider>
  </React.StrictMode>
);

export default root;
