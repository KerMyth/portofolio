import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">9</h3>
          {/* 
          project e-learning 
          project akhir fullstack kelistrikan
          minor RFID absensi
          Project Toko Online Penjualan buah
          Project Toko Online penjualan scarf/syal
          Tugas Akhir Pemadam Push Notification
          Project Prediksi ISPA
          project Prediksi Data Arsip
          Project Clustering Data Penerima Bantuan 

           */}
          <span className="about__subtitle">Project Finished</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-graph"></i>

        <div>
          <h3 className="about__title">88</h3>
          <span className="about__subtitle">Kata Completed</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-people"></i>

        <div>
          <h3 className="about__title">5</h3>
          <span className="about__subtitle">Framework Learned</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-badge"></i>

        <div>
          <h3 className="about__title">7</h3>
          <span className="about__subtitle">Learned Programming languange</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
