import { createContext } from "react";
import { UIAction } from "../../actions/UI/types";

interface UIContextStructure {
  isLoading: boolean;
  dispatchIsLoading: React.Dispatch<UIAction>;
}

export const UIContext = createContext({} as UIContextStructure);
