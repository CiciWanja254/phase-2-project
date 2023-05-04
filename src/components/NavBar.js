import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "3px 6px 6px",
  background: "indigo",
  textDecoration: "none",
  color: "white",
};
function Navbar() {
  return (
    <div>
      
        <NavLink
        to="/"
        exact
        style={linkStyles}
        >
          Home
        </NavLink>
        <NavLink
        to="/current"
        exact
        style={linkStyles}
        >
          Current
        </NavLink>
        <NavLink
        to="/history"
        exact
        style={linkStyles}
        >
          History
        </NavLink>
        <NavLink
        to="/reviews"
        exact
        style={linkStyles}
        >
          Reviews
        </NavLink>
    </div>
  );
}

export default Navbar;
