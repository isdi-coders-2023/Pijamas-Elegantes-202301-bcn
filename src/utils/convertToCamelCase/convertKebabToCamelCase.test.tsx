import {
  CamelCaseGameDetailStructure,
  GameDetailStructure,
} from "../../data/types";
import {
  convertDetailsToCamelCase,
  convertGamesToCamelCase,
} from "./converKebabToCamelCase";

describe("Given a convertKebabToCamelCaseForGames function", () => {
  describe("When it receives a list of games with serpent case properties", () => {
    test("It should return another list of games with those properties converted to camelCase", () => {
      const serpentCaseGamesList = [
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

      const expectedCamelCaseGamesList = [
        {
          id: 1,
          name: "",
          released: "",
          backgroundImage: "",
          rating: 9,
          genres: [
            {
              name: "Action",
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

      const resultedGamesList = convertGamesToCamelCase(serpentCaseGamesList);

      expect(resultedGamesList).toStrictEqual(expectedCamelCaseGamesList);
    });
  });
});

describe("Given a convertKebabToCamelCaseForGameDetails function", () => {
  describe("When it receives a list of game details with serpent case properties", () => {
    test("It should return another list of game details with those properties converted to camelCase", () => {
      const serpentCaseGameDetails: GameDetailStructure = {
        id: 69,
        name: "",
        description: "",
        released: "",
        background_image: "",
        background_image_additional: "",
        rating: 5,
        added_by_status: {
          playing: 1,
        },
        genres: [
          {
            name: "",
          },
        ],
        tags: [
          {
            name: "",
            image_background: "",
          },
        ],
      };

      const expectedCamelCaseGameDetails: CamelCaseGameDetailStructure = {
        id: 69,
        name: "",
        description: "",
        released: "",
        backgroundImage: "",
        backgroundImageAdditional: "",
        rating: 5,
        addedByStatus: {
          playing: 1,
        },
        genres: [
          {
            name: "",
          },
        ],
        tags: [
          {
            name: "",
            image_background: "",
          },
        ],
      };

      const resultingGameDetails = convertDetailsToCamelCase(
        serpentCaseGameDetails
      );

      expect(resultingGameDetails).toStrictEqual(expectedCamelCaseGameDetails);
    });
  });
});
