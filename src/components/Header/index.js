import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/products"> Products </NavLink>
        </li>
        <li>
          <NavLink to="/create">Add Product</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
