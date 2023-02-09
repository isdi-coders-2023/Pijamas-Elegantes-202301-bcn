import { useMemo, useReducer } from "react";
import gamesReducer from "../../reducers/gamesReducer";
import { GamesContext } from "./GameContext";

export interface GamesContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const GamesContextProvider = ({
  children,
}: GamesContextProviderProps) => {
  const [games, dispatch] = useReducer(gamesReducer, []);

  const store = useMemo(() => ({ games, dispatch }), [games, dispatch]);

  return (
    <GamesContext.Provider value={{ store }}>{children}</GamesContext.Provider>
  );
};
