import { Link } from "react-router-dom";
import "../CustomCss/Header.css";
const Header = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
        <Link to="/post">Posts</Link>
      </nav>
    </div>
  );
};

export default Header;
