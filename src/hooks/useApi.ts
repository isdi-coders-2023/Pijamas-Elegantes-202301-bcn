import { useContext, useCallback } from "react";
import { ApiResponseStructure } from "../data/types";
import { loadGamesActionCreator } from "../store/actions/games/GamesActionCreators";
import { GamesContext } from "../store/contexts/games/GameContext";

const useApi = () => {
  const { games, dispatch } = useContext(GamesContext);

  const loadGames = useCallback(
    async (pagenumber: number) => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=c7ec92dec21d4e5e84d9658fdb3cafaf&page=${pagenumber}`
        );
        const gamesAPI = (await response.json()) as ApiResponseStructure;

        dispatch(loadGamesActionCreator(gamesAPI.results));
      } catch (error) {
        return (error as Error).message;
      }
    },
    [dispatch]
  );

  return { games, loadGames, dispatch };
};

export default useApi;
