import { useContext, useEffect } from "react";
import useApi from "../../hooks/useApi";
import { GamesContext } from "../../store/contexts/games/GameContext";
import { GameCard } from "../GameCard/GameCard";
import GameCardListStyled from "./GameCardListStyled";
import Pagination from "../Pagination/Pagination";
import FilterButton from "../Filter/Filter";

const GameCardList = () => {
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
    <GameCardListStyled className="card-container" role="list">
      <h2 className="card-container__title">Most popular</h2>

      <div className="card-container__cards">
        {games.map((game, position) => (
          <GameCard game={game} key={`${game.name} ${position}`} />
        ))}
      </div>
      <Pagination />
      <FilterButton />
    </GameCardListStyled>
  );
};

export default GameCardList;
