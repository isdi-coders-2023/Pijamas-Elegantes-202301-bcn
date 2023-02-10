import { CamelCaseGameStructure } from "../../data/types";

import {
  GamesAction,
  GamesActionType,
  LoadGamesAction,
} from "../actions/games/types";

const gamesReducer = (
  currentGames: CamelCaseGameStructure[],
  action: GamesAction
): CamelCaseGameStructure[] => {
  let newGames: CamelCaseGameStructure[];

  if (action.type === GamesActionType.loadGames) {
    newGames = [...(action as LoadGamesAction).payload];
  } else {
    newGames = currentGames;
  }

  return newGames;
};

export default gamesReducer;
