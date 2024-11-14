import React from "react";
import "./NewsLetter.css";
import p1 from "../../assets/images/hero2.jpg";

const NewsLetter = () => {
  return (
    <div className="container pt-5 pb-5">
      <div className="news-letter-section">
        <div className="over-lay"></div>
        <img src={p1} alt="" />
        <div className="content">
          <div className="text-center">
            <h1>Get Exclusive Offer On Your Email</h1>
            <h6>Subscribe our newsletter and stay update</h6>
            <div className="mt-3">
              <form class="d-flex">
                <input
                  className="form-control me-0 rounded-0"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button className="myBtn m-0 rounded-0" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
