import { useMemo, useReducer } from "react";
import UIReducer from "../../reducers/UIReducer";
import { UIContext } from "./UIContext";
export interface UIContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UIContextProvider = ({ children }: UIContextProviderProps) => {
  const [isLoading, dispatchIsLoading] = useReducer(UIReducer, false);

  const store = useMemo(() => ({ isLoading, dispatchIsLoading }), [isLoading]);

  return <UIContext.Provider value={store}>{children}</UIContext.Provider>;
};

export default UIContextProvider;
