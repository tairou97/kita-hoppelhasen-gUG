import React from "react";
import "./About.css";
import Logo from "../../assets/img/logo.png";

const About = () => {
  return (
    <section className="about">
      <article className="Über-uns">
        <h1 className="head-h1">Über uns</h1>
        <p className="text-p">
          Die Kita Hoppelhasen ist mehr als nur ein Ort, an dem Kinder betreut
          werden – sie ist ein Zuhause auf Zeit. Unser Team aus erfahrenen
          Pädagoginnen und Pädagogen geht jeden Tag mit viel Herz und Hingabe an
          die Arbeit. Wir fördern nicht nur das Lernen, sondern unterstützen die
          Kinder auch dabei, ihre Persönlichkeit zu entwickeln und ihre
          individuellen Stärken zu erkennen. Bei uns steht das Wohl jedes
          einzelnen Kindes im Mittelpunkt. Ob im Freien oder in unseren
          gemütlichen Innenräumen, wir gestalten jeden Tag so, dass die Kinder
          mit Freude und Begeisterung dabei sind.
        </p>
      </article>{" "}
      <article className="logo">
        <div>
          {" "}
          <img src={Logo} alt="" />
        </div>
      </article>
      <article className="Philosophie">
        <h4 className="head-h4">Unsere Werte und Philosophie</h4>
        <p className="text-p">
          In der Kita Hoppelhasen glauben wir daran, dass jedes Kind einzigartig
          ist und seine ganz eigene Art zu lernen und die Welt zu entdecken hat.
          Wir schaffen eine Umgebung, die die Kinder ermutigt, neugierig zu sein
          und sich selbst auszuprobieren. Durch eine achtsame und respektvolle
          Erziehung legen wir den Grundstein für das Vertrauen in die eigene
          Person und das Entdecken der eigenen Fähigkeiten.
        </p>
      </article>
    </section>
  );
};

export default About;
