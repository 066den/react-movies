const Header = () => {
  return (
    <nav className="grey darken-3">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo right">
          React Portfolio
        </a>
        <ul id="nav-mobile" className="left">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
