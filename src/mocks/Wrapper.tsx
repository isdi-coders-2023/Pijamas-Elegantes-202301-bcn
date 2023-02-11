import {
  CamelCaseGameDetailStructure,
  CamelCaseGameStructure,
} from "../data/types";
import { InspectGameDetailAction } from "../store/actions/detail/types";
import { GamesAction } from "../store/actions/games/types";
import { UIAction } from "../store/actions/UI/types";
import {
  GamesContext,
  GamesContextStructure,
} from "../store/contexts/games/GameContext";
import { UIContext } from "../store/contexts/UI/UIContext";
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

export const Wrapper = ({ children, store }: WrapperProps): JSX.Element => {
  return (
    <GamesContext.Provider value={store}>{children}</GamesContext.Provider>
  );
};

export interface UIStoreStructure {
  isLoading: boolean;
  dispatchIsLoading: React.Dispatch<UIAction>;
}

export interface UIWrapperProps {
  children: JSX.Element | JSX.Element[];
  store: UIStoreStructure;
}

export const UIWrapper = ({ children, store }: UIWrapperProps): JSX.Element => {
  return <UIContext.Provider value={store}>{children}</UIContext.Provider>;
};
