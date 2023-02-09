import { useState } from "react";
import useApi from "../../hooks/useApi";
const FilterButton = (): JSX.Element => {
  const { loadGames } = useApi();
  const [selectedGenre, setSelectedGenre] = useState("");

  const loadGamesByGenre = (event: any) => {
    loadGames(1, event.target.value);
    setSelectedGenre(event.target.value);
    return selectedGenre;
  };
  return (
    <div className="filterByGenre__button">
      <select onChange={loadGamesByGenre} value={selectedGenre}>
        <option value="">Most Popular</option>
        <option value="action">Action</option>
        <option value="indie">Indie</option>
        <option value="adventure">Adventure</option>
        <option value="rpg">RPG</option>
      </select>
    </div>
  );
};
export default FilterButton;
