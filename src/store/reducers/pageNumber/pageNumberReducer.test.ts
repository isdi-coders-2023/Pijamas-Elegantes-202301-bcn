import { PageNumberStructure } from "../../../data/types";
import { loadPageNumberActionCreator } from "../../actions/games/GamesActionCreators";
import { PageNumberActionType } from "../../actions/PageNumber/types";
import { pageNumberReducer } from "./pageNumberReducer";

describe("Given a pageNumberReduction function", () => {
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
});
