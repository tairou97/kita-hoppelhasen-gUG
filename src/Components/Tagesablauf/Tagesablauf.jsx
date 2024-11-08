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
    </>
  );
};

export default Tagesablauf;
