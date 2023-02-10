import { createContext } from "react";
import {
  CamelCaseGameStructure,
  GenreStructure,
  PageNumberStructure,
} from "../../../data/types";
import { GamesAction } from "../../actions/games/types";
import { GenreAction } from "../../actions/genre/types";
import { PageNumberAction } from "../../actions/PageNumber/types";

export interface GamesContextStructure {
  store: {
    games: CamelCaseGameStructure[];
    genre: GenreStructure;
    pageNumber: PageNumberStructure;
    dispatch: React.Dispatch<GamesAction>;
    genreDispatch: React.Dispatch<GenreAction>;
    pageNumberDispatch: React.Dispatch<PageNumberAction>;
  };
}

export const GamesContext = createContext({} as GamesContextStructure);
