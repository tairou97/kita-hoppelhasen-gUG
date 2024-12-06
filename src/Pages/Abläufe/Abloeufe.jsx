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
      {/* <CalendarEmbed
        padding="20px"
        calendarUrl="https://calendar.google.com/calendar/embed?src=example%40gmail.com&ctz=Europe%2FBerlin"
        width="1200px"
        height="700px"
      /> */}
    </section>
  );
};

export default Abloefe;
