import React from "react";
import "./service.css";
import image1 from "../../assets/service-1.svg";
import image2 from "../../assets/service-2.svg";
import image3 from "../../assets/db-logo.svg";

const data = [
  {
    id: 1,
    image: image1,
    title: "UI/UX design",
    description:
      "Melakukan Perancangan desain antarmuka pada suatu aplikasi berdasarkan kebutuhan dan learnability",
  },
  {
    id: 2,
    image: image2,
    title: "Web Development",
    description:
      "Mengimplementasikan sebuah desain antarmuka kedalam sebuah program",
  },
  {
    id: 3,
    image: image3,
    title: "Data Driven",
    description:
      "Menganalisis kebutuhan dari pengguna berdasarkan suatu permasalahan komputasi",
  },
];

const Service = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Saya Bisa</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services_img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
