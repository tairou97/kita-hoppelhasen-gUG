import React from "react";
import { motion } from "framer-motion";
import "./Kontakt.css";
import HeroK2 from "../../assets/img/heroK2.png";
import Img from "../Kontakt/kontakt.png";
import Imge2 from "../Kontakt/kontakt2.png";

// Parent-Animation (Container)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Abstand zwischen den Elementen
    },
  },
};

// Einzelne Box-Animation
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Kontakt = () => {
  return (
    <motion.div
      className="kontaktContainer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div className="kontaktBox1 kontakt" variants={itemVariants}>
        <img src={HeroK2} alt="Hero Image" />
      </motion.div>

      {/* Contact Header */}
      <motion.div className="kontaktBox2 kontakt" variants={itemVariants}>
        <h1>Kontakt</h1>
      </motion.div>

      {/* Contact Information */}
      <motion.div className="kontaktBox3 kontakt" variants={itemVariants}>
        <div className="kontaktImg">
          <img src={Img} alt="Contact Image" />
        </div>
        <div className="kontaktAdresse">
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
            Montag - Freitag: 7:00 - 16:30 Uhr
            <br />
            <br />
            <strong>Sprechzeiten:</strong>
            <br />
            Dienstags - Donnerstags
          </p>
        </div>
      </motion.div>

      {/* Contact Person and Management */}
      <motion.div className="kontaktBox4 kontakt" variants={itemVariants}>
        <div className="kontaktAnsprech">
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
        <div className="kontaktImg2">
          <img src={Imge2} alt="Contact Person Image" />
        </div>
      </motion.div>

      {/* Google Maps */}
      <motion.div className="kontaktBox5 kontakt" variants={itemVariants}>
        <div className="kontaktMap">
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
      </motion.div>
    </motion.div>
  );
};

export default Kontakt;
