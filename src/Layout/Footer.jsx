import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info">
        <p>
          <a href="tel:+491234567890" target="_blank">
            +49 123 456 7890
          </a>
        </p>
        <p className="lin">|</p>
        <p>
          <a href="mailto:info@example.com" target="_blank">
            info@example.com
          </a>
        </p>{" "}
        <p className="lin">|</p>
        <p>
          <a
            href="https://www.google.com/maps?q=Mandrellaplatz+3,+12555+Berlin"
            target="_blank"
          >
            Mandrellaplatz 3, 12555 Berlin
          </a>
        </p>
      </div>
      <div className="info">
        <p>&copy; 2021 Kita Hoppelhasen</p>
      </div>
    </footer>
  );
};

export default Footer;
