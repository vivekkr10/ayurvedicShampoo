import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../../style/header.css";

const PageHeader = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-wrapper">
              <div className="logo">
                <img src={logo} alt="Commerce Gyan Academy" />
              </div>

              <h2 className="leaf-green logo-text">
                Commerce Gyan <br /> Academy
              </h2>
            </div>

            <div className="hamburger-menu">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
            </div>

            <nav className="nav-btns">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/about">About Us</Link>
                </li>

                {/* Pages Dropdown */}
                <li className="pages-dropdown">
                  <button className="pages-btn">
                    Pages
                    <span className="pages-arrow">⌄</span>
                  </button>

                  <ul className="pages-dropdown-menu">
                    <li>
                      <Link to="/courses">Courses</Link>
                    </li>

                    <li>
                      <Link to="/faculty">Faculty</Link>
                    </li>

                    <li>
                      <Link to="/results">Results</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/courses" className="display">
                    Courses
                  </Link>
                </li>

                <li>
                  <Link to="/faculty" className="display">
                    Faculty
                  </Link>
                </li>

                <li>
                  <Link to="/results" className="display">
                    Results
                  </Link>
                </li>

                <li>
                  <Link to="/admissions">Admissions</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>

              <button className="nav-register-btn btn">
                <Link to="/register">Register now</Link>
              </button>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PageHeader;
