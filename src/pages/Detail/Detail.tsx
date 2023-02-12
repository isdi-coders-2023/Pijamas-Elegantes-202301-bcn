import { CamelCaseGameDetailStructure } from "../../data/types";
import DetailPageStyled from "./DetailPageStyled";

const gameDetailed: CamelCaseGameDetailStructure = {
  id: 420,
  name: "PAYDAY 2: MOCKED",
  description:
    "<p>The gang is back, and they have bigger and better plans. Objective based cooperative FPS became more complicated. The classic group of Hoxton, Dallas, Chains and Wolf got reinforcement, and now Payday Gang consists of 21 heisters, some of which are based on movie characters or even Youtubers. Players will be able to customize their own private arsenal, their masks, and skills, to complete the missions in their own way, be it stealthy sneak-in or full frontal assault. After completing missions, players will receive EXP points, money and a chance to get a special item that can be a gun modification, mask or a safe containing weapon skins.<br />\nPayday 2 is a multiplayer game, meaning, that even during offline missions players will be followed by AI characters, whose loadouts, masks and perks can be customized as well. This game has been supported by the developers for many years, and amount of DLC speaks plenty of their dedication to the player base.</p>",
  backgroundImage:
    "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
  backgroundImageAdditional:
    "https://media.rawg.io/media/screenshots/87f/87f88f6d70134609d92b825a56921f54.jpg",
  rating: 3.51,
  released: "2013-08-13",
  genres: [
    {
      name: "Action",
    },
  ],
  addedByStatus: {
    playing: 110,
  },
  tags: [
    {
      name: "Singleplayer",
      image_background:
        "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    },
    {
      name: "Steam Achievements",
      image_background:
        "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
    },
    {
      name: "Multiplayer",
      image_background:
        "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
    },
  ],
};

const Detail = (): JSX.Element => {
  return (
    <DetailPageStyled>
      <section className="head">
        <div className="head__image-container">
          <img
            className="head__background-image-main"
            src={gameDetailed.backgroundImage}
            alt=""
          />
          <img
            className="head__background-image-additional"
            src={gameDetailed.backgroundImageAdditional}
            alt=""
          />
        </div>
        <h2 className="head__heading">Game Details</h2>
      </section>
      <section className="info">
        <div className="info__heading">
          <h3>{gameDetailed.name}</h3>
          <h4>{gameDetailed.tags[0].name}</h4>
        </div>
        <div className="info__details snippets">
          <div>
            <div>
              <i className="fa-solid fa-star"></i>
              <span>{gameDetailed.rating}</span>
            </div>
            <div>
              <i className="fa-solid fa-calendar-days"></i>
              <span>{gameDetailed.released}</span>
            </div>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-user"></i>
              <span>{gameDetailed.addedByStatus.playing} Players</span>
            </div>
            <div>
              <i className="fa-solid fa-gamepad"></i>
              <span>{gameDetailed.genres[0].name}</span>
            </div>
          </div>
        </div>
        <div className="info__about">
          <div className="info__screenshots">
            <img src={gameDetailed.tags[0].image_background} alt="" />
            <img src={gameDetailed.tags[1].image_background} alt="" />
            <img src={gameDetailed.tags[2].image_background} alt="" />
          </div>
          <p className="info__description">{gameDetailed.description}</p>
        </div>
      </section>
    </DetailPageStyled>
  );
};

export default Detail;
