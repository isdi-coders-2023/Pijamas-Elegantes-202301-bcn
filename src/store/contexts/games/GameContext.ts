import { createContext } from "react";
import { GamesStructure } from "../../../data/types";
import { GamesAction } from "../../actions/games/types";

export interface GamesContextStructure {
  store: {
    games: GamesStructure;
    dispatch: React.Dispatch<GamesAction>;
  };
}

export const GamesContext = createContext({} as GamesContextStructure);
