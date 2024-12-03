import React from "react";
import { motion } from "framer-motion";
import "./Kontakt.css";
import HeroK2 from "../../assets/img/heroK2.png";

const Kontakt = () => {
  return (
    <motion.div
      className="mainContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <motion.div
        className="kontaktBox1"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="imgHero"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={HeroK2} alt="Hero Kontakt" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Kontakt
        </motion.h1>
      </motion.div>

      {/* Kontaktinformationen */}
      <motion.div
        className="kontaktBox2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="adresse">
          <p>
            <strong>Kita Hoppelhasen gUG (haftungsbeschränkt)</strong>
            <br />
            Mandrellaplatz 3, 12555 Berlin
            <br />
            <a href="mailto:kita-hoppelhasen@web.de">kita-hoppelhasen@web.de</a>
            <br />
            <a href="tel:+493025739654">030/257 396 54</a>
          </p>
          <p>
            <strong>Öffnungszeiten:</strong>
            <br />
            <span>Montag - Freitag: 7:00 - 16:30 Uhr</span>
            <br />
            <br />
            <strong>Sprechzeiten:</strong>
            <br />
            <span>Dienstags - Donnerstags</span>
          </p>
        </div>
        <div className="ansprechpartner">
          <p>
            <strong>Ansprechpartnerinnen</strong>
            <br />
            <span>Gamze Tinmaz (Kitaleitung)</span>
            <br />
            <span>Eda Efe (stellv. Kitaleitung)</span>
          </p>
          <p>
            <strong>Geschäftsführung:</strong>
            <br />
            <span>Mustafa Tinmaz</span>
          </p>
        </div>
      </motion.div>

      {/* Google Maps Integration */}
      <motion.div
        className="kontaktBox3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
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
      </motion.div>
    </motion.div>
  );
};

export default Kontakt;
