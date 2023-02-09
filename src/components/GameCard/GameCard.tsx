import { GameStructure } from "../../data/types";
import CardStyled from "./GameCardStyled";
export interface GameCardProps {
  game: GameStructure;
  key: string;
}

export const GameCard = ({
  game: {
    background_image,
    name,
    rating,
    genres,
    added_by_status: { playing: currentPlayers },
  },
}: GameCardProps) => {
  return (
    <CardStyled className="game-card" role="listitem" aria-label="game card">
      <i className="fa-solid fa-heart"></i>
      <img
        src={background_image}
        alt={name}
        width="327"
        height="222"
        className="game-card__image"
      />
      <div className="game-card__info info">
        <div className="info__name name">
          <h3 className="name__name" aria-label={name}>
            {name}
          </h3>

          <span className="name__rating">
            <i className="fa-solid fa-star"></i>

            <span
              aria-label={`${rating}`}
              className="details__rating__num"
            >{`${rating}`}</span>
          </span>
        </div>
        <div className="info__details details">
          <span
            className="details__genre"
            role="definition"
            aria-label={genres[0].name}
          >
            {genres[0].name}
          </span>
          <span className="details__user">
            <i className="fa-solid fa-user"></i>
            <span
              className="details__user__num"
              aria-label={`${currentPlayers}`}
            >{`${currentPlayers}`}</span>
          </span>
        </div>
      </div>
    </CardStyled>
  );
};
