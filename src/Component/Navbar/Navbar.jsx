import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand" to="/">
            MyShop
            <i class="bi bi-basket"></i>
          </a>
          <div
            className={`menu-toggle ${isOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Fruits
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Vegetables
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <button type="button" className="myBtn">
                  Login
                </button>
              </li>
              <li className="btn-cart">
                <button type="button" class="nav-link position-relative">
                  <i className="bi bi-cart"></i>
                  <span class="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
