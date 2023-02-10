import { CamelCaseGameDetailStructure } from "../../../data/types";
import {
  GameDetailActionType,
  InspectGameDetailAction,
} from "../../actions/detail/types";

export const gameDetailsReducer = (
  currentGameDetail: CamelCaseGameDetailStructure,
  action: InspectGameDetailAction
): CamelCaseGameDetailStructure => {
  let newGameDetail: CamelCaseGameDetailStructure;

  if (action.type === GameDetailActionType.loadGameDetail) {
    newGameDetail = (action as InspectGameDetailAction).payload;
  } else {
    newGameDetail = currentGameDetail;
  }
  return newGameDetail;
};
