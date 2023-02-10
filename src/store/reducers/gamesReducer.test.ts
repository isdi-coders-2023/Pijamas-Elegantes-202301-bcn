import { CamelCaseGameStructure, GenreStructure } from "../../data/types";
import { gamesReducer, genreReducer } from "./gamesReducer";
import {
  loadGamesActionCreator,
  loadGenreActionCreator,
} from "../actions/games/GamesActionCreators";
import { GamesActionType } from "../actions/games/types";
import { GenreActionType } from "../actions/genre/types";

describe("Given a gamesReducer function", () => {
  describe("When we give it a game list and a loadGames action", () => {
    test("Then it should return the same game list", () => {
      const games: CamelCaseGameStructure[] = [
        {
          id: 4,
          name: "",
          released: "",
          backgroundImage: "",
          rating: 10,
          genres: [
            {
              name: "Adventure",
            },
          ],
          addedByStatus: {
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
      const games: CamelCaseGameStructure[] = [
        {
          id: 4,
          name: "",
          released: "",
          backgroundImage: "",
          rating: 10,
          genres: [
            {
              name: "Adventure",
            },
          ],
          addedByStatus: {
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
