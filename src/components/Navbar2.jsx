import React from "react";
import { NavLink } from "react-router-dom";


const Navbar2 = ({ulPatalla}) => {
  return (
    <nav className="navBar2" style={{display:ulPatalla}}>
      <ul>
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

export default Navbar2;
