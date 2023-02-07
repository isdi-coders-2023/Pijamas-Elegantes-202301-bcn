import { createContext } from "react";
import { type GamesStructure } from "../../data/types";

interface GameContextStructure {
  game: GamesStructure;
  apiKey: string;
}

const GameContext = createContext({} as GameContextStructure);

export default GameContext;
