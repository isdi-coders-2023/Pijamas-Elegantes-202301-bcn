import { useContext, useEffect } from "react";
import useApi from "../../hooks/useApi";
import { GamesContext } from "../../store/contexts/games/GameContext";
import { GameCard } from "../GameCard/GameCard";
import GameCardListStyled from "./GameCardListStyled";

const GameCardList = () => {
  const { loadGames } = useApi();

  useEffect(() => {
    (async () => {
      await loadGames(1);
    })();
  }, [loadGames]);

  const { games } = useContext(GamesContext);

  return (
    <GameCardListStyled className="card-container" role="list">
      <h2 className="card-container__title">Most popular</h2>

      <div className="card-container__cards">
        {games.map(
          ({ background_image, name, rating, genres, added_by_status, id }) => (
            <GameCard
              gameImage={background_image}
              gameName={name}
              rating={rating}
              genre={genres[0].name}
              currentPlayers={added_by_status.playing}
              key={id}
            />
          )
        )}
      </div>
    </GameCardListStyled>
  );
};

export default GameCardList;
