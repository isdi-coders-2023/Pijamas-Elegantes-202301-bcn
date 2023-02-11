import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useApi from "./useApi";
import { UIWrapper, Wrapper as MockContextProvider } from "../mocks/Wrapper";
import { errorHandlers } from "../mocks/handlers";
import { server } from "../mocks/server";
import {
  mockDispatch,
  mockLoadGamesAction,
  mockStore,
  mockUIStore,
  mockGameDetailAction,
  mockGameDetailDispatch,
} from "../store";

beforeAll(() => jest.clearAllMocks());

const store = mockStore;
const dispatcher = mockDispatch;
const gameDetailDispatcher = mockGameDetailDispatch;

const loadGamesAction = mockLoadGamesAction;
const inspectGameDetailAction = mockGameDetailAction;

describe("Given a useApi function", () => {
  describe("When we call its loadGames function and is responded with a game list", () => {
    test("Then it should update our local game list", async () => {
      const {
        result: {
          current: { loadGames },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return (
            <UIWrapper store={mockUIStore}>
              <MockContextProvider store={store}>
                {children}
              </MockContextProvider>
            </UIWrapper>
          );
        },
      });

      await act(async () => loadGames(1));

      expect(dispatcher).toHaveBeenCalledWith(loadGamesAction);
    });
  });

  describe("When we call its loadGames function and is responded with an error", () => {
    test("Then it shouldn't update our local game list", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { loadGames },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return (
            <UIWrapper store={mockUIStore}>
              <MockContextProvider store={store}>
                {children}
              </MockContextProvider>
            </UIWrapper>
          );
        },
      });

      await act(async () => loadGames(1));

      expect(dispatcher).not.toBeCalled();
    });
  });

  describe("When we call its loadDetails function and is responded with details of a particular game", () => {
    test("Then it should update our local game detail information", async () => {
      const {
        result: {
          current: { loadDetails },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return (
            <UIWrapper store={mockUIStore}>
              <MockContextProvider store={store}>
                {children}
              </MockContextProvider>
            </UIWrapper>
          );
        },
      });

      await act(async () => loadDetails(3939));

      expect(gameDetailDispatcher).toHaveBeenCalledWith(
        inspectGameDetailAction
      );
    });
  });

  describe("When we call its loadDetails function and is responded with an error", () => {
    test("Then it shouldn't update our local game detail information", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { loadDetails },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return (
            <UIWrapper store={mockUIStore}>
              <MockContextProvider store={store}>
                {children}
              </MockContextProvider>
            </UIWrapper>
          );
        },
      });

      await act(async () => loadDetails(3939));

      expect(gameDetailDispatcher).not.toBeCalled();
    });
  });
});
