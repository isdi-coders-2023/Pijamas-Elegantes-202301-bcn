import { useContext, useEffect } from "react";
import { ApiResponseStructure } from "../data/types";
import { loadGamesActionCreator } from "../store/actions/games/GamesActionCreators";
import GamesContext from "../store/contexts/games/GameContext";

const useApi = () => {
  const { dispatch, pageNumber } = useContext(GamesContext);

  const url =
    "https://api.rawg.io/api/games?key=08071dea0dc249aea9dfec5ccf35ad2f";
  const pagination = `&page=${pageNumber}`;

  useEffect(() => {
    (async (url, pagination) => {
      const response = await fetch(`${url}${pagination}`);
      const gamesAPI = (await response.json()) as ApiResponseStructure;

      dispatch(loadGamesActionCreator(gamesAPI.results));
    })(url, pagination);
  }, [dispatch, pagination]);
};

export default useApi;
