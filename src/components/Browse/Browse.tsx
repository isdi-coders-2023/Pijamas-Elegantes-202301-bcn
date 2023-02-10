import GameCardList from "../GameCardList/GameCardList";
import BrowseStyled from "./BrowseStyled";

const Browse = (): JSX.Element => {
  return (
    <BrowseStyled>
      <h2 className="browse__title">Most popular</h2>
      <GameCardList />
    </BrowseStyled>
  );
};

export default Browse;
