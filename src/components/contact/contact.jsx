import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Hubungi Saya</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">
            Saya terbuka untuk membahas Bahasa Pemrograman!
          </h3>
          <p className="contact__detail">Ada Pertanyaan? Kirim Via Email!</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your Name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your Email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your Subject"
            />
          </div>
          <div className="contact__form-div">
            <textarea
              name=""
              id=""
              color="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write Your Messej"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
