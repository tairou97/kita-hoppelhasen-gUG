import React from "react";
import "./Home.css";
import HeaderImg from "../../assets/img/img.png";
import HeaderImg2 from "../../assets/img/home2.png";

import Svg from "../../assets/img/hero-drawing.svg";
import Kinder from "../../assets/img/kinder.png";
import Kinder2 from "../../assets/img/kinder2.png";
const Home = () => {
  return (
    <section className="homePage">
      <article className="homeArticle">
        <div className="homeArticle__header">
          <div className=" img-h1">
            <h1 className="homeArticle__header__h1">
              Willkommen in der Kita Hoppelhasen – Ein Ort, an dem Kinder
              wachsen, spielen und lernen.
            </h1>
            <img src={HeaderImg} alt="headerImg" />
          </div>
        </div>
        <div className="homeArticle__header__p">
          <p className="">
            Wir sind eine Kindertagesstätte in Berlin, die sich auf die
            Betreuung und Förderung von Kindern im Alter von 0 bis 6 Jahren
            spezialisiert hat. Unser Ziel ist es, den Kindern eine sichere und
            liebevolle Umgebung zu bieten, in der sie sich entfalten und
            entwickeln können.
          </p>
        </div>{" "}
      </article>
    </section>
  );
};

export default Home;
