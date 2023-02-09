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
    <CardStyled className="game-card" role="listitem" aria-label="game card">
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
          <h3 className="name__name" aria-label={gameName}>
            {gameName}
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
          <span className="details__genre" aria-label={genre}>
            {genre}
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
