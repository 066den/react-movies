const Header = () => {
  return (
    <nav className="grey darken-3">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo right">React Movies</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Repo</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header