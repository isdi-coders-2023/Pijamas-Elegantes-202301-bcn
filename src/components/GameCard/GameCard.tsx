import { CamelCaseGameStructure } from "../../data/types";
import { Link } from "react-router-dom";

import CardStyled from "./GameCardStyled";
export interface GameCardProps {
  game: CamelCaseGameStructure;
}

export const GameCard = ({
  game: {
    id,
    backgroundImage,
    name,
    rating,
    genres,
    addedByStatus: { playing: currentPlayers },
  },
}: GameCardProps) => {
  const displayName = name.includes(":") ? name.split(":")[0] : name;

  return (
    <CardStyled className="game-card">
      <Link to={`detail/${id}`}>
        <i className="fa -solid fa-heart"></i>
        <img
          src={backgroundImage}
          alt={displayName}
          width="327"
          height="222"
          className="game-card__image"
        />
        <div className="game-card__info info">
          <div className="info__name name">
            <h3 className="name__name" aria-label={displayName}>
              {displayName}
            </h3>

            <span className="name__rating">
              <i className="fa-solid fa-star"></i>

              <span className="details__rating__num">{`${rating}`}</span>
            </span>
          </div>
          <div className="info__details details">
            <span className="details__genre" role="definition">
              {genres[0].name}
            </span>
            <span className="details__user">
              <i className="fa-solid fa-user"></i>
              <span className="details__user__num">{`${currentPlayers}`}</span>
            </span>
          </div>
        </div>
      </Link>
    </CardStyled>
  );
};
