import { createContext } from "react";
import { type GameStructure } from "../../data/types";

interface GameContextStructure {
  game: GameStructure;
  apiKey: string;
}

const GameContext = createContext({} as GameContextStructure);

export default GameContext;
