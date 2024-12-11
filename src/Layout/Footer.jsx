import React from "react";
import "./Footer.css";
import Impressum from "../Components/DatenSchutz/Datenschutz";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info">
        <div className="konINfo">
          <div className="footerBox1">
            <p>Kita Hoppelhasen gUG (haftungsbeschränkt)</p>
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
                030/257 396 54
              </a>
            </p>
            <p>
              <a
                href="mailto:info@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                kita-hoppelhasen@web.de
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
              <Link to="/Impressum" className="imprint-link">
                Impressum
              </Link>
            </p>
            <p>
              <Link to="/datenSchutz" className="imprint-link">
                Datenschutz
              </Link>
            </p>
          </div>
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
