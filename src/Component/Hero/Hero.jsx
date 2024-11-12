import React from "react";
import "./Hero.css";
import bg from "../../assets/images/hero.jpg";
const Hero = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="over-lay"></div>
        <img src={bg} alt="" />
        <div className="content">
          <div className="container"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
