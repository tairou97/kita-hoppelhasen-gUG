import React from "react";
import "./Home.css";
import HeaderImg from "../../assets/img/home.png";

const Home = () => {
  return (
    <section className="homePage">
      <article className="homeArticle">
        <div className="home home1">
          <img src={HeaderImg} alt="" />
        </div>
        <div className="home home2">2</div>
        <div className="home home3">3</div>
        <div className="home home4">4</div>
        <div className="home home5">5</div>
        <div className="home home6">6</div>
        <div className="home home7">7</div>
      </article>
      <article className="homeArticle2">
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
