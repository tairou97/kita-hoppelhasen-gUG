import React from "react";
import "./About.css";
import Logo from "../../assets/img/logo.png";
import { motion } from "framer-motion";
import Flag from "..//..//Components/SuperHasen/EventFlage";
import ImageTop from "../UberUns/about.png";
import ImageTop2 from "../UberUns/about2.png";
import UberUs from "../../assets//img/heroUberUs.png";

const About = () => {
  return (
    <section className="about">
      <div className="container-about">
        <motion.div
          className="imgeTop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={UberUs} alt="" />
        </motion.div>

        <article className="uber-uns">
          <div className="uberText">
            <motion.h1
              className="head-h1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Über uns
            </motion.h1>
            <motion.p
              className="text-p"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Im Juni 2017 wurde die Hoppelhasen gUG (haftungsbeschränkt) mit
              Sitz in Berlin zum Zweck des Betriebs von Kindertagesstätten
              gegründet. Unsere gemeinnützige Gesellschaft, die Hoppelhasen gUG
              (haftungsbeschränkt), ist ein freier Träger der Jugendhilfe. Wir
              betreuen insgesamt 36 Kinder ab dem ersten Lebensjahr bis hin zum
              Schulalter. Pädagogischer Schwerpunkt der Kita Hoppelhasen gUG
              (haftungsbeschränkt) liegt zum einen auf das Thema Berliner
              Bildungsprogramm, wobei in besonderem Maße die Sprachförderung im
              Fokus steht und zum anderen auf das Thema „Bewegung und
              Ernährung“, worauf wir besonders Wert legen.
            </motion.p>
            <motion.p
              className="text-p"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Der Träger ist an regelmäßigem Austausch mit dem Fachpersonal
              interessiert und offen für Wünsche und Kritik. Er prüft zusammen
              mit der Kita-Leitung die Umsetzung des Konzepts und trägt damit
              zur Qualitätssicherung bei. Das Konzept ist dabei dynamisch und
              wird an aktuelle Richtlinien angepasst. Unsere Arbeit wird an
              keiner Weltanschauung oder Religion ausgerichtet. Kinder aller
              Kulturen und Religionen sind bei uns herzlich Willkommen.
            </motion.p>
          </div>
          <motion.div
            className="imguber"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={ImageTop} alt="" />
          </motion.div>
        </article>

        <article className="logo">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Flag />
          </motion.div>
        </article>

        <article className="Leitbild">
          <motion.div
            className="imgLeitbild"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img src={ImageTop2} alt="" />
          </motion.div>
          <div className="textLeitbild">
            <motion.h1
              className="head-h1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              Leitbild der Hoppelhasen <span>gUG (haftungsbeschränkt)</span>
            </motion.h1>
            <motion.p
              className="text-p"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              Von den elementaren Bedürfnissen der Kinder ausgehend, wollen wir
              in unserer Kita die Möglichkeit schaffen, dass diese individuell
              gelebt werden können. Wir wollen den Kindern helfen und sie
              unterstützen, sich zu eigenverantwortlichen und
              gemeinschaftsfähigen Persönlichkeiten zu entwickeln, die hierzu
              notwendigen Basiskompetenzen zu erlangen und die vielfältigen
              Bildungsbereiche anzubieten und zu vermitteln. Ein klar
              strukturierter Bewegungsorientierter Tag, stets verlässliche
              Rituale so wie ein umfangreiches, frei zugängliches Angebot an Mal
              –und Bastelmaterial in den Gruppenräumen, eröffnen den Kindern
              viele Möglichkeiten, sich mit den Dingen des täglichen Lebens
              auseinander zu setzen, Zusammenhänge zu erkennen, Kenntnisse zu
              vertiefen und zu begreifen.
            </motion.p>
          </div>
        </article>

        <article className="lage">
          <motion.div
            className="lageText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <h3 className="Lage-h3">Lage und soziales Umfeld</h3>
            <p className="text-p">
              Die Kita – Hoppelhasen gUG (haftungsbeschränkt) befindet sich im
              Bezirk Treptow-Köpenick und dort im Ortsteil Köpenick. Der Bezirk
              Treptow-Köpenick liegt im Südosten von Berlin.
            </p>
          </motion.div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4862.586439625965!2d13.5809876!3d52.4557169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84869bbefc2c7%3A0x272a277bc1bdef13!2sMandrellapl.%203%2C%2012555%20Berlin!5e0!3m2!1sde!2sde!4v1732031221219!5m2!1sde!2sde"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
