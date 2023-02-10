import { GamesContext } from "../../store/contexts/games/GameContext";
import { useContext, useEffect } from "react";
import { GameCard } from "../GameCard/GameCard";
import GameCardListStyled from "./GameCardListStyled";
import useApi from "../../hooks/useApi";
import { CamelCaseGameStructure } from "../../data/types";

const GameCardList = () => {
  let {
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
      <h2 className="card-container__title">Most popular</h2>

      <div className="card-container__cards">
        {(games as unknown as CamelCaseGameStructure[]).map(
          ({ backgroundImage, name, rating, genres, addedByStatus, id }) => (
            <GameCard
              gameImage={backgroundImage}
              gameName={name}
              rating={rating}
              genre={genres[0].name}
              currentPlayers={addedByStatus.playing}
              key={id}
            />
          )
        )}
      </div>
    </GameCardListStyled>
  );
};

export default GameCardList;
