import { GamesStructure } from "../../data/types";
import { gamesReducer } from "./gamesReducer";
import { loadGamesActionCreator } from "../actions/games/GamesActionCreators";
import { GamesActionType } from "../actions/games/types";

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
