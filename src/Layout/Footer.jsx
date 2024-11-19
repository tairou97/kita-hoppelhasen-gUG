import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info">
        <p>
          <a href="tel:+491234567890" target="_blank" rel="noopener noreferrer">
            +49 123 456 7890
          </a>
        </p>
        <p className="lin">|</p>
        <p>
          <a
            href="mailto:info@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@example.com
          </a>
        </p>
        <p className="lin">|</p>
        <p>
          <a
            href="https://www.google.com/maps?q=Mandrellaplatz+3,+12555+Berlin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mandrellaplatz 3, 12555 Berlin
          </a>
        </p>
      </div>
      <div className="info">
        <p>
          &copy; {new Date().getFullYear()} Kita Hoppelhasen. Alle Rechte
          vorbehalten.
        </p>
        <p>
          <a href="/datenschutz" className="privacy-link">
            Datenschutz
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
