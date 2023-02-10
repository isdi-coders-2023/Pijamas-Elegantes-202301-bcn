import { useContext, useCallback } from "react";
import convertKebabToCamel from "../data/convertKebabToCamel/converKebabToCamel";
import { ApiResponseStructure, CamelCaseGameStructure } from "../data/types";
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
        const convertedGamesList = convertKebabToCamel(
          gamesAPI.results
        ) as unknown as CamelCaseGameStructure[];

        dispatch(loadGamesActionCreator(convertedGamesList));
      } catch (error) {
        return (error as Error).message;
      }
    },
    [apiKey, dispatch, paginationParam, urlApi]
  );
  return { games, loadGames, dispatch };
};
export default useApi;
