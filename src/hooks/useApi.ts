import { useContext, useCallback } from "react";

import { GamesContext } from "../store/contexts/games/GameContext";
import { UIContext } from "../store/contexts/UI/UIContext";
import {
  convertGamesToCamelCase,
  convertDetailsToCamelCase,
} from "../utils/convertToCamelCase/converKebabToCamelCase";
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
import {
  setIsLoadingToFalseActionCreator as unsetIsLoadingActionCreator,
  setIsLoadingToTrueActionCreator,
} from "../store/actions/UI/UIActionsCreator";

const useApi = () => {
  const urlApi = process.env.REACT_APP_URL_API;
  const apiKey = process.env.REACT_APP_API_KEY;
  const paginationParam = "&page=";
  const detailUrl = "https://api.rawg.io/api/games/";
  const detailKey = "?key=193c87522b9048baab524e2b193817dd";

  const {
    store: { games, dispatch, gameDetailDispatch, gameDetail },
  } = useContext(GamesContext);

  const { dispatchIsLoading } = useContext(UIContext);

  const loadGames = useCallback(
    async (pagenumber: number, genre = "") => {
      try {
        dispatchIsLoading(setIsLoadingToTrueActionCreator());

        const response = await fetch(
          `${urlApi}${apiKey}${paginationParam}${pagenumber}${
            genre && `&genres=${genre}`
          }`
        );

        const gamesAPI = (await response.json()) as ApiResponseStructure;

        const convertedGamesList = convertGamesToCamelCase(
          gamesAPI.results
        ) as unknown as CamelCaseGameStructure[];

        dispatch(loadGamesActionCreator(convertedGamesList));

        dispatchIsLoading(unsetIsLoadingActionCreator());
      } catch (error) {
        dispatchIsLoading(unsetIsLoadingActionCreator());

        return (error as Error).message;
      }
    },
    [apiKey, dispatch, dispatchIsLoading, paginationParam, urlApi]
  );

  const loadDetails = useCallback(
    async (id: number) => {
      try {
        const response = await fetch(
          `${detailUrl}${id}${detailKey}
          `
        );

        const gameDetail = (await response.json()) as GameDetailStructure;

        const convertedGameDetail = convertDetailsToCamelCase(
          gameDetail
        ) as unknown as CamelCaseGameDetailStructure;

        convertedGameDetail.description = convertedGameDetail.description
          .replace(/<\/?p[^>]*>/g, "")
          .replace(/<\/?br[^>]*>/g, "");

        gameDetailDispatch(seeGameDetailsActionCreator(convertedGameDetail));
      } catch (error) {
        dispatchIsLoading(unsetIsLoadingActionCreator());

        return (error as Error).message;
      }
    },
    [detailKey, detailUrl, dispatchIsLoading, gameDetailDispatch]
  );

  return { games, gameDetail, loadGames, dispatch, loadDetails };
};
export default useApi;
