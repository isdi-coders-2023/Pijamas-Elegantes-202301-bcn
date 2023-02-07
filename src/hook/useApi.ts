import { useContext } from "react";
import { ApiResponseStructure } from "../data/types";
import { loadGamesActionCreator } from "../store/actions/games/GamesActionCreators";
import GamesContext from "../store/contexts/games/GameContext";

const useApi = () => {
  const { dispatch } = useContext(GamesContext);

  const pageNumber = 1;
  const pagination = `&page=${pageNumber}`;

  const loadGames = async (url: string, pagination: string) => {
    const response = await fetch(`${url}${pagination}`);
    const gamesAPI = (await response.json()) as ApiResponseStructure;

    dispatch(loadGamesActionCreator(gamesAPI.results));
  };

  loadGames(process.env.REACT_APP_URL_API!, pagination);

  return { loadGames };
};

export default useApi;
