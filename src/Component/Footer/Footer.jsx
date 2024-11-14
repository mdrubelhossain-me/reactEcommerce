import React from "react";
import "./Footer.css";
import p1 from "../../assets/images/bg1.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="over-lay"></div>
      <img src={p1} alt="" />
      <div className="content">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <Link className="logo text-uppercase" to='/'>
                MyShop
                <i class="bi bi-basket"></i>
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                aperiam labore omnis quod laboriosam nisi obcaecati, molestiae
                ipsum vel praesentium mollitia consectetur, dolorem possimus.
                Corporis rerum harum suscipit temporibus quae.
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <h4>Contact</h4>
              <ul>
                <li>
                  <i className="bi bi-geo-alt"></i>
                  1st Building, Road#Demo, Dhaka, Bangladesh.
                </li>
                <li>
                  <i className="bi bi-telephone"></i>
                  +880 123456
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  example@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <h4>Important Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Company</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Products</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Offers</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">About</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 f-widget">
              <h4>Social Links</h4>
              <div className="social">
                <a href="#" className="icon d-inline-block">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="icon d-inline-block">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="icon d-inline-block">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#" className="icon d-inline-block">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="icon d-inline-block">
                  <i className="bi bi-pinterest"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 justify-content-center m-auto">
              <div className="ex-footer text-center">
                <p>
                  {" "}
                  &copy; 2024 <a href="#">MYSHOP</a> | All Rights Reserved.
                  <span className="d-block" style={{ fontSize: "12px" }}>
                    <i class="bi bi-pen"></i> Rubel
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
