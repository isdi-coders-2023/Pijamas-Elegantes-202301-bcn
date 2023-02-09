import { GenreStructure } from "../../../data/types";
import { GenreActionType, LoadGenreAction } from "./types";

export const loadgenreActionCreator = (
  genre: GenreStructure
): LoadGenreAction => ({
  type: GenreActionType.loadGenre,
  payload: genre,
});
