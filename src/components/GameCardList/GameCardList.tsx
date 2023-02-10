import { useContext, useEffect } from "react";
import useApi from "../../hooks/useApi";
import { GamesContext } from "../../store/contexts/games/GameContext";
import { GameCard } from "../GameCard/GameCard";
import GameCardListStyled from "./GameCardListStyled";

const GameCardList = (): JSX.Element => {
  const {
    store: { games },
  } = useContext(GamesContext);
  const { loadGames } = useApi();

  useEffect(() => {
    (async () => {
      await loadGames(1);
    })();
  }, [loadGames]);

  return (
    <GameCardListStyled className="card-container">
      <div className="card-container__cards">
        {games.map((game, position) => (
          <GameCard game={game} key={`${game.name} ${position}`} />
        ))}
      </div>
    </GameCardListStyled>
  );
};

export default GameCardList;
