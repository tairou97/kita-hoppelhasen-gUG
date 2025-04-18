import React from "react";
import "../Abläufe/Abloeufe.css";
import Tagesablauf from "../../Components/Tagesablauf/Tagesablauf";
import Jahresablauf from "../../Components/Jahresablauf/Jahresablauf";
import AbloefeImg from "../../assets/img/programme.png";
// import CalendarEmbed from "../../Components/Calendar/CalendarEmbed";

const Abloefe = () => {
  return (
    <section className="abläufe">
      <img src={AbloefeImg} alt="" />
      <h1>Tages- & Jahresprogramme</h1>
      <Tagesablauf />
      <Jahresablauf />
    </section>
  );
};

export default Abloefe;
