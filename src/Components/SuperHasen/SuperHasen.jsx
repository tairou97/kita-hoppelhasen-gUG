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
          Super-Hasen: Kleine Umweltschützer bereit für die große Schulzeit
        </h2>
        <p>
          Unsere Super-Hasen sind Kinder, die nicht nur voller Stolz auf die
          Schule vorbereitet werden, sondern auch ein besonderes Bewusstsein für
          die Umwelt entwickeln. Sie lernen spielerisch, wie wichtig es ist, die
          Natur zu schützen, und entdecken kreative Möglichkeiten, selbst aktiv
          dazu beizutragen.
        </p>
        <p>
          Mit spannenden Projekten, Ausflügen in die Natur und Aktivitäten wie
          Müllsammeln erleben sie die Bedeutung des Naturschutzes hautnah.
          Gleichzeitig fördern wir ihre sozialen, kreativen und kognitiven
          Fähigkeiten, damit sie den nächsten Lebensabschnitt mit
          Selbstvertrauen, Neugier und einem Sinn für Verantwortung beginnen
          können.
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
