import styled from "styled-components";

const DetailPageStyled = styled.main`
  background: #1f2122;
  color: white;
  margin-top: 0px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 23px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 95vw;
  padding: 0;

  .head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    flex: 1;

    &__image-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    &__background-image-main {
      border-radius: 23px;
      display: block;
      margin: 0.5rem;
      max-height: 300px;
      max-width: 100%;
      width: 85vw;
      object-fit: cover;
    }

    &__background-image-additional {
      border-radius: 23px;
      margin: 0.5rem;
      max-height: 300px;
      width: 85vw;
      object-fit: cover;
    }

    h2 {
      font-size: 35px;
      padding: 1rem;
    }
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;

    &__heading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0.5rem;
      margin-bottom: 1rem;

      > h4 {
        color: #b7b7b7;
      }
    }

    &__details {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin: 0.5rem;
      gap: 4rem;

      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0.5rem;

          > i {
            color: #be4871;
            font-size: 20px;
          }

          > span {
            font-size: 16px;
          }
        }
      }
    }

    &__screenshots {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      flex: 1;
      width: auto;
      flex-direction: column;

      > img {
        margin: 0.5rem;
        border-radius: 23px;
        max-height: 265px;
        width: 90vw;
        object-fit: cover;
      }
    }

    &__description {
      margin: 1rem;
      text-align: center;
    }
  }

  @media screen and (min-width: 650px) {
    .snippets {
      > div {
        flex-direction: row;
        gap: 4vw;
      }
    }
  }
  @media screen and (min-width: 1160px) {
    .head {
      &__image-container {
      }

      &__background-image-main {
        flex: 1;
        height: auto;
        width: auto;
      }

      &__background-image-additional {
        flex: 2;
        height: auto;
        width: auto;
      }
    }

    .info {
      &__details {
        justify-content: space-between;

        > div {
          flex-direction: row;
        }
      }
      &__screenshots {
        flex-direction: row;
        > img {
          width: 350px;
        }
      }
    }
  }
`;

export default DetailPageStyled;
