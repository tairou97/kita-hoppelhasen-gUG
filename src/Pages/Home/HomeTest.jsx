import React from "react";
import "./HomeTest.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero2 from "../../assets/img/hero2.png";
import MiniHasen from "../../assets/img/miniHasen.png";
import SuperHasen from "../../assets/img/superHasen.png";
const HomeTest = () => {
  return (
    <section className="conatinerHome">
      <div className="back">
        {" "}
        <Link to="/">Top</Link>{" "}
      </div>
      <div className="home1">
        {/* ==============Image =============*/}
        <div className="headImg">
          {" "}
          <img src={Hero2} alt="" />
        </div>{" "}
        {/* ==============Überschrift =============*/}
        <div className="headHeader">
          <h1 className="">Willkommen in der Kita Hoppelhasen</h1>

          <Link to="/about">Mehr erfahren</Link>
        </div>
      </div>
      <div className="home2">
        <div className="homeBox1">
          {" "}
          <div className="homeBox1-1">
            {" "}
            <h3 className="text-h3">
              Ein Ort, an dem Kinder wachsen, spielen und lernen.
            </h3>
            <span></span>
            <p className="HeaderP">
              Wir sind eine Kindertagesstätte in Berlin, die sich auf die
              Betreuung und Förderung von Kindern im Alter von 0 bis 6 Jahren
              spezialisiert hat. Unser Ziel ist es, den Kindern eine sichere und
              liebevolle Umgebung zu bieten, in der sie sich entfalten und
              entwickeln können.
            </p>
          </div>
        </div>
        <div className="homeBox2">
          <div className="homeBox2-img">
            {" "}
            <Link to="/minihasen">
              <img src={MiniHasen} alt="" />
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

            <button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/minihasen">Mehr erfahren</Link>
            </button>
          </div>
        </div>
        <div className="homeBox3">
          <div className=" homeBox3-text">
            <h3>Super Hasen</h3>
            <p>
              Die Super-Hasen bereiten sich voller Stolz auf die Schule vor. Mit
              spannenden Projekten, gezielter Förderung und viel Kreativität
              begleiten wir sie auf ihrem Weg, damit sie den nächsten
              Lebensabschnitt mit Selbstvertrauen und Neugier beginnen können.
            </p>
            <button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/superhasen">Mehr erfahren</Link>
            </button>
          </div>
          <div className="homeBox3-img">
            <Link to="/superhasen">
              <img src={SuperHasen} alt="" />
            </Link>
          </div>
        </div>

        <div className="homeBox4">
          <div className="home-team">
            <h2>Unser Team</h2>
            <p className="HeaderP2">
              Unser Team besteht aus erfahrenen Erzieher*innen und
              Sozialpädagog*innen, die sich mit viel Engagement und Herzblut um
              die Kinder kümmern. Wir legen großen Wert darauf, dass sich die
              Kinder bei uns wohlfühlen und gerne in die Kita kommen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTest;
