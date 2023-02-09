import { GamesStructure } from "../../../data/types";
import { loadGamesActionCreator } from "./GamesActionCreators";

describe("Given a loadGamesActionCreator function", () => {
  describe("When we call with a games list", () => {
    test("Then it should return an action with a payload containing the same game list", () => {
      const games: GamesStructure = [
        {
          id: 1,
          name: "",
          released: "",
          background_image: "",
          rating: 9,
          genres: [
            {
              name: "Action",
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

      const returnedGames = loadGamesActionCreator(games).payload;

      expect(returnedGames).toBe(games);
    });
  });
});
