import { NavLink } from "react-router-dom";
import NavigationStyled from "./Navigation.styled";

const Navigation = (): JSX.Element => {
  return (
    <NavigationStyled>
      <ul className="navigation-list">
        <li className="navigation-list__item item">
          <NavLink to={"/"}>
            <i className="fa-solid fa-house-user" aria-label="Home Page"></i>
            <span className="item__text" aria-label="Home Page">
              Home
            </span>
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
