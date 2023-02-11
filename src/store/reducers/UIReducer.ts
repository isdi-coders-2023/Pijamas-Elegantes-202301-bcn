import { UIAction, UIActionType } from "../actions/UI/types";

const UIReducer = (currentIsLoading: boolean, action: UIAction): boolean => {
  let newIsLoading: boolean;

  switch (action.type) {
    case UIActionType.setIsLoadingToTrue:
      newIsLoading = true;
      break;

    case UIActionType.setIsLoadingToFalse:
      newIsLoading = false;
      break;

    default:
      newIsLoading = currentIsLoading;
  }

  return newIsLoading;
};

export default UIReducer;
