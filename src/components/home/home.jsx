import React from "react";
import "./home.css";
import Me from "../../assets/avatar2.png";
import HeaderSocials from "./headerSocials";
import ScrollDown from "./scrollDrown";
// import Shapes from "./shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Arya Bima Pratama</h1>
        <span className="home__education">I'M A Graduated Programmer🚀</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          It's Me
        </a>
        <ScrollDown />
      </div>

      {/* <Shapes /> */}
    </section>
  );
};

export default Home;
