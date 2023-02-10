import HomePage from "./components/HomePage/HomePage";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  return (
    <div className="App">
      <HomePage />
      <Pagination page={1} />
    </div>
  );
};

export default App;
