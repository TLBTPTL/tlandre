import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Accueil from "./components/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import CompetencesIUT from "./components/CompetencesIUT/CompetencesIUT";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "app dark-mode" : "app"}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/competences-iut" element={<CompetencesIUT />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
