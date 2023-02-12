import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UIContext } from "../../store/contexts/UI/UIContext";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";

const Layout = (): JSX.Element => {
  const { isLoading } = useContext(UIContext);

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <Outlet />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
};

export default Layout;
