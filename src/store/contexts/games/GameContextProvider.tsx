import { useReducer } from "react";
import gamesReducer from "../../reducers/gamesReducer";
import { GamesContext } from "./GameContext";

interface GamesContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const GamesContextProvider = ({ children }: GamesContextProviderProps) => {
  const [games, dispatch] = useReducer(gamesReducer, []);

  return (
    <GamesContext.Provider value={{ games, dispatch }}>
      {children}
    </GamesContext.Provider>
  );
};

export default GamesContextProvider;
