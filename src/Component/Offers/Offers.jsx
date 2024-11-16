import React from "react";
import "./Offer.css";
import p1 from "../../assets/images/hero.jpg";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="offer-section">
        <div className="over-lay"></div>
        <img src={p1} alt="" />
        <div className="content">
          <div className="container px-5">
            <h6>Only On Best Seller Product</h6>
            <h1>
              Exclusive <br /> Offer For You
            </h1>
            <div>
              <Link className="myBtn m-0">
                Check Now <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
