import { useContext, useState } from "react";
import useApi from "../../hooks/useApi";
import { GamesContext } from "../../store/contexts/games/GameContext";
import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): JSX.Element => {
  const {
    store: { genre },
  } = useContext(GamesContext);

  const { loadGames } = useApi();
  let [pageNumber, setPageNumber] = useState(1);

  const nextPage = async () => {
    await loadGames(pageNumber + 1, genre);
    setPageNumber(pageNumber + 1);
  };

  const previousPage = async () => {
    if (pageNumber === 1) {
      return;
    }

    await loadGames(pageNumber - 1, genre);
    setPageNumber(pageNumber - 1);
  };

  return (
    <PaginationStyled className="pagination">
      <Button
        className="pagination__button"
        disabled={pageNumber === 1}
        text={"Previous Page"}
        action={previousPage}
      />
      <Button
        className="pagination__button"
        disabled={false}
        text={"Next Page"}
        action={nextPage}
      />
    </PaginationStyled>
  );
};

export default Pagination;
