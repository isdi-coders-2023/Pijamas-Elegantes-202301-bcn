import { GamesStructure } from "../data/types";
import { GamesAction } from "../store/actions/games/types";
import { GamesContext } from "../store/contexts/games/GameContext";

export interface StoreStructure {
  games: GamesStructure;
  dispatch: React.Dispatch<GamesAction>;
}

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  store: StoreStructure;
}

export const Wrapper = ({ children, store }: WrapperProps): JSX.Element => {
  return (
    <GamesContext.Provider value={store}>{children}</GamesContext.Provider>
  );
};
