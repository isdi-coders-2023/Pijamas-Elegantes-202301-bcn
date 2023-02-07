import { useReducer, useState } from "react";
import gamesReducer from "../../reducers/gamesReducer";
import GamesContext from "./GameContext";

interface GamesContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const GamesContextProvider = ({ children }: GamesContextProviderProps) => {
  const [games, dispatch] = useReducer(gamesReducer, []);
  const [pageNumber, setPageNumber] = useState(1);

  const nextPage = (): void => {
    setPageNumber(pageNumber + 1);
  };

  const previousPage = (): void => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
  };

  return (
    <GamesContext.Provider
      value={{ games, dispatch, nextPage, previousPage, pageNumber }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export default GamesContextProvider;
