import { useContext } from "react";
import { GamesContext } from "../../store/contexts/games/GameContext";
import FilterButton from "../Filter/Filter";
import GameCardList from "../GameCardList/GameCardList";
import Pagination from "../Pagination/Pagination";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const {
    store: { genre },
  } = useContext(GamesContext);

  const setGenre = () => {
    let titleGenre: string;

    if (!genre) {
      titleGenre = "Most Popular";
    } else {
      titleGenre = genre;
    }
    return titleGenre;
  };

  return (
    <HomePageStyled>
      <div className="title-and-genre__container">
        <h2 className="card-container__title">{setGenre()}</h2>
        <FilterButton />
      </div>
      <GameCardList />
      <Pagination />
    </HomePageStyled>
  );
};

export default HomePage;
