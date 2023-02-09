import { useContext, useState } from "react";
import { GenreStructure } from "../../data/types";
import useApi from "../../hooks/useApi";
import { loadGenreActionCreator } from "../../store/actions/games/GamesActionCreators";
import { GamesContext } from "../../store/contexts/games/GameContext";

const FilterButton = (): JSX.Element => {
  const {
    store: { genreDispatch },
  } = useContext(GamesContext);

  const { loadGames } = useApi();
  const [selectedGenre, setSelectedGenre] = useState<GenreStructure>("");

  const loadGamesByGenre = (event: any) => {
    loadGames(1, event.target.value);
    setSelectedGenre(event.target.value);
    genreDispatch(loadGenreActionCreator(event.target.value));
    return selectedGenre;
  };

  return (
    <div className="filterByGenre__button">
      <select onChange={loadGamesByGenre} value={selectedGenre}>
        <option value="">Most Popular</option>
        <option value="action">action</option>
        <option value="indie">indie</option>
        <option value="adventure">adventure</option>
      </select>
    </div>
  );
};
export default FilterButton;
