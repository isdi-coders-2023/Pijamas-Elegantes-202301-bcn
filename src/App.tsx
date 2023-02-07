import { useContext } from "react";
import useApi from "./hook/useApi";
import GamesContext from "./store/contexts/games/GameContext";

const App = () => {
  const { nextPage, previousPage, pageNumber } = useContext(GamesContext);

  useApi();

  return (
    <div className="App">
      <button onClick={() => nextPage(pageNumber)}>Next</button>
      <button onClick={() => previousPage(pageNumber)}>Previous</button>
    </div>
  );
};

export default App;
