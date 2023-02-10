import { CamelCaseGameStructure } from "../../../data/types";
import { GamesActionType, LoadGamesAction } from "./types";

export const loadGamesActionCreator = (
  games: CamelCaseGameStructure[]
): LoadGamesAction => ({
  type: GamesActionType.loadGames,
  payload: games,
});
