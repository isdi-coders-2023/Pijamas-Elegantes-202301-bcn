import { Outlet, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UIContext } from "../../store/contexts/UI/UIContext";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  const { isLoading } = useContext(UIContext);

  return (
    <>
      <Header />
      <main>
        {isLoading && <Loading />}
        <Outlet />
      </main>
      <Routes>
        <Route path="/home" />
      </Routes>
    </>
  );
};

export default Layout;
