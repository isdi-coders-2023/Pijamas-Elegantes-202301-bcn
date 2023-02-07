import { useContext, useCallback } from "react";
import { ApiResponseStructure } from "../data/types";
import { loadGamesActionCreator } from "../store/actions/games/GamesActionCreators";
import GamesContext from "../store/contexts/games/GameContext";

const useApi = () => {
  const { dispatch } = useContext(GamesContext);

  const loadGames = useCallback(
    async (pagenumber: number) => {
      const response = await fetch(
        `${process.env.REACT_APP_URL_API!}&page=${pagenumber}`
      );
      const gamesAPI = (await response.json()) as ApiResponseStructure;

      dispatch(loadGamesActionCreator(gamesAPI.results));
    },
    [dispatch]
  );

  return { loadGames };
};

export default useApi;
