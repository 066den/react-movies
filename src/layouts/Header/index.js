import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="grey darken-3">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo right">
          React Portfolio
        </NavLink>

        <ul id="nav-mobile" className="left">
          <li>
            <NavLink to="/">Meals</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
