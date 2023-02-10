import {
  GamesStructure,
  GenreStructure,
  PageNumberStructure,
} from "../../data/types";
import {
  GamesAction,
  GamesActionType,
  LoadGamesAction,
} from "../actions/games/types";
import {
  GenreAction,
  GenreActionType,
  LoadGenreAction,
} from "../actions/genre/types";
import {
  LoadPageNumberAction,
  PageNumberAction,
  PageNumberActionType,
} from "../actions/PageNumber/types";

export const gamesReducer = (
  currentGames: GamesStructure,
  action: GamesAction
): GamesStructure => {
  let newGames: GamesStructure;

  if (action.type === GamesActionType.loadGames) {
    newGames = [...(action as LoadGamesAction).payload];
  } else {
    newGames = currentGames;
  }

  return newGames;
};

export const genreReducer = (
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

export const pageNumberReducer = (
  currentPageNumber: PageNumberStructure,
  action: PageNumberAction
): PageNumberStructure => {
  let newPageNumber: PageNumberStructure;

  if (action.type === PageNumberActionType.loadPageNumber) {
    newPageNumber = (action as LoadPageNumberAction).payload;
  } else {
    newPageNumber = currentPageNumber;
  }
  return newPageNumber;
};
