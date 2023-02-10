import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GamesContextProvider } from "./store/contexts/games/GameContextProvider";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GamesContextProvider>
      <App />
    </GamesContextProvider>
  </React.StrictMode>
);

export default root;
