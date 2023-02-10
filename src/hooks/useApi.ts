import { useContext, useCallback } from "react";
import {
  convertKebabToCamelForGames,
  converKebabToCamelForGameDetails,
} from "../data/convertKebabToCamel/converKebabToCamel";
import {
  ApiResponseStructure,
  CamelCaseGameDetailStructure,
  CamelCaseGameStructure,
  GameDetailStructure,
} from "../data/types";
import {
  loadGamesActionCreator,
  seeGameDetailsActionCreator,
} from "../store/actions/games/GamesActionCreators";
import { GamesContext } from "../store/contexts/games/GameContext";

const useApi = () => {
  const urlApi = process.env.REACT_APP_URL_API;
  const apiKey = process.env.REACT_APP_API_KEY;
  const paginationParam = process.env.REACT_APP_PAGINATION_PARAM;
  const detailUrl = process.env.REACT_APP_DETAIL_URL;
  const detailKey = process.env.REACT_APP_DETAIL_KEY;

  const {
    store: { games, dispatch, gameDetailDispatch, gameDetail },
  } = useContext(GamesContext);

  const loadGames = useCallback(
    async (pagenumber: number, genre = "") => {
      try {
        const response = await fetch(
          `${urlApi}${apiKey}${paginationParam}${pagenumber}${
            genre && `&genres=${genre}`
          }`
        );

        const gamesAPI = (await response.json()) as ApiResponseStructure;
        const convertedGamesList = convertKebabToCamelForGames(
          gamesAPI.results
        ) as unknown as CamelCaseGameStructure[];

        dispatch(loadGamesActionCreator(convertedGamesList));
      } catch (error) {
        return (error as Error).message;
      }
    },
    [apiKey, dispatch, paginationParam, urlApi]
  );

  const loadDetails = useCallback(
    async (id: number) => {
      try {
        const response = await fetch(
          `${detailUrl}${id}${detailKey}
          `
        );

        const gameDetail = (await response.json()) as GameDetailStructure;

        const convertedGamesList = converKebabToCamelForGameDetails(
          gameDetail
        ) as unknown as CamelCaseGameDetailStructure;

        gameDetailDispatch(seeGameDetailsActionCreator(convertedGamesList));
      } catch (error) {
        return (error as Error).message;
      }
    },
    [detailKey, detailUrl, gameDetailDispatch]
  );

  return { games, gameDetail, loadGames, dispatch, loadDetails };
};
export default useApi;
