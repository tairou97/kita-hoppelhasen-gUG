import React from "react";
import "./Tagesablauf.css";

const Tagesablauf = () => {
  return (
    <>
      <section className="tagesablauf">
        <h2 className="header">Tagesablauf</h2>
        <div className="bringzeit">
          <strong>Bringzeit:</strong> 7:00 - 8:30 Uhr
          <p>
            Die Kinder werden morgens von ihren Eltern gebracht und in die Obhut
            der Betreuer übergeben. Diese Phase ermöglicht den Eltern, in Ruhe
            Abschied zu nehmen, während die Kinder Zeit haben, anzukommen und
            sich auf den Tag einzustellen.
          </p>
        </div>
        <div className="morgenkreis">
          <strong>Morgenkreis/Frühstück:</strong> 8:30 - 9:00 Uhr
          <h3>pädagogische kernzeit</h3>
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
        <div className="mittagessen">
          <strong> Mittagessen: </strong>11:00 - 12:00 Uhr
          <p>
            Die Kinder essen gemeinsam in ihren Stammgruppen. In der hauseigenen
            Küche wird täglich frisch gekocht, was eine gesunde und ausgewogene
            Ernährung sicherstellt. Das gemeinsame Essen stärkt das
            Gemeinschaftsgefühl und bietet den Kindern eine strukturierte Pause.
          </p>
        </div>
        <div className="ruhezeit">
          <strong>Ruhezeit:</strong> 12:00 - 13:30 Uhr
          <p>
            Nach dem aktiven Vormittag ist Zeit für Ruhe und Entspannung. Die
            Betreuer begleiten die Kinder beim Ausruhen und Schlafen, sodass sie
            neue Energie für den Nachmittag tanken können. Diese Pause ist
            wichtig für das Wohlbefinden und die gesunde Entwicklung der Kinder.
          </p>
        </div>
        <div className="vesper">
          <strong>Vesper:</strong> 13:30 Uhr
          <p>
            Die Kinder nehmen einen kleinen Snack ein, um ihren Hunger zu
            stillen. Danach haben sie Zeit für Freispiel oder Gartenzeit, in der
            sie draußen spielen und sich an der frischen Luft bewegen können.
          </p>
        </div>
        <div className="nachmittagszeit">
          <strong>Nachmittagszeit:</strong> 14:00 - 16:30 Uhr
          <p>
            Der Nachmittag ist für spezielle Kurse und Freizeitaktivitäten
            reserviert. Je nach Jahreszeit und den Interessen der Kinder werden
            Aktivitäten wie Vorlesen, musikalische Erziehung oder kreative
            Projekte angeboten. Diese Angebote fördern die individuellen Stärken
            und Interessen der Kinder und runden den Tag ab.
          </p>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00cba9"
          fill-opacity="1"
          d="M0,160L34.3,138.7C68.6,117,137,75,206,74.7C274.3,75,343,117,411,149.3C480,181,549,203,617,197.3C685.7,192,754,160,823,149.3C891.4,139,960,149,1029,154.7C1097.1,160,1166,160,1234,144C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Tagesablauf;
