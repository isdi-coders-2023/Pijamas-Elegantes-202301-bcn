import styled from "styled-components";

const GameCardListStyled = styled.ul`
  padding: 41px 62px;
  background: #1f2122;
  color: white;
  margin-top: 101px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 23px;
  display: flex;
  flex-wrap: wrap;
  width: 95vw;

  .card-container__title {
    font-size: 32px;
    font-weight: 700;
    text-decoration: underline;
    padding-left: 62px;
  }

  .card-container__cards {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 21px;
    margin-top: 41px;
  }
`;

export default GameCardListStyled;
