import { CamelCaseGameDetailStructure } from "../../../data/types";
import { seeGameDetailsActionCreator } from "../../actions/games/GamesActionCreators";
import { gameDetailsReducer } from "./gameDetailsReducer";

describe("Given a gamesDetailsReducer function", () => {
  describe("When we give it a game with details", () => {
    test("Then it should return the same game with details", () => {
      const game: CamelCaseGameDetailStructure = {
        id: 1,
        name: "Baldur's Gate",
        genres: [
          {
            name: "",
          },
        ],
        released: "",
        rating: 5,
        addedByStatus: {
          playing: 30,
        },
        backgroundImage: "",
        backgroundImageAdditional: "",
        description: "",
        tags: [
          {
            name: "",
          },
        ],
      };

      const returnedGame = gameDetailsReducer(
        game,
        seeGameDetailsActionCreator(game)
      );

      expect(returnedGame).toEqual(game);
    });
  });
});
