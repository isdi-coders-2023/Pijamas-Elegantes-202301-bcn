import { useContext, useCallback } from "react";
import { ApiResponseStructure } from "../data/types";
import { loadGamesActionCreator } from "../store/actions/games/GamesActionCreators";
import { GamesContext } from "../store/contexts/games/GameContext";

const useApi = () => {
  const { games, dispatch } = useContext(GamesContext);

  const loadGames = useCallback(
    async (pageNumber: number, genre = "") => {
      const response = await fetch(
        `${process.env.REACT_APP_URL_API!}&page=${pageNumber}${
          genre && `&genres=${genre}`
        }`
      );
      const gamesAPI = (await response.json()) as ApiResponseStructure;

      dispatch(loadGamesActionCreator(gamesAPI.results));
    },
    [dispatch]
  );

  return { games, loadGames, dispatch };
};

export default useApi;
