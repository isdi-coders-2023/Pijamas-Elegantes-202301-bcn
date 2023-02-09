import GameCardList from "./components/GameCardList/GameCardList";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  return (
    <div className="App">
      <GameCardList />
      <Pagination page={1} />
    </div>
  );
};

export default App;
