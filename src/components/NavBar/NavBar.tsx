import React from "react";
import "./NavBar.css"; // Importation du fichier de style CSS
import pp from "../../assets/pp.png"; // Importation de l'image du logo

// Définition des types de propriétés attendues pour la barre de navigation
interface NavbarProps {
  darkMode: boolean; // Mode sombre activé ou non
  toggleDarkMode: () => void; // Fonction de bascule du mode sombre
}

// Définition du composant de barre de navigation
const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  // Fonction pour faire défiler jusqu'à une section donnée
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Fonction pour gérer le clic sur le bouton de bascule
  const handleToggleClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.toggle("show");
    }
  };

  // Rendu de la barre de navigation
  return (
    <nav
      id="navbar-example2"
      className={`navbar navbar-expand-lg navbar-light sticky-top ${
        darkMode ? "dark" : "" // Ajout d'une classe "dark" si le mode sombre est activé
      }`}
    >
      <div className="container-fluid">
        {/* Image du logo */}

        <div className="logo-container">
          <div className="logo">
            <img src={pp} alt="Logo personnel" className="logo-image" />
          </div>
        </div>

        <div className="menu-bar">
          {/* Bouton de bascule pour les petits écrans */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleClick} // Gestionnaire de clic pour le bouton de bascule
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/* Contenu de la barre de navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Liens vers différentes sections */}
            <li className="nav-item">
              <button
                id="portfolio"
                className="nav-link"
                onClick={() => scrollToSection("portfolio")}
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
        {/* Conteneur pour le toggle de mode sombre */}
        <div className="toggle-container">
          <input
            type="checkbox"
            id="toggle"
            className="toggle-checkbox"
            checked={darkMode}
            onChange={toggleDarkMode} // Gestionnaire de changement pour le toggle de mode sombre
          />
          <label htmlFor="toggle" className="toggle-label"></label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Exportation du composant de barre de navigation
