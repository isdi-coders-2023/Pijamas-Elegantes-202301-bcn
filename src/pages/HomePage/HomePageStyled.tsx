import styled from "styled-components";

const HomePageStyled = styled.main`
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

  .title-and-genre__container {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    padding-bottom: 0px;
    flex-wrap: wrap;
    margin: 20px;
  }

  .card-container__title {
    font-size: 45px;
    font-weight: 700;
    text-decoration: underline;
  }

  .card-container__title:first-letter {
    text-transform: uppercase;
  }
  @media screen and (max-width: 800px) {
    .card-container__title {
      padding-bottom: 40px;
    }

    .title-and-genre__container {
      justify-content: center;
    }
  }
`;

export default HomePageStyled;
