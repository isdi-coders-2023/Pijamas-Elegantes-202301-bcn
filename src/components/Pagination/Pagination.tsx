import { useState } from "react";
import useApi from "../../hooks/useApi";
import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): JSX.Element => {
  const startPage = 2;
  const { loadGames } = useApi();
  let [pageNumber, setPageNumber] = useState(startPage);

  const nextPage = async () => {
    await loadGames(pageNumber + 1);
    setPageNumber(pageNumber + 1);
  };

  const previousPage = async () => {
    await loadGames(pageNumber - 1);
    setPageNumber(pageNumber - 1);
  };

  return (
    <PaginationStyled className="pagination">
      <Button
        className="pagination__button"
        disabled={pageNumber === 1 && true}
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
