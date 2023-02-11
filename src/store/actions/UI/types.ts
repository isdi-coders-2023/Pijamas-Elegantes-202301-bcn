export enum UIActionType {
  setIsLoadingToTrue,
  setIsLoadingToFalse,
}

export interface UIAction {
  type: UIActionType;
}
