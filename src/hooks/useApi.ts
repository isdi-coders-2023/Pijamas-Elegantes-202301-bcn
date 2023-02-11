import { useContext, useCallback } from "react";
import convertKebabToCamel from "../data/convertKebabToCamel/converKebabToCamel";
import { ApiResponseStructure, CamelCaseGameStructure } from "../data/types";
import { loadGamesActionCreator } from "../store/actions/games/GamesActionCreators";
import {
  setIsLoadingToFalseActionCreator as unsetIsLoadingActionCreator,
  setIsLoadingToTrueActionCreator,
} from "../store/actions/UI/UIActionsCreator";
import { GamesContext } from "../store/contexts/games/GameContext";
import { UIContext } from "../store/contexts/UI/UIContext";

const useApi = () => {
  const urlApi = process.env.REACT_APP_URL_API;
  const apiKey = process.env.REACT_APP_API_KEY;
  const paginationParam = process.env.REACT_APP_PAGINATION_PARAM;

  const {
    store: { games, dispatch },
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
        const convertedGamesList = convertKebabToCamel(
          gamesAPI.results
        ) as unknown as CamelCaseGameStructure[];

        dispatch(loadGamesActionCreator(convertedGamesList));
        //type: true
        dispatchIsLoading(unsetIsLoadingActionCreator());
      } catch (error) {
        dispatchIsLoading(unsetIsLoadingActionCreator());

        return (error as Error).message;
      }
    },
    [apiKey, dispatch, dispatchIsLoading, paginationParam, urlApi]
  );
  return { games, loadGames, dispatch };
};
export default useApi;
