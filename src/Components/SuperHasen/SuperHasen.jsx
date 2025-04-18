import React from "react";
import { Link } from "react-router-dom";
import "./SuperHasen.css";
import CardSliderSuper from "../SuperHasen/CardSliderSuper";
// import Flage from "../SuperHasen/EventFlage";

const SuperHasen = () => {
  return (
    <div className="superhasen">
      <div className="link">
        {" "}
        <Link to="/">Startseite</Link>
      </div>{" "}
      <div className="mini-text">
        <h1>Super Hasen</h1>
        <h2>
          Von kleinen Entdeckern zu mutigen Schulstartern, unsere Super-Hasen
          wachsen hinein
        </h2>
        <p>
          Wenn Kinder bei uns zu Super-Hasen werden, dann merkt man: Da passiert
          was! Sie sind stolz, wissbegierig und voller Tatendrang, sie spüren,
          dass bald etwas Neues beginnt. Und wir unterstützen sie dabei, diesen
          Schritt mit Freude und Selbstsicherheit zu gehen. Ob in kleinen
          Projekten, beim Spielen oder im Alltag, die Kinder lernen, ihre
          Meinung zu sagen, mit anderen zusammenzuarbeiten und ihre Ideen
          einzubringen.
        </p>
        <p>
          Sie üben sich in Konzentration, entdecken Buchstaben und Zahlen,
          basteln, forschen, und stellen viele Fragen. Auch über Themen wie
          Natur, Umwelt oder „Wie kann ich helfen?“ sprechen wir gemeinsam. So
          wächst ganz viel, nicht nur im Kopf, sondern auch im Herzen.
        </p>{" "}
        {/* <Flage />{" "} */}
      </div>
      <div className="Card">
        <CardSliderSuper />
      </div>
    </div>
  );
};

export default SuperHasen;
