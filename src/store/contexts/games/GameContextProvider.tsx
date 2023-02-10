import { useMemo, useReducer } from "react";
import { CamelCaseGameDetailStructure } from "../../../data/types";
import {
  gameDetailsReducer,
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
  const [gameDetail, gameDetailDispatch] = useReducer(
    gameDetailsReducer,
    {} as CamelCaseGameDetailStructure
  );
  const [genre, genreDispatch] = useReducer(genreReducer, "");
  const [pageNumber, pageNumberDispatch] = useReducer(pageNumberReducer, 1);

  const providerValues = useMemo(
    () => ({
      store: {
        games,
        genre,
        pageNumber,
        gameDetail,
        pageNumberDispatch,
        genreDispatch,
        dispatch,
        gameDetailDispatch,
      },
    }),
    [games, genre, pageNumber, gameDetail]
  );

  return (
    <GamesContext.Provider value={providerValues}>
      {children}
    </GamesContext.Provider>
  );
};
