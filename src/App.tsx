import Pagination from "./components/Pagination/Pagination";
import useApi from "./hooks/useApi";

const App = () => {
  useApi();

  return (
    <div className="App">
      <Pagination />
    </div>
  );
};

export default App;
