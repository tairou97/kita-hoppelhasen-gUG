import React from "react";
import "./Programme.css";
import { motion } from "framer-motion";

import Img from "../Programme/img.png";
import img1 from "../Programme/img1.png";
import img2 from "../Programme/img2.png";
import img3 from "../Programme/geborgenheit.jpeg";
import img4 from "../Programme/bewegung.jpeg";
import img5 from "../Programme/vielfealtig.jpeg";
import ImgHead from "../Programme/imghead.png";

const ProgrammCard = ({ image, title, text }) => (
  <motion.div
    className="programmCard"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="imgHero">
      <img src={image} alt={title} />
    </div>
    <div className="protext">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </motion.div>
);

const Programme = () => {
  return (
    <motion.div
      className="containerProgramme"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="programmHeader">
        <motion.img
          src={ImgHead}
          alt="Programm Übersicht"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      </div>

      <motion.div
        className="programmIntro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2>Vielfältige Förderung – Für jedes Kind das passende Angebot</h2>
        <p>
          Entdecken Sie unsere reichhaltigen Betreuungs- und Förderangebote, die
          individuell auf die Bedürfnisse jedes Kindes zugeschnitten sind. Von
          gesunder Ernährung aus eigener Küche über Sprachlerntagebücher bis hin
          zu einer inklusiven, respektvollen Elternarbeit – bei uns findet jedes
          Kind die Unterstützung, die es braucht, um sich sicher und geborgen zu
          entfalten. Wir bieten zudem eine breite Auswahl an
          Nachmittagsangeboten und legen großen Wert auf Mitbestimmung und
          Teilnahme.
        </p>
      </motion.div>

      <div className="programmSection">
        <ProgrammCard
          image={Img}
          title="Gesunde Ernährung – Hauseigene Küche"
          text="Unsere hauseigene Küche bereitet täglich ausgewogene Mahlzeiten zu, die speziell auf die Bedürfnisse der Kinder abgestimmt sind."
        />
        <ProgrammCard
          image={img3}
          title="Geborgenheit & Sicherheit"
          text="Wir schaffen liebevolle Räume, in denen Kinder sich sicher und angenommen fühlen können."
        />
        <ProgrammCard
          image={img2}
          title="Sprachlerntagebücher"
          text="Unsere Sprachlerntagebücher begleiten individuell die Entwicklung und dokumentieren liebevoll die Fortschritte."
        />
        <ProgrammCard
          image={img1}
          title="Elternarbeit"
          text="Wir pflegen eine vertrauensvolle Zusammenarbeit mit den Eltern – für die bestmögliche Betreuung."
        />
        <ProgrammCard
          image={img4}
          title="Bewegung & Spiel"
          text="Bewegung ist Teil unseres Alltags. Ob drinnen oder draußen – bei uns wird gespielt, getobt und entdeckt."
        />
        <ProgrammCard
          image={img5}
          title="Vielfältige Programme"
          text="Abgestimmte Bildungsangebote für Kinder im Alter von 1 bis 6 Jahren – individuell und altersgerecht."
        />
      </div>
    </motion.div>
  );
};

export default Programme;
