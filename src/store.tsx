import {
  CamelCaseGameDetailStructure,
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
import { UIAction } from "./store/actions/UI/types";

export const mockIsLoading = true;
export const dispatch: React.Dispatch<GamesAction> = jest.fn();
export const UIDispatch: React.Dispatch<UIAction> = jest.fn();
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
export const gameDetail: CamelCaseGameDetailStructure = {
  id: 1,
  name: "Beat yo meat",
  description: "",
  released: "",
  backgroundImage: "",
  backgroundImageAdditional: "",
  rating: 4,
  addedByStatus: {
    playing: 150000000,
  },
  genres: [
    {
      name: "",
    },
  ],
  tags: [
    {
      name: "",
    },
  ],
};
export const genre: GenreStructure = "";
export const pageNumber: PageNumberStructure = 2;
export const mockStore = {
  store: {
    games,
    pageNumber,
    genre,
    gameDetail,
    dispatch,
    genreDispatch,
    pageNumberDispatch,
  },
};
export const mockUIStore = {
  isLoading: mockIsLoading,
  dispatchIsLoading: UIDispatch,
};

export const mockDispatch = jest.spyOn(mockStore.store, "dispatch");
export const mockLoadGamesAction: LoadGamesAction = {
  type: GamesActionType.loadGames,
  payload: games,
};
