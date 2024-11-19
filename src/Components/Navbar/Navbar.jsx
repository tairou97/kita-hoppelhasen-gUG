// Navbar.js
import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navBar = [
    { name: "Home", to: "/", Id: 1 },
    { name: "Über uns", to: "/about", Id: 2 },
    { name: "Galerie", to: "/galerie", Id: 3 },
    { name: "Abläufe", to: "/abläufe", Id: 4 },
    { name: "Kontakt", to: "/kontakt", Id: 5 },
  ];

  return (
    <nav className="mainNav">
      <ul className="nav">
        {navBar.map((item) => (
          <li key={item.Id}>
            <NavLink to={item.to}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
