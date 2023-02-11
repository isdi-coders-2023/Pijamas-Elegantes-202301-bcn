import { UIActionType } from "../actions/UI/types";
import {
  setIsLoadingToFalseActionCreator,
  setIsLoadingToTrueActionCreator,
} from "../actions/UI/UIActionsCreator";
import UIReducer from "./UIReducer";

describe("Given an UIReducer function", () => {
  describe("When when it receives a false loading status and a setIsLoadingToTrue action", () => {
    test("Then it should return true", () => {
      const currentLoadingStatus = false;
      const setIsLoadingToTrue = setIsLoadingToTrueActionCreator;

      const expectedResult = UIReducer(
        currentLoadingStatus,
        setIsLoadingToTrue()
      );

      expect(expectedResult).toBe(true);
    });
  });

  describe("When it receives a true loading status and an unsetLoadingStatus action,", () => {
    test("Then it should return false", () => {
      const currentLoadingStatus = true;
      const unsetIsloading = setIsLoadingToFalseActionCreator;

      const expectedResult = UIReducer(currentLoadingStatus, unsetIsloading());

      expect(expectedResult).toBe(false);
    });
  });

  describe("When it receives a true loading status and a mock action,", () => {
    test("Then it should return true", () => {
      const currentLoadingStatus = true;
      const mockAction = {
        type: "" as unknown as UIActionType,
      };

      const expectedResult = UIReducer(currentLoadingStatus, mockAction);

      expect(expectedResult).toBe(true);
    });
  });
});
