import {
  CamelCaseGameDetailStructure,
  CamelCaseGameStructure,
} from "../data/types";
import { InspectGameDetailAction } from "../store/actions/detail/types";
import { GamesAction } from "../store/actions/games/types";
import {
  GamesContext,
  GamesContextStructure,
} from "../store/contexts/games/GameContext";
export interface StoreStructure {
  store: {
    games: CamelCaseGameStructure[];
    gameDetail: CamelCaseGameDetailStructure;
    dispatch: React.Dispatch<GamesAction>;
    gameDetailDispatch: React.Dispatch<InspectGameDetailAction>;
  };
}
export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  store: GamesContextStructure;
}
export const MockContextProvider = ({
  children,
  store,
}: WrapperProps): JSX.Element => {
  return (
    <GamesContext.Provider value={store}>{children}</GamesContext.Provider>
  );
};
