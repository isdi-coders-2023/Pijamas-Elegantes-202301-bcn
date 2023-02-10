import {
  CamelCaseGameStructure,
  GenreStructure,
  PageNumberStructure,
} from "./data/types";
import {
  GamesAction,
  GamesActionType,
  LoadGamesAction,
} from "./store/actions/games/types";
import { GenreAction } from "./store/actions/genre/types";
import { PageNumberAction } from "./store/actions/PageNumber/types";

export const dispatch: React.Dispatch<GamesAction> = jest.fn();
export const genreDispatch: React.Dispatch<GenreAction> = jest.fn();
export const pageNumberDispatch: React.Dispatch<PageNumberAction> = jest.fn();
export const games: CamelCaseGameStructure[] = [
  {
    id: 1,
    addedByStatus: {
      playing: 140,
    },
    backgroundImage: "",
    genres: [
      {
        name: "action",
      },
    ],
    name: "Minecraft",
    platforms: [
      {
        name: "PlayStation 4",
      },
    ],
    rating: 2,
    released: "",
  },
  {
    id: 2,
    addedByStatus: {
      playing: 10000000,
    },
    backgroundImage: "",
    genres: [
      {
        name: "action",
      },
    ],
    name: "League Of Legends",
    platforms: [
      {
        name: "PlayStation 4",
      },
    ],
    rating: 1,
    released: "",
  },
];
export const genre: GenreStructure = "";
export const pageNumber: PageNumberStructure = 2;
export const mockStore = {
  store: {
    games,
    dispatch,
    genre,
    genreDispatch,
    pageNumber,
    pageNumberDispatch,
  },
};
export const mockDispatch = jest.spyOn(mockStore.store, "dispatch");
export const mockLoadGamesAction: LoadGamesAction = {
  type: GamesActionType.loadGames,
  payload: games,
};
