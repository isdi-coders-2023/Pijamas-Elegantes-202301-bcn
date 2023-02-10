import GameCardList from "../GameCardList/GameCardList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <h2 className="browse__title">Most Popular</h2>
      <GameCardList />
    </HomePageStyled>
  );
};

export default HomePage;
