import { CamelCaseGameStructure } from "../data/types";
import { GamesAction } from "../store/actions/games/types";
import {
  GamesContext,
  GamesContextStructure,
} from "../store/contexts/games/GameContext";
export interface StoreStructure {
  store: {
    games: CamelCaseGameStructure[];
    dispatch: React.Dispatch<GamesAction>;
  };
}
export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  store: GamesContextStructure;
}
export const Wrapper = ({ children, store }: WrapperProps): JSX.Element => {
  return (
    <GamesContext.Provider value={store}>{children}</GamesContext.Provider>
  );
};
