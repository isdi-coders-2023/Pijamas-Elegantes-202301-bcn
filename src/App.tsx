import HomePage from "./components/HomePage/HomePage";
import Pagination from "./components/Pagination/Pagination";
import Loading from "./components/Loading/Loading";
import { UIContext } from "./store/contexts/UI/UIContext";
import { useContext } from "react";

const App = () => {
  const { isLoading } = useContext(UIContext);

  return (
    <div className="App">
      {isLoading && <Loading />}

      <>
        <HomePage />
        <Pagination />
      </>
    </div>
  );
};

export default App;
