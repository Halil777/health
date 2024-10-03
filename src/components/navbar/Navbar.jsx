import "./navbar.css";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar_container">
      <div className="navbar_logo">
        <a href="/">My Website</a>
      </div>
      <ul className="navbar_links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#category">Category</a>
        </li>
        <li>
          <a href="#bad-habits">Bad Habits</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#pharmacy">Pharmacy</a>
        </li>
      </ul>
      <div className="navbar_auth">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout_button">
            Logout
          </button>
        ) : (
          <a href="/login" className="login_button">
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
