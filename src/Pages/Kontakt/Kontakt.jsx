import React from "react";
import "./Kontakt.css";
import KontakImg from "../../assets/img/heroKontakt.png";
import HeroK2 from "../../assets/img/heroK2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Kontakt = () => {
  return (
    <div className="mainContainer">
      <div className="kontaktBox1">
        <div className="imgHero">
          <img src={HeroK2} alt="" />
        </div>{" "}
        <h1>Kontakt</h1>
      </div>
      <div className="kontaktBox2">
        <div className="adresse">
          {" "}
          <p>
            Kita Hoppelhasen gUG <br />
            Mandrellaplatz 3, 12555 Berlin <br />
            <a href="mailto:kita-hoppelhasen@web.de">kita-hoppelhasen@web.de</a>
            <br />
            <a href="tel:+493025739654">030/257 396 54</a>
          </p>
          <p>
            <strong>Öffnungszeiten:</strong>
            <br />
            <span>Montag - Freitag: 7:00 - 16:30 Uhr</span>
          </p>
        </div>{" "}
        <div className="ansprechpartner">
          <p className="text">
            <strong>Ansprechpartnerinnen</strong>
            <br />
            <span> Gamze Tinmaz (Kitaleitung)</span>
            <br />
            <span> Eda Efe (stellv. Kitaleitung)</span>
          </p>

          <p className="text">
            <strong>Geschäftsführung:</strong>
            <br />
            <span> Mustafa Tinmaz</span>
          </p>
        </div>
      </div>
      <div className="kontaktBox3">
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4862.586439625965!2d13.5809876!3d52.4557169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84869bbefc2c7%3A0x272a277bc1bdef13!2sMandrellapl.%203%2C%2012555%20Berlin!5e0!3m2!1sde!2sde!4v1732031221219!5m2!1sde!2sde"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Kontakt;
{
  /* <div className="mainContainer">
<div className="container-Kontakt">
  <div className="imgHero">
    <div className="imgHero">
      <img src={HeroK2} alt="" />
    </div>
    <h1>Kontakt</h1>
  </div>
  <div className="kontakt">
    <div className="karte">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4862.586439625965!2d13.5809876!3d52.4557169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84869bbefc2c7%3A0x272a277bc1bdef13!2sMandrellapl.%203%2C%2012555%20Berlin!5e0!3m2!1sde!2sde!4v1732031221219!5m2!1sde!2sde"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
    <div className="adresse">
      <p>
        Kita Hoppelhasen gUG <br />
        Mandrellaplatz 3, 12555 Berlin <br />
        <a href="mailto:kita-hoppelhasen@web.de">
          kita-hoppelhasen@web.de
        </a>
        <br />
        <a href="tel:+493025739654">030/257 396 54</a>
      </p>

      <p>
        <strong>Öffnungszeiten:</strong>
        <br />
        <span>Montag - Freitag: 7:00 - 16:30 Uhr</span>
      </p>
    </div>
    <div className="Ansprechpartner ">
      <p className="text">
        <strong>Ansprechpartnerinnen</strong>
        <br />
        <span> Gamze Tinmaz (Kitaleitung)</span>
        <br />
        <span> Eda Efe (stellv. Kitaleitung)</span>
      </p>

      <p className="text">
        <strong>Geschäftsführung:</strong>
        <br />
        <span> Mustafa Tinmaz</span>
      </p>
    </div>
  </div>{" "}
</div>
</div> */
}
