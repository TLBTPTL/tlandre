import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.css";
import pp from "../../assets/pp.png";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const handleToggleClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.toggle("show");
    }
  };

  return (
    <nav
      id="navbar-example2"
      className={`navbar navbar-expand-lg navbar-light sticky-top ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="logo-container">
          <div className="logo">
            <img src={pp} alt="Logo personnel" className="logo-image" />
          </div>
        </div>

        <div className="menu-bar">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/#accueil" className="nav-link" smooth>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#about" className="nav-link" smooth>
                A Propos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#skills" className="nav-link" smooth>
                Compétences
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#projects" className="nav-link" smooth>
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#contact" className="nav-link" smooth>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/competences-iut" className="nav-link">
                Compétences IUT
              </Link>
            </li>
          </ul>
        </div>

        <div className="toggle-container">
          <input
            type="checkbox"
            id="toggle"
            className="toggle-checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label htmlFor="toggle" className="toggle-label"></label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
