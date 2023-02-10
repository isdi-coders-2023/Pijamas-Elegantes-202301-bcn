import { useMemo, useReducer } from "react";
import {
  gamesReducer,
  genreReducer,
  pageNumberReducer,
} from "../../reducers/gamesReducer";
import { GamesContext } from "./GameContext";

export interface GamesContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const GamesContextProvider = ({
  children,
}: GamesContextProviderProps) => {
  const [games, dispatch] = useReducer(gamesReducer, []);
  const [genre, genreDispatch] = useReducer(genreReducer, "");
  const [pageNumber, pageNumberDispatch] = useReducer(pageNumberReducer, 1);

  const store = useMemo(
    () => ({
      games,
      genre,
      pageNumber,
      pageNumberDispatch,
      genreDispatch,
      dispatch,
    }),
    [games, genre, pageNumber, pageNumberDispatch, genreDispatch, dispatch]
  );

  return (
    <GamesContext.Provider value={{ store }}>{children}</GamesContext.Provider>
  );
};
