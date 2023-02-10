import {
  GamesStructure,
  GenreStructure,
  PageNumberStructure,
} from "../../data/types";
import { gamesReducer, genreReducer, pageNumberReducer } from "./gamesReducer";
import {
  loadGamesActionCreator,
  loadGenreActionCreator,
  loadPageNumberActionCreator,
} from "../actions/games/GamesActionCreators";
import { GamesActionType } from "../actions/games/types";
import { GenreActionType } from "../actions/genre/types";
import { pageNumber } from "../../store";
import { PageNumberActionType } from "../actions/PageNumber/types";

describe("Given a gamesReducer function", () => {
  describe("When we give it a game list and a loadGames action", () => {
    test("Then it should return the same game list", () => {
      const games: GamesStructure = [
        {
          id: 4,
          name: "",
          released: "",
          background_image: "",
          rating: 10,
          genres: [
            {
              name: "Adventure",
            },
          ],
          added_by_status: {
            playing: 1,
          },
          platforms: [
            {
              name: "",
            },
          ],
        },
      ];

      const returnedGames = gamesReducer(games, loadGamesActionCreator(games));

      expect(returnedGames).toEqual(games);
    });
  });

  describe("When we give it a game list and an unknown action", () => {
    test("Then it should return the same game list", () => {
      const games: GamesStructure = [
        {
          id: 4,
          name: "",
          released: "",
          background_image: "",
          rating: 10,
          genres: [
            {
              name: "Adventure",
            },
          ],
          added_by_status: {
            playing: 1,
          },
          platforms: [
            {
              name: "",
            },
          ],
        },
      ];

      const MockAction = {
        type: "" as any as GamesActionType,
        payload: games,
      };

      const returnedGames = gamesReducer(games, MockAction);

      expect(returnedGames).toStrictEqual(games);
    });
  });
});

describe("Given a genreReducer function", () => {
  describe("When we give it a genre and a loadGenre action", () => {
    test("Then it should return the same genre", () => {
      const genre: GenreStructure = "action";

      const returnedGenre = genreReducer(genre, loadGenreActionCreator(genre));

      expect(returnedGenre).toEqual(genre);
    });
  });

  describe("When we give it a genre and an unknown action", () => {
    test("Then it should return the same genre", () => {
      const genre: GenreStructure = "indie";

      const MockAction = {
        type: "" as any as GenreActionType,
        payload: genre,
      };

      const returnedGenre = genreReducer(genre, MockAction);

      expect(returnedGenre).toStrictEqual(genre);
    });
  });
});

describe("Given a newPageReducer function", () => {
  describe("When we give it a pageNumber and a loadPageNumber action", () => {
    test("Then it should return the same pageNumber", () => {
      const pageNumber: PageNumberStructure = 1;

      const returnedPageNumber = pageNumberReducer(
        pageNumber,
        loadPageNumberActionCreator(pageNumber)
      );

      expect(returnedPageNumber).toEqual(pageNumber);
    });
  });

  describe("When we give it a pageNumber and an unknown action", () => {
    test("Then it should return the same genre", () => {
      const pageNumber: PageNumberStructure = 1;

      const MockAction = {
        type: "" as any as PageNumberActionType,
        payload: pageNumber,
      };

      const returnedPageNumber = pageNumberReducer(pageNumber, MockAction);

      expect(returnedPageNumber).toStrictEqual(pageNumber);
    });
  });
});
