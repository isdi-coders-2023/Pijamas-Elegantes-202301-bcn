import { GamesStructure, GenreStructure } from "../../../data/types";
import { GenreActionType, LoadGenreAction } from "../genre/types";
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
