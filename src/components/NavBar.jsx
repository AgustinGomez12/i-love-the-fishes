import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ largoUl }) => {
  return (
    <nav className="navBar">
      <ul style={{ height: largoUl }}>
        <li>
          <NavLink>Incio</NavLink>
        </li>
        <li>
          <NavLink>Peces</NavLink>
        </li>
        <li>
          <NavLink>Acuarios</NavLink>
        </li>
        <li>
          <NavLink>Documentales</NavLink>
        </li>
        <li>
          <NavLink>Videos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
