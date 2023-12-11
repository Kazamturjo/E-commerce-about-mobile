import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #MobileLIfe
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "NavLink" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "NavLink" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/mobile"
          className={({ isActive }) => (isActive ? "NavLink" : null)}
        >
          Mobile
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "NavLink" : null)}
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
