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
        {" "}
        <div className="imgeTop">
          <img src={UberUs} alt="" />
        </div>
        <article className="uber-uns">
          <div className="uberText">
            <h1 className="head-h1">Über uns</h1>
            <p className="text-p">
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
            </p>
            <p className="text-p">
              Der Träger ist an regelmäßigem Austausch mit dem Fachpersonal
              interessiert und offen für Wünsche und Kritik. Er prüft zusammen
              mit der Kita-Leitung die Umsetzung des Konzepts und trägt damit
              zur Qualitätssicherung bei. Das Konzept ist dabei dynamisch und
              wird an aktuelle Richtlinien angepasst. Unsere Arbeit wird an
              keiner Weltanschauung oder Religion ausgerichtet. Kinder aller
              Kulturen und Religionen sind bei uns herzlich Willkommen.
            </p>
          </div>
          <div className="imguber">
            <img src={ImageTop} alt="" />
          </div>
        </article>{" "}
        <article className="logo">
          <div>
            <Flag />
          </div>
        </article>
        <article className="Leitbild">
          <div className="imgLeitbild">
            <img src={ImageTop2} alt="" />
          </div>
          <div className="textLeitbild">
            <h1 className="head-h1">
              Leitbild der Hoppelhasen <span>gUG (haftungsbeschränkt)</span>
            </h1>
            <p className="text-p">
              {" "}
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
            </p>
          </div>
        </article>
        <article className="lage">
          <div className="lageText">
            {" "}
            <h3 className="Lage-h3">Lage und soziales Umfeld</h3>
            <p className="text-p">
              Die Kita – Hoppelhasen gUG (haftungsbeschränkt) befindet sich im
              Bezirk Treptow-Köpenick und dort im Ortsteil Köpenick. Der Bezirk
              Treptow-Köpenick liegt im Südosten von Berlin.
            </p>
          </div>

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

{
  /* <h1 className="head-h1">Über uns</h1>
<div>
  <p className="text-p">
    Im Juni 2017 wurde die Hoppelhasen gUG (haftungsbeschränkt) mit Sitz
    in Berlin zum Zweck des Betriebs von Kindertagesstätten gegründet.
    Unsere gemeinnützige Gesellschaft ist ein freier Träger der
    Jugendhilfe. Wir betreuen insgesamt 36 Kinder ab dem ersten
    Lebensjahr bis hin zum Schulalter.
  </p>
  <strong>Pädagogischer Schwerpunkt:</strong>
  <p className="text-p">
    Der Schwerpunkt der Kita Hoppelhasen liegt auf zwei wesentlichen
    Themenbereichen:
    <ol>
      <li>
        <strong> Berliner Bildungsprogramm: </strong>
        Besonders die <strong>Sprachförderung</strong> steht hier im
        Fokus. Wir legen großen Wert darauf, die sprachliche Entwicklung
        jedes Kindes zu fördern.
      </li>
      <li>
        <strong> Bewegung und Ernährung: </strong>
        Wir achten besonders auf eine ausgewogene Ernährung und fördern
        die körperliche Bewegung der Kinder durch verschiedene
        Aktivitäten.
      </li>
    </ol>
  </p>

  <strong>Qualitätssicherung</strong>
  <p className="text-p">
    Der Träger ist an regelmäßigem Austausch mit dem Fachpersonal
    interessiert und offen für <strong>Wünsche und Kritik</strong>.
    Zusammen mit der
    {""}
    {""} <strong>Kita-Leitung</strong> prüft er die Umsetzung des
    pädagogischen Konzepts und trägt somit zur kontinuierlichen{" "}
    <strong>Qualitätssicherung</strong> bei. Unser Konzept ist dabei{" "}
    {""}
    {""}
    dynamisch und wird regelmäßig an aktuelle Richtlinien angepasst.
  </p>

  <strong>Offenheit für Vielfalt</strong>
  <p className="text-p">
    Unsere Arbeit ist nicht an einer bestimmten Weltanschauung oder
    Religion ausgerichtet. Kinder aller Kulturen und Religionen sind bei
    uns herzlich willkommen.
  </p>
</div>
</article>{" "}
<article className="logo">
<div>
  {" "}
  <img src={Logo} alt="" />
</div>
</article>
<article className="Leitbild">
<strong className="head-h4">
  Leitbild der Hoppelhasen gUG (haftungsbeschränkt)
</strong>
<p className="text-p">
  Ausgehend von den elementaren Bedürfnissen der Kinder wollen wir in
  unserer Kita die Möglichkeit schaffen, dass diese individuell gelebt
  werden können.
</p>{" "}
<p className="text-p">
  Wir möchten den Kindern helfen, sich zu eigenverantwortlichen und
  gemeinschaftsfähigen Persönlichkeiten zu entwickeln. Dabei legen wir
  besonderen Wert darauf, dass sie die notwendigen Basiskompetenzen
  erlangen und die vielfältigen Bildungsbereiche kennenlernen.
</p>
<p className="text-p">
  Ein klar strukturierter, bewegungsorientierter Tag, stets verlässliche
  Rituale sowie ein umfangreiches, frei zugängliches Angebot an Mal- und
  Bastelmaterial in den Gruppenräumen eröffnen den Kindern viele
  Möglichkeiten:
  <ul>
    <li>
      Sich mit den Dingen des täglichen Lebens auseinanderzusetzen
    </li>
    <li>Zusammenhänge zu erkennen</li>
    <li>Kenntnisse zu vertiefen und zu begreifen</li>
  </ul>
</p>
<p className="text-p"></p>
</article>
<article className="logo">
<strong>Lage und soziales Umfeld</strong>
Die Kita – Hoppelhasen gUG (haftungsbeschränkt) befindet sich im Bezirk
Treptow-Köpenick und dort im Ortsteil Köpenick. Der Bezirk
Treptow-Köpenick liegt im Südosten von Berlin.
</article> */
}
