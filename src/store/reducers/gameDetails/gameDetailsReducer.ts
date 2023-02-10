import { CamelCaseGameDetailStructure } from "../../../data/types";
import {
  GameDetailActionType,
  InspectGameDetailAction,
} from "../../actions/detail/types";

const gameDetailsReducer = (
  currentGameDetail: CamelCaseGameDetailStructure,
  action: InspectGameDetailAction
): CamelCaseGameDetailStructure => {
  let newGameDetail: CamelCaseGameDetailStructure;

  if (action.type === GameDetailActionType.loadGameDetail) {
    newGameDetail = action.payload;
  } else {
    newGameDetail = currentGameDetail;
  }
  return newGameDetail;
};

export default gameDetailsReducer;
