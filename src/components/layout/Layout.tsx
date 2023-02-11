import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UIContext } from "../../store/contexts/UI/UIContext";
import Loading from "../Loading/Loading";

const Layout = (): JSX.Element => {
  const { isLoading } = useContext(UIContext);

  return (
    <>
      <main>
        {isLoading && <Loading />}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
