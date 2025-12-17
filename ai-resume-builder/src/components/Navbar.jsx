import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">AI Resume Builder</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/builder" className="nav-item">
            Builder
          </NavLink>
        </li>
        <li>
          <NavLink to="/template" className="nav-item">
            Templates
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-item">
            Contact
          </NavLink>
        </li>
      </ul>
      {/* <button className="get-started-btn">Get Started 🚀</button> */}
      <Link to="/builder">
        <button className="get-started-btn">Get Started 🚀</button>
      </Link>
    </nav>
  );
};

export default Navbar;
