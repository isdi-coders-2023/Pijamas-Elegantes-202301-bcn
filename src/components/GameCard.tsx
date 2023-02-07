import CardStyled from "./GameCardStyled";
export interface GameCardProps {
  gameImage: string;
  gameName: string;
  rating: number;
  genre: string;
  currentPlayers: number;
}

export const GameCard = ({
  gameImage,
  gameName,
  rating,
  genre,
  currentPlayers,
}: GameCardProps) => {
  return (
    <CardStyled className="game-card">
      <i className="fa-solid fa-heart"></i>
      <img
        src={gameImage}
        alt={gameName}
        width="327"
        height="222"
        className="game-card__image"
      />
      <div className="game-card__info info">
        <div className="info__name name">
          <span className="name__name">{gameName}</span>
          <span className="name__genre">{genre}</span>
        </div>
        <div className="info__details details">
          <span className="details__rating">
            <i className="fa-solid fa-star"></i>
            <span className="details__rating__num">{rating}</span>
          </span>
          <span className="details__user">
            <i className="fa-solid fa-user"></i>
            <span className="details__user__num">{currentPlayers}</span>
          </span>
        </div>
      </div>
    </CardStyled>
  );
};
