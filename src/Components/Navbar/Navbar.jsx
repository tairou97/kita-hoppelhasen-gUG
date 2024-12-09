import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

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
      {/* Burger-Icon für kleine Bildschirme */}
      {/* <h3>Kita Hoppelhasen gUG (haftungsbeschränkt)</h3> */}
      <div
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <div className="close-icon">X</div>
        ) : (
          <>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </>
        )}
      </div>

      {/* Normale Navbar für Desktop */}
      <div className="desktopNav">
        <ul className="nav">
          {navBar.map((item) => (
            <li key={item.Id}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Menü für mobile Geräte mit Framer Motion (Sliding Effect) */}
      <motion.div
        className={`sideMenu ${menuOpen ? "open" : ""}`}
        initial={{ width: 0 }}
        animate={{ width: menuOpen ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
      >
        <motion.ul
          className="nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {navBar.map((item) => (
            <li key={item.Id}>
              <NavLink to={item.to} onClick={() => setMenuOpen(false)}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
