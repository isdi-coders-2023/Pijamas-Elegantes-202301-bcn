import { createContext } from "react";
import GameStructure from "../../data/types";

interface GameContextStructure {
  game: GameStructure;
}

const GameContext = createContext({} as GameContextStructure);

export default GameContext;
