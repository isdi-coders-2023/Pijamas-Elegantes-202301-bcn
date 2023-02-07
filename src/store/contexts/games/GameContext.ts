import { createContext } from "react";
import { GamesStructure } from "../../../data/types";
import { GamesAction } from "../../actions/games/types";

interface GamesContextStructure {
  games: GamesStructure;
  dispatch: React.Dispatch<GamesAction>;
  nextPage: (currentpage: number) => void;
  previousPage: (currentpage: number) => void;
  pageNumber: number;
}

const GamesContext = createContext({} as GamesContextStructure);

export default GamesContext;
