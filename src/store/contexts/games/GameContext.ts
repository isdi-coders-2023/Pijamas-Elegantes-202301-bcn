import { createContext } from "react";
import { GamesStructure } from "../../../data/types";
import { GamesAction } from "../../actions/games/types";

export interface GamesContextStructure {
  games: GamesStructure;
  dispatch: React.Dispatch<GamesAction>;
  nextPage: (currentpage: number) => void;
  previousPage: (currentpage: number) => void;
  pageNumber: number;
}

export const GamesContext = createContext({} as GamesContextStructure);
