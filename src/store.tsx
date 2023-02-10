import { CamelCaseGameStructure } from "./data/types";
import {
  GamesAction,
  GamesActionType,
  LoadGamesAction,
} from "./store/actions/games/types";

export const dispatch: React.Dispatch<GamesAction> = jest.fn();
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
export const mockStore = {
  store: {
    games,
    dispatch,
  },
};
export const mockDispatch = jest.spyOn(mockStore.store, "dispatch");
export const mockLoadGamesAction: LoadGamesAction = {
  type: GamesActionType.loadGames,
  payload: games,
};
