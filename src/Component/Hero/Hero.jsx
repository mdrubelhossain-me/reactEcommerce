import React from "react";
import "./Hero.css";
import bg from "../../assets/images/hero3.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="over-lay"></div>
        <img src={bg} alt="" />
        <div className="content">
          <div className="text-center">
            <h6>New Arrivals Only</h6>
            <h1>Fresh & Organic Fruits <br /> <b>and</b> <br /> Vegetables for a Healthier You</h1>
            <div>
                <Link className="myBtn">See More <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
