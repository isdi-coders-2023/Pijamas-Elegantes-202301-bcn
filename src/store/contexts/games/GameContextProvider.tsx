import { useMemo, useReducer } from "react";
import { CamelCaseGameDetailStructure } from "../../../data/types";
import gameDetailsReducer from "../../reducers/gameDetails/gameDetailsReducer";
import gamesReducer from "../../reducers/gamesReducer";
import genreReducer from "../../reducers/genreReducer/genreReducer";
import { pageNumberReducer } from "../../reducers/pageNumber/pageNumberReducer";
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
        dispatch,
        genreDispatch,
        pageNumberDispatch,
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
