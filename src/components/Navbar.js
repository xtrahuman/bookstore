import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <ul>
      <li key={1}>
        <NavLink to="/" className={(navData) => (navData.isActive ? 'active-link' : '')}>
          Books
        </NavLink>
      </li>
      <li key={2}>
        <NavLink to="/categories" className={(navData) => (navData.isActive ? 'active-link' : '')}>
          Categories
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
