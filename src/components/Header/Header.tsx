import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <h1 className="header-title">GameVault</h1>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
