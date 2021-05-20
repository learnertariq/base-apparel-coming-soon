import React from "react";

import heroImageMobile from "../assets/hero-mobile.jpg";
import heroImageDesktop from "../assets/hero-desktop.jpg";

function HeroImage(props) {
  return (
     <span>
      <img className="img hero__image hero__image--mobile" src={heroImageMobile} />
      <img className="img hero__image hero__image--desktop" src={heroImageDesktop} />
     </span>
  );
}

export default HeroImage;
