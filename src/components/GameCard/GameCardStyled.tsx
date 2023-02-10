import styled from "styled-components";

const CardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  min-width: 327px;
  left: -0.5px;
  top: 0px;

  background: #27292a;
  color: white;
  font-size: 20px;
  border-radius: 23px;

  .fa-heart {
    position: absolute;
    color: #757575;
    font-size: 58px;
    height: 53px;
    left: 255.5px;
    top: 24px;

    -webkit-text-stroke: 3px white;
    transform: scale(1, 1);
  }

  .game-card__image {
    min-width: 327px;
    min-height: 222px;
    object-fit: cover;
    border-radius: 23px 23px 0 0;
  }

  .game-card__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 13px;
    padding: 22px 32.93px;
    min-width: 327px;
    height: 140px;

    .name {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &__name {
        font-weight: 700;
        width: 188.65px;
        margin-right: 10px;
      }

      &__rating {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 64.69px;

        .fa-star {
          color: yellow;
        }
      }
    }

    .details {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &__genre {
        color: #b7b7b7;
        width: 188.65px;
        -webkit-text-stroke: 1px black;
      }

      &__user {
        width: 64.69px;
        align-items: center;

        .fa-user {
          color: #ec6090;
        }
      }
    }
  }
`;

export default CardStyled;
