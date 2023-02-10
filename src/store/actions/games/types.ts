import { CamelCaseGameStructure } from "../../../data/types";

export enum GamesActionType {
  loadGames,
}

export interface GamesAction {
  type: GamesActionType;
}

export interface LoadGamesAction extends GamesAction {
  payload: CamelCaseGameStructure[];
}
