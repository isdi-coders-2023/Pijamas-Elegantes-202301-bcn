import styled from "styled-components";

const GameCardListStyled = styled.div`
  width: 1475px;
  padding: 41px 62px;
  background: #1f2122;
  color: white;
  margin: 101px 10px;
  border-radius: 23px;
  @media (max-width: 700px) {
    max-width: 100vw;
    margin: 0;
  }

  .card-container__title {
    font-size: 32px;
    font-weight: 700;
    text-decoration: underline;
    @media (max-width: 700px) {
      text-align: center;
    }
  }

  .card-container__cards {
    width: 1380px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 21px;
    margin-top: 41px;
    @media (max-width: 700px) {
      width: 100vw;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default GameCardListStyled;
