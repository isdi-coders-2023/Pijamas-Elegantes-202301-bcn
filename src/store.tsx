import { GamesStructure, GenreStructure } from "./data/types";
import {
  GamesAction,
  GamesActionType,
  LoadGamesAction,
} from "./store/actions/games/types";
import { GenreAction } from "./store/actions/genre/types";

export const dispatch: React.Dispatch<GamesAction> = jest.fn();
export const genreDispatch: React.Dispatch<GenreAction> = jest.fn();
export const games: GamesStructure = [
  {
    id: 1,
    added_by_status: {
      playing: 140,
    },
    background_image: "",
    genres: [],
    name: "Minecraft",
    platforms: [],
    rating: 2,
    released: "",
  },
  {
    id: 2,
    added_by_status: {
      playing: 10000000,
    },
    background_image: "",
    genres: [],
    name: "League Of Legends",
    platforms: [],
    rating: 1,
    released: "",
  },
];
export const genre: GenreStructure = "action";
export const mockStore = {
  store: {
    games,
    dispatch,
    genre,
    genreDispatch,
  },
};
export const mockDispatch = jest.spyOn(mockStore.store, "dispatch");
export const mockLoadGamesAction: LoadGamesAction = {
  type: GamesActionType.loadGames,
  payload: games,
};
