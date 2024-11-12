import React from "react";
import "./Home.css";
import HeaderImg from "../../assets/img/home.png";
import HeaderImg2 from "../../assets/img/home2.png";
import Svg from "../../assets/img/hero-drawing.svg";
import LongImg from "../../assets/img/longimg.png";

const Home = () => {
  return (
    <section className="homePage">
      <article className="homeArticle">
        <div className="home home1">
          <img src={HeaderImg} alt="" />
        </div>
        <div className="home home2">
          <h1>
            Willkommen <span> in Kita Hoppelhasen</span>
          </h1>
          <p>
            wussten Sie schon, dass in unserem Kindergarten 36Kinder von 1
            Jahrnbis zum Ende des Grundschulaters von einem Tea erfahrener
            Fachkräfte betreut werden? Wir bieten eine Vielzahl von Aktivitäten
            und Programmen, die auf die individuellen Bedürfnisse jedes Kindes
            zugeschnitten sind. Wir freuen uns darauf, Sie und Ihr Kind
            kennenzulernen!
          </p>
        </div>
        <div className="home home3">
          {" "}
          <img src={HeaderImg2} alt="" />
        </div>
        <div className="home home4">
          <img src={Svg} alt="" />
        </div>
        <div className="home home5">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            labore possimus praesentium cumque voluptas, animi consequatur
          </p>
        </div>
        <div className="home home6">
          {" "}
          <img src={LongImg} alt="" />
        </div>
        <div className="home home7">7</div>
        <div className="home home8">8</div>
        <div className="home home9">9</div>
        <div className="home home10">10</div>
        <div className="home home11">11</div>
        <div className="home home12">12</div>
        <div className="home home13">13</div>
        <div className="home home14">14</div>
      </article>
    </section>
  );
};

export default Home;
