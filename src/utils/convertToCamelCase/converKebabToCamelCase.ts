import { GameDetailStructure, GamesStructure } from "../../data/types";

export const convertGamesToCamelCase = (games: GamesStructure) => {
  return games.map((game) => {
    const transformedEntries = Object.entries(game).map((pair) => [
      pair[0].includes("_")
        ? pair[0].replace(/_./g, (m) => m.toUpperCase()[1])
        : pair[0],
      pair[1],
    ]);
    return Object.fromEntries(transformedEntries);
  });
};

export const convertDetailsToCamelCase = (game: GameDetailStructure) => {
  const transformedEntries = Object.entries(game).map((pair) => [
    pair[0].includes("_")
      ? pair[0].replace(/_./g, (m) => m.toUpperCase()[1])
      : pair[0],
    pair[1],
  ]);
  return Object.fromEntries(transformedEntries);
};
