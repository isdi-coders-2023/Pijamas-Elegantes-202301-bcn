import { GenreStructure } from "../../../data/types";

export enum GenreActionType {
  loadGenre,
}

export interface GenreAction {
  type: GenreActionType;
}

export interface LoadGenreAction extends GenreAction {
  payload: GenreStructure;
}
