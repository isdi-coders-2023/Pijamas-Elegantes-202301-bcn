import { useMemo, useReducer } from "react";
import { gamesReducer } from "../../reducers/gamesReducer";
import genreReducer from "../../reducers/genreReducer";
import { GamesContext } from "./GameContext";

export interface GamesContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const GamesContextProvider = ({
  children,
}: GamesContextProviderProps) => {
  const [games, dispatch] = useReducer(gamesReducer, []);
  const [genre, genreDispatch] = useReducer(genreReducer, "");

  const store = useMemo(
    () => ({ games, genre, genreDispatch, dispatch }),
    [games, genre, genreDispatch, dispatch]
  );

  return (
    <GamesContext.Provider value={{ store }}>{children}</GamesContext.Provider>
  );
};
