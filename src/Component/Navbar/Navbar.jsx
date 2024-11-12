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
          <Link to="/" className="navbar-brand">
            MyShop
            <i class="bi bi-basket"></i>
          </Link>
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/fruits" className="nav-link">
                  Fruits
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/vegetables" className="nav-link">
                  Vegetables
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <Link to="/login">
                  <button type="button" className="myBtn">
                    Login
                  </button>
                </Link>
              </li>
              <li className="btn-cart">
                <Link to="/cart">
                  <button type="button" class="nav-link position-relative">
                    <i className="bi bi-cart"></i>
                    <span class="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
