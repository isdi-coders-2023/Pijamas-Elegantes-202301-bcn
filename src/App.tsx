import Browse from "./components/Browse/Browse";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  return (
    <div className="App">
      <Browse />
      <Pagination page={1} />
    </div>
  );
};

export default App;
