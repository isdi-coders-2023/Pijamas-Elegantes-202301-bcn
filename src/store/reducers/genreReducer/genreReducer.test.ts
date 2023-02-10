import { GenreStructure } from "../../../data/types";
import { loadGenreActionCreator } from "../../actions/games/GamesActionCreators";
import { GenreActionType } from "../../actions/genre/types";
import genreReducer from "./genreReducer";

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
