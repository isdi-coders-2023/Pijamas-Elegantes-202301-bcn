import FilterButton from "../Filter/Filter";
import GameCardList from "../GameCardList/GameCardList";
import Pagination from "../Pagination/Pagination";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <div className="title-and-genre__container">
        <h2 className="card-container__title">Most Popular</h2>
        <FilterButton />
      </div>
      <GameCardList />
      <Pagination />
    </HomePageStyled>
  );
};

export default HomePage;
