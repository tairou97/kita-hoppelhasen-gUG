import React from "react";
import "./Footer.css";
import Impressum from "../Components/Impressum/Impressum";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info">
        <div className="footerBox1">
          {" "}
          <p>
            <a
              href="https://www.google.com/maps?q=Mandrellaplatz+3,+12555+Berlin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mandrellaplatz 3, 12555 Berlin
            </a>
          </p>
          <p>
            <a
              href="tel:+491234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              +49 123 456 7890
            </a>
          </p>
          <p>
            <a
              href="mailto:info@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@example.com
            </a>
          </p>{" "}
        </div>
        <div className="footerBox2">
          <p>
            <Link to="/kontakt" className="imprint-link">
              Kontakt
            </Link>
          </p>
          <p>
            <Link to="/impressum" className="imprint-link">
              Impressum
            </Link>
          </p>
          <p>
            <Link to="/datenschutz" className="imprint-link">
              Datenschutz
            </Link>
          </p>
        </div>
        <div className="footerBox3">
          {" "}
          <p>
            &copy; 2020 Kita Hoppelhasen gUG (haftungsbeschränkt). Alle Rechte
            vorbehalten.
          </p>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
