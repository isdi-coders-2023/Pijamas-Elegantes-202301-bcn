import { renderHook } from "@testing-library/react";
import { mockDispatch, mockLoadGamesAction, mockStore } from "../mocks/store";
import { Wrapper as MockContextProvider } from "../mocks/MockContextProvider";
import useApi from "./useApi";
import { act } from "react-dom/test-utils";

beforeAll(() => jest.clearAllMocks());

const store = mockStore;
const dispatcher = mockDispatch;
const loadCharactersAction = mockLoadGamesAction;

describe("Given a loadGames function that gets a game list", () => {
  describe("When we call it", () => {
    test("Then it should update our local game list", async () => {
      const {
        result: {
          current: { loadGames },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return (
            <MockContextProvider store={store}>{children}</MockContextProvider>
          );
        },
      });

      await act(async () => loadGames(1));

      expect(dispatcher).toHaveBeenCalledWith(loadCharactersAction);
    });
  });
});
