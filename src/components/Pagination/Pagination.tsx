import { useContext } from "react";
import useApi from "../../hooks/useApi";
import { loadPageNumberActionCreator } from "../../store/actions/games/GamesActionCreators";
import { GamesContext } from "../../store/contexts/games/GameContext";
import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): JSX.Element => {
  const {
    store: { genre, pageNumber, pageNumberDispatch },
  } = useContext(GamesContext);

  const { loadGames } = useApi();

  const nextPage = async () => {
    await loadGames(pageNumber + 1, genre);
    pageNumberDispatch(loadPageNumberActionCreator(pageNumber + 1));
  };

  const previousPage = async () => {
    await loadGames(pageNumber - 1, genre);
    pageNumberDispatch(loadPageNumberActionCreator(pageNumber - 1));
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
