import { CamelCaseGameDetailStructure } from "../../../data/types";

export enum GameDetailActionType {
  loadGameDetail,
}

export interface GameDetailAction {
  type: GameDetailActionType;
}

export interface InspectGameDetailAction extends GameDetailAction {
  payload: CamelCaseGameDetailStructure;
}
