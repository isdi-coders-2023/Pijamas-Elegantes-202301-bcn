import { createContext } from "react";
import { GamesStructure, GenreStructure } from "../../../data/types";
import { GamesAction } from "../../actions/games/types";
import { GenreAction } from "../../actions/genre/types";

export interface GamesContextStructure {
  store: {
    games: GamesStructure;
    dispatch: React.Dispatch<GamesAction>;
    genre: GenreStructure;
    genreDispatch: React.Dispatch<GenreAction>;
  };
}

export const GamesContext = createContext({} as GamesContextStructure);
