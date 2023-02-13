import {
  GameDetailActionType,
  InspectGameDetailAction,
} from "./store/actions/detail/types";
import { GenreStructure, PageNumberStructure } from "./data/types";
import { GamesActionType, LoadGamesAction } from "./store/actions/games/types";
import {
  dispatch,
  genreDispatch,
  pageNumberDispatch,
  gameDetailDispatch,
  mockIsLoading,
  UIDispatch,
  gameDetail,
  games,
} from "./store";

export const genre: GenreStructure = "action";
export const pageNumber: PageNumberStructure = 2;
export const mockStore2 = {
  store: {
    games,
    pageNumber,
    genre,
    gameDetail,
    dispatch,
    genreDispatch,
    pageNumberDispatch,
    gameDetailDispatch,
  },
};
export const mockUIStore = {
  isLoading: mockIsLoading,
  dispatchIsLoading: UIDispatch,
};

export const mockDispatch = jest.spyOn(mockStore2.store, "dispatch");

export const mockGameDetailDispatch = jest.spyOn(
  mockStore2.store,
  "gameDetailDispatch"
);

export const mockLoadGamesAction: LoadGamesAction = {
  type: GamesActionType.loadGames,
  payload: games,
};

export const mockGameDetailAction: InspectGameDetailAction = {
  type: GameDetailActionType.loadGameDetail,
  payload: gameDetail,
};
