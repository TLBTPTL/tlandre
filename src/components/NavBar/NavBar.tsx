import React from "react";
import "./NavBar.css";
import pp from "../../assets/pp.png";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleToggleClick = () => {
    console.log("Bouton de bascule cliqué !");
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
        <img src={pp} alt="Logo personnel" className="logo-image" />
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                id="portfolio"
                className="nav-link"
                onClick={() => scrollToSection("accueil")}
              >
                Portfolio
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("about")}
              >
                A Propos
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("skills")}
              >
                Compétences
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("projects")}
              >
                Projets
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
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
