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
    let currentGenre: string;

    if (!genre) {
      currentGenre = "Most Popular";
    } else {
      currentGenre = genre;
    }
    return currentGenre;
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
