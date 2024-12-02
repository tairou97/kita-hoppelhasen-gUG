import React from "react";
import "./HomeTest.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero2 from "../../assets/img/hero2.png";
import MiniHasen from "../../assets/img/miniHasen.png";
import SuperHasen from "../../assets/img/superHasen.png";
import ScrollButton from "../../Components/ScrollButton";
const HomeTest = () => {
  return (
    <motion.section
      className="conatinerHome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="back"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ScrollButton />
        <Link to="/">Top</Link>
      </motion.div>

      <motion.div
        className="home1"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="headImg">
          <motion.img
            src={Hero2}
            alt=""
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <div className="headHeader">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Willkommen in der Kita Hoppelhasen
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/about">Mehr erfahren</Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="home2">
        <motion.div
          className="homeBox1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="homeBox1-1">
            <h3 className="text-h3">
              Ein Ort, an dem Kinder wachsen, spielen und lernen.
            </h3>
            <p className="HeaderP">
              Wir sind eine Kindertagesstätte in Berlin, die sich auf die
              Betreuung und Förderung von Kindern im Alter von 0 bis 6 Jahren
              spezialisiert hat. Unser Ziel ist es, den Kindern eine sichere und
              liebevolle Umgebung zu bieten, in der sie sich entfalten und
              entwickeln können.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="homeBox2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="homeBox2-img">
            <Link to="/minihasen">
              <motion.img
                src={MiniHasen}
                alt=""
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
          </div>
          <div className="homeBox2-text">
            <h3>Mini Hasen</h3>
            <p>
              Unsere Mini-Hasen sind die jüngsten Mitglieder der Kita-Familie.
              Hier erleben die Kleinen ihre ersten Abenteuer, knüpfen
              Freundschaften und entdecken spielerisch die Welt – alles in einer
              warmen, sicheren Umgebung voller Fürsorge und Freude.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/minihasen">Mehr erfahren</Link>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="homeBox3"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="homeBox3-text">
            <h3>Super Hasen</h3>
            <p>
              Die Super-Hasen bereiten sich voller Stolz auf die Schule vor. Mit
              spannenden Projekten, gezielter Förderung und viel Kreativität
              begleiten wir sie auf ihrem Weg, damit sie den nächsten
              Lebensabschnitt mit Selbstvertrauen und Neugier beginnen können.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/superhasen">Mehr erfahren</Link>
            </motion.button>
          </div>
          <div className="homeBox3-img">
            <Link to="/superhasen">
              <motion.img
                src={SuperHasen}
                alt=""
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="homeBox4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="home-team">
            <h2>Unser Team</h2>
            <p className="HeaderP2">
              Unser Team besteht aus erfahrenen Erzieher*innen und
              Sozialpädagog*innen, die sich mit viel Engagement und Herzblut um
              die Kinder kümmern. Wir legen großen Wert darauf, dass sich die
              Kinder bei uns wohlfühlen und gerne in die Kita kommen.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeTest;
