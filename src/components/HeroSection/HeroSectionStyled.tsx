import styled from "styled-components";

const HeroSectionStyled = styled.section`
  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: 100%;
    margin: 50px;
    justify-content: space-around;

    .herosection__text {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }

  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 80px 60px;
  margin-top: 50px;
  width: 80vw;
  height: 520px;
  border-radius: 23px;
  background-image: url("media/banner-bg.webp");
  background-position: 50%;
  background-size: 480%;

  .herosection__text {
    text-align: center;
    height: 100%;
    font-weight: 700;
    font-size: 35px;
    line-height: 42px;
    display: flex;
    align-items: center;
  }
`;

export default HeroSectionStyled;
