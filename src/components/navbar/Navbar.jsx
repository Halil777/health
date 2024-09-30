import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="nav_links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
