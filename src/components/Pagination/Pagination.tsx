import { useState } from "react";
import useApi from "../../hooks/useApi";
import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  page: number;
}

const Pagination = ({ page }: PaginationProps): JSX.Element => {
  const { loadGames } = useApi();
  let [pageNumber, setPageNumber] = useState(page);

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
