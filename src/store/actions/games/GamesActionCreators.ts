import { GamesStructure } from "../../../data/types";
import { GamesActionType, LoadGamesAction } from "./types";

export const loadGamesActionCreator = (
  games: GamesStructure
): LoadGamesAction => ({
  type: GamesActionType.loadGames,
  payload: games,
});