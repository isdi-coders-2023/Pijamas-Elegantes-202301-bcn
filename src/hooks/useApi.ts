import { useContext, useCallback } from "react";
import { ApiResponseStructure } from "../data/types";
import { loadGamesActionCreator } from "../store/actions/games/GamesActionCreators";
import { GamesContext } from "../store/contexts/games/GameContext";
const useApi = () => {
  const urlApi = process.env.REACT_APP_URL_API;
  const apiKey = process.env.REACT_APP_API_KEY;
  const paginationParam = process.env.REACT_APP_PAGINATION_PARAM;

  const {
    store: { games, dispatch },
  } = useContext(GamesContext);

  const loadGames = useCallback(
    async (pagenumber: number) => {
      try {
        const response = await fetch(
          `${urlApi}${apiKey}${paginationParam}${pagenumber}`
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
