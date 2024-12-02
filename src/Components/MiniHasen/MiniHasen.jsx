import React from "react";
import "./MiniHasen.css";
import { Link } from "react-router-dom";
import CardSlider from "./CardSlider";

const MiniHasen = () => {
  return (
    <div className="minihasen">
      {" "}
      <div className="link">
        {" "}
        <Link to="/">Startseite</Link>
      </div>
      <div className="mini-text">
        {" "}
        <h1>Mini Hasen</h1>
        <h2> Der erste große Schritt in eine spannende Welt </h2>
        <p>
          Unsere Mini-Hasen sind die jüngsten Kinder in der Kita Hoppelhasen.
          Neugierig und aufgeweckt entdecken sie voller Freude die Welt um sich
          herum. Dabei werden sie von unserem liebevollen Team behutsam betreut
          und individuell gefördert.
        </p>
        <p>
          In einer warmen und sicheren Umgebung lernen die Mini-Hasen
          spielerisch, sich in der Gruppe zurechtzufinden, erste Freundschaften
          zu knüpfen und die Welt mit staunenden Augen zu erkunden. Hier beginnt
          ihre spannende Reise in eine Welt voller Abenteuer und Möglichkeiten!
        </p>
      </div>
      <div className="Card">
        <CardSlider />
      </div>
    </div>
  );
};

export default MiniHasen;
