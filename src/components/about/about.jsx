import React from "react";
import "./about.css";
import Me2 from "../../assets/avatar3.png";
import AboutBox from "./aboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Tentang Saya</h2>

      <div className="about__container grid">
        <img src={Me2} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Saya Arya Bima Pratama, lulusan tahun 2024 Teknik Informatika dari
              Universitas Binaniaga Indonesia. Saya memiliki pengalaman
              Mengerjakan Project Back-End dan Front-End serta beberapa Project
              yang menggunakan algoritma Supervised dan Unsupervised.
            </p>
            <a
              href="https://glints-dashboard.s3.ap-southeast-1.amazonaws.com/resume/db94cb9db48f3a953392cf634f0672fa.pdf?AWSAccessKeyId=AKIAJR3GSVCP6OKZQSZA&Expires=1725052185&Signature=fSAfajDIgE15rmuXEWtPns%2F4bJw%3D"
              target="_blank"
              className="btn"
            >
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">PHP</h3>
                <span className="skills__number">95%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__precentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__precentage ui__design"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__precentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
