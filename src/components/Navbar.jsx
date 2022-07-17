import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="navbar-link">
          <h1>My Home Library</h1>
        </Link>
      </div>
      <div>
        <Link to="/favorites" className="navbar-link">
          <h3>Favorite Book List</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
