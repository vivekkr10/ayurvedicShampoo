import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../../style/header.css";
import { ChevronDown, Menu, X } from "lucide-react";

const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsPagesOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">

          {/* ================= LOGO ================= */}
          <Link to="/" className="logo-wrapper" onClick={closeMenu}>
            <div className="logo">
              <img src={logo} alt="Commerce Gyan Academy" />
            </div>

            <h2 className="leaf-green logo-text">
              Commerce Gyan <br />
              Academy
            </h2>
          </Link>

          {/* ================= HAMBURGER ================= */}
          <button
            className="hamburger-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* ================= NAVIGATION ================= */}
          <nav className={`nav-btns ${isMenuOpen ? "active" : ""}`}>
            <ul>

              {/* HOME */}
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              {/* ABOUT */}
              <li>
                <Link to="/about" onClick={closeMenu}>
                  About Us
                </Link>
              </li>

              {/* RESULTS */}
              <li>
                <Link to="/results" onClick={closeMenu}>
                  Results
                </Link>
              </li>

              {/* ================= DROPDOWN ================= */}
              <li
                className={`hover-dropdown ${
                  isPagesOpen ? "dropdown-active" : ""
                }`}
              >
                <button
                  className="pages-btn"
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                  aria-expanded={isPagesOpen}
                >
                  <span>Pages</span>

                  <ChevronDown
                    size={18}
                    className={isPagesOpen ? "rotate-icon" : ""}
                  />
                </button>

                <div className="dropdown-wrapper">
                  <ul className="dropdown">

                    <li>
                      <Link to="/courses" onClick={closeMenu}>
                        Courses
                      </Link>
                    </li>

                    <li>
                      <Link to="/faculty" onClick={closeMenu}>
                        Faculty
                      </Link>
                    </li>

                    <li>
                      <Link to="/admissions" onClick={closeMenu}>
                        Admissions
                      </Link>
                    </li>

                  </ul>
                </div>
              </li>

              {/* CONTACT */}
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>

            </ul>

            {/* ================= REGISTER BUTTON ================= */}
            <Link
              to="/register"
              className="nav-register-btn btn"
              onClick={closeMenu}
            >
              <span>Register now</span>
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default PageHeader;