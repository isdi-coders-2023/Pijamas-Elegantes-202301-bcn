import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useApi from "./useApi";
import { mockDispatch, mockLoadGamesAction, mockStore } from "../mocks/store";
import { Wrapper as MockContextProvider } from "../mocks/MockContextProvider";
import { errorHandlers } from "../mocks/handlers";
import { server } from "../mocks/server";

beforeAll(() => jest.clearAllMocks());

const store = mockStore;
const dispatcher = mockDispatch;
const loadCharactersAction = mockLoadGamesAction;

describe("Given a loadGames function that gets a game list", () => {
  describe("When we call it and is responded with a game list", () => {
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

  describe("When we call it and is responded with an error", () => {
    test("Then it shouldn't update our local game list", async () => {
      server.use(...errorHandlers);

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

      expect(dispatcher).not.toBeCalled();
    });
  });
});
