import { convertKebabToCamelForGames } from "./converKebabToCamel";

describe("Given a convertKebabToCamelCase function", () => {
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

      const resultedGamesList =
        convertKebabToCamelForGames(serpentCaseGamesList);

      expect(resultedGamesList).toStrictEqual(expectedCamelCaseGamesList);
    });
  });
});
