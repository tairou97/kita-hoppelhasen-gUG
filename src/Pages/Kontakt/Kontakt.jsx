import React from "react";
import "./Kontakt.css";

const Kontakt = () => {
  return (
    <div className="container">
      <h1 className="heading">Kontakte</h1>
      <div className="logo">
        <h1>Kita Hoppelhasen gUG</h1>
      </div>
      <div className="kontakt-box">
        {" "}
        <p className="title">Kita Hoppelhasen gUG (haftungsbeschränkt)</p>
        <p className="text">Mandrellaplatz 3, 12555 Berlin</p>
        <p className="text">
          <a href="mailto:kita-hoppelhasen@web.de">kita-hoppelhasen@web.de</a>
        </p>
        <p className="text">
          <a href="tel:+493025739654">030/257 396 54</a>
        </p>
        <p className="text">
          <strong>Öffnungszeiten:</strong> 7:00 - 16:30 Uhr
        </p>
        <p className="text">
          <strong>Ansprechpartner:</strong>
          <br />
          Gamze Tinmaz (Kitaleitung)
          <br />
          Eda Efe (stellv. Kitaleitung)
        </p>
        <p className="text">
          <strong>Geschäftsführung:</strong> Mustafa Tinmaz
        </p>
      </div>

      <div className="map">
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
