import { GamesStructure } from "../../data/types";
import {
  GamesAction,
  GamesActionType,
  LoadGamesAction,
} from "../actions/games/types";

const gamesReducer = (
  currentGames: GamesStructure,
  action: GamesAction
): GamesStructure => {
  let newGames: GamesStructure;

  if (action.type === GamesActionType.loadGames) {
    newGames = [...(action as LoadGamesAction).payload];
  } else {
    newGames = currentGames;
  }

  return newGames;
};

export default gamesReducer;
