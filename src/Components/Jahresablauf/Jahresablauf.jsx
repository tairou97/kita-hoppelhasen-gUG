import React from "react";
import "./Jahresablauf.css";

const Jahresablauf = () => {
  return (
    <section className="jahresablauf">
      <h1 className="jahres-header">Jahresablauf</h1>
      <div className="box box1">
        <span>Elternabend (Parent-Teacher Meeting)</span>
      </div>
      <div className="box box2">
        <span>Laternenfest (Lantern Festival)</span>
      </div>
      <div className=" box box3">
        <span>Weihnachtsfeier (Christmas Celebration)</span>
      </div>
      <div className=" box box4">
        <span>Fasching (Carnival)</span>
      </div>
      <div className="box box5">
        <span>Osterfrühstück (Easter Breakfast)</span>
      </div>
      <div className="box box6">
        <span>
          Abschiedsfeier der Vorschulkinder (Farewell Party for Preschool
          Children)
        </span>
      </div>
      <div className=" box box7">
        <span>Sommerfest (Summer Festival)</span>
      </div>
      <div className="box box8">
        {" "}
        <span>Fototag (Photo Day)</span>
      </div>
      <div className=" box box9">
        {" "}
        <span>Kroko Zahnpflege (Crocodile Dental Care)</span>
      </div>
      <div className="box box10">
        {" "}
        <span>
          Abschiedsfeier <strong>der Vorschulkinder</strong>
        </span>
      </div>
      <div className="box box11">
        {" "}
        <span>
          Erste Hilfe Kurs der Erzieher/innen (First Aid Course for Educators)
        </span>
      </div>
    </section>
  );
};

export default Jahresablauf;
