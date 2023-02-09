import { GamesStructure } from "../data/types";
import {
  GamesAction,
  GamesActionType,
  LoadGamesAction,
} from "../store/actions/games/types";

export const dispatch: React.Dispatch<GamesAction> = jest.fn();

export const games: GamesStructure = [];

export const mockStore = { dispatch, games };

export const mockDispatch = jest.spyOn(mockStore, "dispatch");

export const mockLoadGamesAction: LoadGamesAction = {
  type: GamesActionType.loadGames,
  payload: games,
};
