import DetailPageStyled from "./DetailPageStyled";

const Detail = (): JSX.Element => {
  return (
    <DetailPageStyled>
      <section className="head">
        <div className="head__image-container">
          <div className="head__background-image-main"></div>
          <div className="head__background-image-additional"></div>
        </div>
        <h2 className="head__heading">Game Details</h2>
      </section>
      <section className="info">
        <div className="info__heading">
          <h3>Fortnite</h3>
          <h4>tag</h4>
        </div>
        <div className="info__details">
          <div>
            <i className="fa-solid fa-star"></i>
            <span>score</span>
          </div>
          <div>
            <i className="fa-solid fa-calendar-days"></i>
            <span>12/07/2023</span>
          </div>
          <div>
            <i className="fa-solid fa-user"></i>
            <span>420 Players</span>
          </div>
          <div>
            <i className="fa-solid fa-gamepad"></i>
          </div>
          <span>genre</span>
        </div>
        <div className="info__about">
          <div className="info__screenshots">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <p className="info__description"></p>
        </div>
      </section>
    </DetailPageStyled>
  );
};

export default Detail;
