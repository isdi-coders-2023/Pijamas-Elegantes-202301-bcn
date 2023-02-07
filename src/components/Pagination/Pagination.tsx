import { useState } from "react";
import useApi from "../../hook/useApi";
import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): JSX.Element => {
  const startPage = 1;
  const { loadGames } = useApi();
  let [pageNumber, setPageNumber] = useState(startPage);

  const nextPage = async () => {
    await loadGames(pageNumber + 1);
    setPageNumber(pageNumber + 1);
  };

  const previousPage = async () => {
    if (pageNumber === 1) {
      return;
    }

    await loadGames(pageNumber - 1);
    setPageNumber(pageNumber - 1);
  };

  return (
    <PaginationStyled className="pagination__buttons">
      <Button
        className={pageNumber === 1 ? "previous__page first" : "previous__page"}
        text={"Previous Page"}
        action={previousPage}
      />
      <Button
        className="next__page button"
        text={"Next Page"}
        action={nextPage}
      />
    </PaginationStyled>
  );
};

export default Pagination;
