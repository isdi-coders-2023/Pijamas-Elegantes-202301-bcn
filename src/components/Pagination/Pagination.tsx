import { useState } from "react";
import Button from "../Button/Button";

const Pagination = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);

  const nextPage = (): void => {
    setPageNumber(pageNumber + 1);
  };

  const previousPage = (): void => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="pagination__buttons">
      <Button
        className="previous__page button"
        text={"Previous Page"}
        action={previousPage}
      />
      <Button
        className="next__page button"
        text={"Next Page"}
        action={nextPage}
      />
    </div>
  );
};

export default Pagination;
