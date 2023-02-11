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
} from "../store";

beforeAll(() => jest.clearAllMocks());

const store = mockStore;
const dispatcher = mockDispatch;
const loadGamesAction = mockLoadGamesAction;

describe("Given a loadGames function", () => {
  describe("When we call it and is responded with a game list", () => {
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
  });
});
