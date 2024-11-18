import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero2 from "../../assets/img/hero2.png";
import MiniHasen from "../../assets/img/miniHasen.png";
import SuperHasen from "../../assets/img/superHasen.png";
import Flagg from "../../Components/SuperHasen/EventFlage";

const Home = () => {
  return (
    <motion.section
      className="homeContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header-Bereich mit Willkommensanimation */}
      <motion.div
        className="home home1"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="headerText"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
        >
          <h1 className="head-h1">Willkommen in der Kita Hoppelhasen</h1>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/about">mehr</Link>
          </motion.button>
        </motion.div>
      </motion.div>
      {/* Bildanimation */}
      <motion.div
        className="home home2"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="HeaderImg">
          <motion.img
            src={Hero2}
            alt=""
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      <motion.div
        className="home home3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <h3 className="text-h3">
          Ein Ort, an dem Kinder wachsen, spielen und lernen.
        </h3>
        <p className="HeaderP">
          Wir sind eine Kindertagesstätte in Berlin, die sich auf die Betreuung
          und Förderung von Kindern im Alter von 0 bis 6 Jahren spezialisiert
          hat. Unser Ziel ist es, den Kindern eine sichere und liebevolle
          Umgebung zu bieten, in der sie sich entfalten und entwickeln können.
        </p>
      </motion.div>
      {/* Mini Hasen Abschnitt */}
      <motion.div
        className="home home4"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="mini">
          <Link to="/minihasen">
            <motion.img
              src={MiniHasen}
              alt=""
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
          </Link>
        </div>
        <div className="miniText">
          <h3>Mini Hasen</h3>
          <p>
            Unsere Mini-Hasen sind die jüngsten Mitglieder der Kita-Familie.
            Hier erleben die Kleinen ihre ersten Abenteuer, knüpfen
            Freundschaften und entdecken spielerisch die Welt – alles in einer
            warmen, sicheren Umgebung voller Fürsorge und Freude.
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/minihasen">Mehr erfahren</Link>
          </motion.button>
        </div>
      </motion.div>
      {/* Super Hasen Abschnitt */}
      <motion.div
        className="home home5"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="superText">
          <h3>Super Hasen</h3>
          <p>
            Die Super-Hasen bereiten sich voller Stolz auf die Schule vor. Mit
            spannenden Projekten, gezielter Förderung und viel Kreativität
            begleiten wir sie auf ihrem Weg, damit sie den nächsten
            Lebensabschnitt mit Selbstvertrauen und Neugier beginnen können.
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/superhasen">Mehr erfahren</Link>
          </motion.button>
        </div>
        <div className="super">
          <Link to="/superhasen">
            <motion.img
              src={SuperHasen}
              alt=""
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
          </Link>
        </div>
      </motion.div>
      {/* Team-Abschnitt */}
      <motion.div
        className="home home6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="team">
          <h2>Unser Team</h2>
          <p className="HeaderP2">
            Unser Team besteht aus erfahrenen Erzieher*innen und
            Sozialpädagog*innen, die sich mit viel Engagement und Herzblut um
            die Kinder kümmern. Wir legen großen Wert darauf, dass sich die
            Kinder bei uns wohlfühlen und gerne in die Kita kommen.
          </p>
          {/* <Flagg /> */}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
