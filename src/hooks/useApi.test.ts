import { renderHook, act } from "@testing-library/react";
import { GamesStructure } from "../data/types";
import { GamesContextProvider } from "../store/contexts/games/GameContextProvider";
import useApi from "./useApi";

describe("Given a loadGames function that gets a game list from a rest Api", () => {
  describe("When we invoke it and the Api responds to the request with a status 200", () => {
    test("Then it should return a game list", async () => {
      const { result } = renderHook(() => useApi(), {
        wrapper: GamesContextProvider,
      });

      await act(async () => {
        result.current.loadGames(1);
      });

      expect(result.current.games).toEqual([] as GamesStructure);
    });
  });
});
