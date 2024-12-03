import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navBar = [
    { name: "Home", to: "/", Id: 1 },
    { name: "Über uns", to: "/about", Id: 2 },
    { name: "Galerie", to: "/galerie", Id: 3 },
    { name: "Programme", to: "/programme", Id: 4 },
    { name: "Kontakt", to: "/kontakt", Id: 5 },
  ];

  return (
    <nav className="mainNav">
      {/* Burger-Icon */}
      <div
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      {/* Menü */}
      <ul className={`nav ${menuOpen ? "open" : ""}`}>
        {navBar.map((item) => (
          <li key={item.Id}>
            <NavLink to={item.to} onClick={() => setMenuOpen(false)}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
