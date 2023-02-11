import { PageNumberStructure } from "../../../data/types";
import {
  LoadPageNumberAction,
  PageNumberAction,
  PageNumberActionType,
} from "../../actions/PageNumber/types";

export const pageNumberReducer = (
  currentPageNumber: PageNumberStructure,
  action: PageNumberAction
): PageNumberStructure => {
  let newPageNumber: PageNumberStructure;

  if (action.type === PageNumberActionType.loadPageNumber) {
    newPageNumber = (action as LoadPageNumberAction).payload;
  } else {
    newPageNumber = currentPageNumber;
  }
  return newPageNumber;
};
