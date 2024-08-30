import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/peratamaa08"
        className="home__socials-link"
        target="_blank"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://www.twitter.com/peratamaa08"
        className="home__socials-link"
        target="_blank"
      >
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a
        href="https://steamcommunity.com/id/borbjorn"
        className="home__socials-link"
        target="_blank"
      >
        <i class="fa-brands fa-steam"></i>
      </a>
      <a
        href="https://github.com/KerMyth"
        className="home__socials-link"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
