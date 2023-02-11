import { UIAction, UIActionType } from "./types";

export const setIsLoadingToTrueActionCreator = (): UIAction => ({
  type: UIActionType.setIsLoadingToTrue,
});

export const setIsLoadingToFalseActionCreator = (): UIAction => ({
  type: UIActionType.setIsLoadingToFalse,
});
