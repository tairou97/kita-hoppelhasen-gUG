import React from "react";
import "./About.css";
import Logo from "../../assets/img/logo.png";
import { motion } from "framer-motion";
import Flag from "..//..//Components/SuperHasen/EventFlage";

const About = () => {
  return (
    <section className="about">
      <article className="Über-uns">
        <h1 className="head-h1">Über uns</h1>
        <div>
          <p className="text-p">
            Im Juni 2017 wurde die Hoppelhasen gUG (haftungsbeschränkt) mit Sitz
            in Berlin zum Zweck des Betriebs von Kindertagesstätten gegründet.
            Unsere gemeinnützige Gesellschaft, die Hoppelhasen gUG
            (haftungsbeschränkt), ist ein freier Träger der Jugendhilfe. Wir
            betreuen insgesamt 36 Kinder ab dem ersten Lebensjahr bis hin zum
            Schulalter. Pädagogischer Schwerpunkt der Kita Hoppelhasen gUG
            (haftungsbeschränkt) liegt zum einen auf das Thema Berliner
            Bildungsprogramm, wobei in besonderem Maße die Sprachförderung im
            Fokus steht und zum anderen auf das Thema „Bewegung und Ernährung“,
            worauf wir besonders Wert legen.
          </p>
          <p className="text-p">
            Der Träger ist an regelmäßigem Austausch mit dem Fachpersonal
            interessiert und offen für Wünsche und Kritik. Er prüft zusammen mit
            der Kita-Leitung die Umsetzung des Konzepts und trägt damit zur
            Qualitätssicherung bei. Das Konzept ist dabei dynamisch und wird an
            aktuelle Richtlinien angepasst. Unsere Arbeit wird an keiner
            Weltanschauung oder Religion ausgerichtet. Kinder aller Kulturen und
            Religionen sind bei uns herzlich Willkommen.
          </p>
        </div>
      </article>{" "}
      <article className="logo">
        <div>
          <Flag />
        </div>
      </article>
      <article className="Leitbild">
        <div>
          {" "}
          <h1 className="head-h1">
            {" "}
            Leitbild der Hoppelhasen gUG (haftungsbeschränkt)
          </h1>
          <p className="text-p">
            {" "}
            Von den elementaren Bedürfnissen der Kinder ausgehend, wollen wir in
            unserer Kita die Möglichkeit schaffen, dass diese individuell gelebt
            werden können. Wir wollen den Kindern helfen und sie unterstützen,
            sich zu eigenverantwortlichen und gemeinschaftsfähigen
            Persönlichkeiten zu entwickeln, die hierzu notwendigen
            Basiskompetenzen zu erlangen und die vielfältigen Bildungsbereiche
            anzubieten und zu vermitteln. Ein klar strukturierter
            Bewegungsorientierter Tag, stets verlässliche Rituale so wie ein
            umfangreiches, frei zugängliches Angebot an Mal –und Bastelmaterial
            in den Gruppenräumen, eröffnen den Kindern viele Möglichkeiten, sich
            mit den Dingen des täglichen Lebens auseinander zu setzen,
            Zusammenhänge zu erkennen, Kenntnisse zu vertiefen und zu begreifen.
          </p>
        </div>
      </article>
      <article className="Lage">
        <h3 className="Lage-h3">Lage und soziales Umfeld</h3>
        <p className="text-p">
          Die Kita – Hoppelhasen gUG (haftungsbeschränkt) befindet sich im
          Bezirk Treptow-Köpenick und dort im Ortsteil Köpenick. Der Bezirk
          Treptow-Köpenick liegt im Südosten von Berlin.
        </p>
      </article>
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
