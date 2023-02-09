import styled from "styled-components";

const GameCardListStyled = styled.ul`
  width: 1475px;
  padding: 41px 62px;
  background: #1f2122;
  color: white;
  margin: 101px 10px;
  border-radius: 23px;

  .card-container__title {
    font-size: 32px;
    font-weight: 700;
    text-decoration: underline;
  }

  .card-container__cards {
    width: 1380px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 21px;
    margin-top: 41px;
  }
`;

export default GameCardListStyled;
