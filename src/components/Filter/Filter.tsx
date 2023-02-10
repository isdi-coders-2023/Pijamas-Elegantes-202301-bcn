import { useContext, useState } from "react";
import { GenreStructure } from "../../data/types";
import useApi from "../../hooks/useApi";

import {
  loadGenreActionCreator,
  loadPageNumberActionCreator,
} from "../../store/actions/games/GamesActionCreators";
import { GamesContext } from "../../store/contexts/games/GameContext";
import FilterStyled from "./FilterStyled";

const FilterButton = (): JSX.Element => {
  const {
    store: { genreDispatch, pageNumberDispatch },
  } = useContext(GamesContext);

  const { loadGames } = useApi();
  const [selectedGenre, setSelectedGenre] = useState<GenreStructure>("");

  const loadGamesByGenre = (event: any) => {
    loadGames(1, event.target.value);
    setSelectedGenre(event.target.value);
    genreDispatch(loadGenreActionCreator(event.target.value));
    pageNumberDispatch(loadPageNumberActionCreator(1));
    return selectedGenre;
  };

  return (
    <FilterStyled>
      <select
        onChange={loadGamesByGenre}
        value={selectedGenre}
        className="filter__button"
      >
        <option value="" hidden>
          Filter By Genre
        </option>
        <option value="">Most Popular</option>
        <option value="action">Action</option>
        <option value="indie">Indie</option>
        <option value="adventure">Adventure</option>
        <option value="role-playing-games-rpg">RPG</option>
        <option value="strategy">Strategy</option>
        <option value="shooter">Shooter</option>
        <option value="casual">Casual</option>
        <option value="simulation">Simulation</option>
        <option value="puzzle">Puzzle</option>
        <option value="arcade">Arcade</option>
        <option value="platformer">Platformer</option>
        <option value="racing">Racing</option>
        <option value="massively-multiplayer">Massively-multiplayer</option>
        <option value="sports">Sports</option>
        <option value="fighting">Fighting</option>
        <option value="family">Family</option>
        <option value="board-games">Board Games</option>
        <option value="educational">Educational</option>
        <option value="card">Card</option>
      </select>
    </FilterStyled>
  );
};
export default FilterButton;
