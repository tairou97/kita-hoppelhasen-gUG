import React from "react";
import "./Tagesablauf.css";
import { motion } from "framer-motion";

const Tagesablauf = () => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 1, staggerChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <>
      <motion.section
        className="tagesablauf"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className="header" variants={itemVariants}>
          Tagesprogramm
        </motion.h2>

        <motion.div className="box-tagesablauf" variants={itemVariants}>
          <div className="bringzeit">
            <h4>Bringzeit 7:00 - 8:30 Uhr</h4>
            <p>
              Die Kinder werden morgens von ihren Eltern gebracht und in die
              Obhut der Erzieher*innen übergeben. Diese Phase ermöglicht den
              Eltern, in Ruhe Abschied zu nehmen, während die Kinder Zeit haben,
              anzukommen und sich auf den Tag einzustellen.
            </p>
          </div>
        </motion.div>

        <motion.div className="box-tagesablauf" variants={itemVariants}>
          <div className="morgenkreis">
            <h4>Frühstück 8:30 - 9:00 Uhr</h4>
            <h4>Morgenkreis ab 9:00 Uhr</h4>
            <h4>pädagogische Kernzeit</h4>
            <p>
              In dieser Zeit stehen gezielte pädagogische Aktivitäten im
              Vordergrund. Die Kinder nehmen an verschiedenen Projekten und
              Bildungsangeboten teil, die nach dem Berliner Bildungsprogramm
              gestaltet sind. Hier werden Kompetenzen wie Kreativität,
              Problemlösungsfähigkeiten und soziale Interaktionen gefördert. Die
              Kinder haben außerdem Zeit für Freispiel, in dem sie eigene Ideen
              und Interessen verfolgen können.
            </p>
          </div>
        </motion.div>

        <motion.div className="box-tagesablauf" variants={itemVariants}>
          <div className="mittagessen">
            <h4>Mittagessen ab 11:00</h4>
            <p>
              Die Kinder essen in ihren Stammgruppen. In der hauseigenen Küche
              wird täglich frisch gekocht, wodurch eine gesunde und ausgewogene
              Ernährung sichergestellt wird. Das gemeinsame Essen stärkt das
              Gemeinschaftsgefühl und bietet den Kindern eine strukturierte
              Pause. Zur Mittagszeit kommen beide Gruppen dafür zusammen und
              genießen die Mahlzeit in gemeinsamer Runde.
            </p>
          </div>
        </motion.div>

        <motion.div className="box-tagesablauf" variants={itemVariants}>
          <div className="ruhezeit">
            <h4>Ruhezeit 12:00 - 13:30 Uhr</h4>
            <p>
              Nach dem aktiven Vormittag ist Zeit für Ruhe und Entspannung. Die
              Erzieher*innen begleiten die Kinder beim Ausruhen und Schlafen,
              sodass sie neue Energie für den Nachmittag tanken können. Diese
              Pause ist wichtig für das Wohlbefinden und die gesunde Entwicklung
              der Kinder.
            </p>
          </div>
        </motion.div>

        <motion.div className="box-tagesablauf" variants={itemVariants}>
          <div className="vesper">
            <h4>Vesper 14 Uhr</h4>
            <p>
              Die Kinder stärken sich mit einem kleinen Snack und nutzen danach
              die Zeit für Freispiel oder Gartenaktivitäten an der frischen
              Luft.
            </p>
          </div>
        </motion.div>

        <motion.div className="box-tagesablauf" variants={itemVariants}>
          <div className="nachmittagszeit">
            <h4>Nachmittagszeit 14:30 - 16:30 Uhr</h4>
            <p>
              Während der Abholzeit können die Kinder den Tag bei freiem Spiel
              im Haus oder Garten ausklingen lassen. Diese Phase bietet Raum für
              soziale Interaktionen und kreative Aktivitäten, während Eltern
              sich bei den Erzieher*innen über den Tagesverlauf austauschen
              können.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Tagesablauf;
