import React, { useContext, useEffect } from "react";
import { ApiResponseStructure } from "./data/types";
import { loadGamesActionCreator } from "./store/actions/games/GamesActionCreators";
import GamesContext from "./store/contexts/games/GameContext";

function App() {
  const { games, dispatch } = useContext(GamesContext);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.REACT_APP_URL_API!);
      const gamesAPI = (await response.json()) as ApiResponseStructure;

      dispatch(loadGamesActionCreator(gamesAPI.results));
    })();
  }, [dispatch]);

  console.table(games);
  return <div className="App"></div>;
}

export default App;
