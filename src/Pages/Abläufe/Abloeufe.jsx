import React from "react";
import "../Abläufe/Abloeufe.css";
import Tagesablauf from "../../Components/Tagesablauf/Tagesablauf";
import Jahresablauf from "../../Components/Jahresablauf/Jahresablauf";

const Abloefe = () => {
  return (
    <section className="abläufe">
      {/* <Tagesablauf /> */}
      <Jahresablauf />
    </section>
  );
};

export default Abloefe;
