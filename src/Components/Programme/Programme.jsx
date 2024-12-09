import React from "react";
import "./Programme.css";

import Img from "../Programme/img.png";
import img1 from "../Programme/img1.png";
import img2 from "../Programme/img2.png";
import ImgHead from "../Programme/imghead.png";

const Programme = () => {
  return (
    <div className="conatinerProgramme">
      <div className="programmBox1">
        <img src={ImgHead} alt="" />
      </div>
      <div className="programmBox2">
        <h2>
          Entdecken Sie unsere vielfältigen Betreuungs- und Förderangebote, die
          gezielt auf die individuellen Bedürfnisse der Kinder abgestimmt sind.
        </h2>
      </div>
      <div className="programmBox3">
        <div className="proBox1">
          <div className="imgHero">
            <img src={Img} alt="Hero Programme" />
          </div>
          <div className="protext">
            {" "}
            <h3>Gesunde Ernährung Hauseigene Küche</h3>
            <p>
              Unsere hauseigene Küche bereitet täglich ausgewogene Mahlzeiten
              zu, die speziell auf die Bedürfnisse der Kinder abgestimmt sind,
              um ihre Gesundheit und ihr Wohlbefinden bestmöglich zu
              unterstützen.
            </p>
          </div>{" "}
          <div className="imgHero">
            <img src={img1} alt="Hero Programme" />
          </div>
          <div className="protext">
            {" "}
            <h3>Geborgenheit</h3>
            <p>
              Wir schaffen eine Atmosphäre der Geborgenheit, in der sich die
              Kinder sicher und wohl fühlen. Durch einfühlsame Betreuung bieten
              wir ihnen die nötige Sicherheit für ihre Entwicklung
            </p>
          </div>
        </div>
        <div className="proBox2">
          <div className="imgHero">
            <img src={img2} alt="Hero Programme" />
          </div>
          <div className="protext">
            {" "}
            <h3>Sprachlerntagesbücher</h3>
            <p>
              Unsere Kita bietet eine Vielzahl von Programmen für Kinder jeden
              Alters. Wir bieten Programme
              <br /> für Kinder im Alter von 6 Wochen bis 6 Jahren an. Unsere
              Programme sind auf die Bedürfnisse und
            </p>
          </div>{" "}
          <div className="imgHero">
            <img src={Img} alt="Hero Programme" />
          </div>
          <div className="protext">
            {" "}
            <h3>Elternarbeit</h3>
            <p>
              Engagierte Zusammenarbeit mit Eltern, um die bestmögliche
              Betreuung für jedes Kind zu gewährleisten
            </p>
          </div>{" "}
        </div>
        <div className="proBox3">
          {" "}
          <div className="imgHero">
            <img src={Img} alt="Hero Programme" />
          </div>
          <div className="protext">
            {" "}
            <h3>Programme</h3>
            <p>
              Unsere Kita bietet eine Vielzahl von Programmen für Kinder jeden
              Alters. Wir bieten Programme
              <br /> für Kinder im Alter von 6 Wochen bis 6 Jahren an. Unsere
              Programme sind auf die Bedürfnisse und
            </p>
          </div>{" "}
          <div className="imgHero">
            <img src={img1} alt="Hero Programme" />
          </div>
          <div className="protext">
            {" "}
            <h3>Programme</h3>
            <p>
              Unsere Kita bietet eine Vielzahl von Programmen für Kinder jeden
              Alters. Wir bieten Programme
              <br /> für Kinder im Alter von 6 Wochen bis 6 Jahren an. Unsere
              Programme sind auf die Bedürfnisse und
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programme;
