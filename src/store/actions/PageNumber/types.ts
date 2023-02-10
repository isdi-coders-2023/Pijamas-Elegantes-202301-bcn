import { PageNumberStructure } from "../../../data/types";

export enum PageNumberActionType {
  loadPageNumber,
}

export interface PageNumberAction {
  payload: number;
  type: PageNumberActionType;
}

export interface LoadPageNumberAction extends PageNumberAction {
  payload: PageNumberStructure;
}
