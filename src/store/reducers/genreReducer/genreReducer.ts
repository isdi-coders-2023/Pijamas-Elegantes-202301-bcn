import { GenreStructure } from "../../../data/types";
import {
  GenreAction,
  GenreActionType,
  LoadGenreAction,
} from "../../actions/genre/types";

const genreReducer = (
  currentGenre: GenreStructure,
  action: GenreAction
): GenreStructure => {
  let newGenre: GenreStructure;

  if (action.type === GenreActionType.loadGenre) {
    newGenre = (action as LoadGenreAction).payload;
  } else {
    newGenre = currentGenre;
  }
  return newGenre;
};

export default genreReducer;
