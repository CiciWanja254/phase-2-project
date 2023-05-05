import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className="navbar-container">
      
        <NavLink
        to="/"
        className="navbar-link"
        
        >
          Home
        </NavLink>
        <NavLink
        to="/current"
        className="navbar-link"
        
        >
          Current
        </NavLink>
        <NavLink
        to="/history"
        className="navbar-link"
        
        >
          History
        </NavLink>
        <NavLink
        to="/reviews"
        className="navbar-link"
        
        >
          Reviews
        </NavLink>
    </div>
  );
}

export default Navbar;
