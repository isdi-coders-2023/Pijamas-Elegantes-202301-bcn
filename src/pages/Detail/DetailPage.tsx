import useApi from "../../hooks/useApi";
import DetailPageStyled from "./DetailPageStyled";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DetailPage = (): JSX.Element => {
  const { gameDetail, loadDetails } = useApi();

  const { id } = useParams();

  const idNumber = +id!;

  useEffect(() => {
    (async () => {
      await loadDetails(idNumber);
    })();
  }, [idNumber, loadDetails]);

  return (
    <DetailPageStyled>
      <section className="head">
        <div className="head__image-container">
          <img
            className="head__background-image-main"
            src={gameDetail.backgroundImage}
            alt=""
            aria-label="main game image"
          />
          <img
            className="head__background-image-additional"
            src={gameDetail.backgroundImageAdditional}
            alt=""
            aria-label="alternative game image"
          />
        </div>
        <h2 className="head__heading">Game Details</h2>
      </section>
      <section className="info">
        <div className="info__heading">
          <h3>{gameDetail.name}</h3>
          {gameDetail.tags && <h4>{gameDetail.tags[0].name}</h4>}
        </div>
        <div className="info__details snippets">
          <div>
            <div>
              <i className="fa-solid fa-star"></i>
              <span>{gameDetail.rating}</span>
            </div>
            <div>
              <i className="fa-solid fa-calendar-days"></i>
              <span>{gameDetail.released}</span>
            </div>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-user"></i>
              {gameDetail.addedByStatus && (
                <span>{gameDetail.addedByStatus.playing} Players</span>
              )}
            </div>
            <div>
              <i className="fa-solid fa-gamepad"></i>
              {gameDetail.genres && <span>{gameDetail.genres[0].name}</span>}
            </div>
          </div>
        </div>
        <div className="info__about">
          <div className="info__screenshots">
            {gameDetail.tags && (
              <img src={gameDetail.tags[0].image_background} alt="" />
            )}
            {gameDetail.tags && (
              <img src={gameDetail.tags[1].image_background} alt="" />
            )}
            {gameDetail.tags && (
              <img src={gameDetail.tags[2].image_background} alt="" />
            )}
          </div>
          <p className="info__description">{gameDetail.description}</p>
        </div>
      </section>
    </DetailPageStyled>
  );
};

export default DetailPage;
