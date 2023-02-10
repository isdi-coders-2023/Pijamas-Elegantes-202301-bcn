import {
  GamesStructure,
  GenreStructure,
  PageNumberStructure,
} from "../../../data/types";
import { LoadGenreAction, GenreActionType } from "../genre/types";
import {
  LoadPageNumberAction,
  PageNumberActionType,
} from "../PageNumber/types";
import { GamesActionType, LoadGamesAction } from "./types";

export const loadGamesActionCreator = (
  games: GamesStructure
): LoadGamesAction => ({
  type: GamesActionType.loadGames,
  payload: games,
});

export const loadGenreActionCreator = (
  genre: GenreStructure
): LoadGenreAction => ({
  type: GenreActionType.loadGenre,
  payload: genre,
});

export const loadPageNumberActionCreator = (
  PageNumber: PageNumberStructure
): LoadPageNumberAction => ({
  type: PageNumberActionType.loadPageNumber,
  payload: PageNumber,
});
