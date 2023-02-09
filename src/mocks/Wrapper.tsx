import {
  GamesContext,
  GamesContextStructure,
} from "../store/contexts/games/GameContext";

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  store: GamesContextStructure;
}
export const Wrapper = ({ children, store }: WrapperProps): JSX.Element => {
  return (
    <GamesContext.Provider value={store}>{children}</GamesContext.Provider>
  );
};
