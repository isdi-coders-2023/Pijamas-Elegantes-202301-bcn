import Pagination from "./components/Pagination/Pagination";
import useApi from "./hook/useApi";

const App = () => {
  useApi();

  return (
    <div className="App">
      <Pagination />
    </div>
  );
};

export default App;
