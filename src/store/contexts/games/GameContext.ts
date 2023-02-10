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
    dispatch: React.Dispatch<GamesAction>;
    genre: GenreStructure;
    genreDispatch: React.Dispatch<GenreAction>;
    pageNumber: PageNumberStructure;
    pageNumberDispatch: React.Dispatch<PageNumberAction>;
  };
}

export const GamesContext = createContext({} as GamesContextStructure);
