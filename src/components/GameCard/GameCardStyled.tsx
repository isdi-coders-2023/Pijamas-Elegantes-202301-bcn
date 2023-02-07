import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  position: relative;
  width: 327px;
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
    flex-direction: row;
    justify-content: space-between;
    gap: 91px;
    padding: 22px 32.93px;
    width: 327px;

    .name {
      display: flex;
      flex-direction: column;
      gap: 13px;
      &__name {
        font-weight: 700;
      }

      &__genre {
        color: #b7b7b7;
        -webkit-text-stroke: 1px black;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 13px;

      &__rating {
        align-items: center;

        .fa-star {
          color: yellow;
        }
      }

      &__user {
        align-items: center;

        .fa-user {
          color: #ec6090;
        }
      }
    }
  }
`;

export default CardStyled;
