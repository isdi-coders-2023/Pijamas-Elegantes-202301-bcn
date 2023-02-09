import { GamesStructure } from "../data/types";
import { GamesAction } from "../store/actions/games/types";
import { GamesContext } from "../store/contexts/games/GameContext";

export interface StoreStructure {
  games: GamesStructure;
  dispatch: React.Dispatch<GamesAction>;
}

export interface MockContextProviderProps {
  store: StoreStructure;
  children: JSX.Element | JSX.Element[];
}

export const MockContextProvider = ({
  store,
  children,
}: MockContextProviderProps): JSX.Element => {
  return (
    <GamesContext.Provider value={store}>{children}</GamesContext.Provider>
  );
};
