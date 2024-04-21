import React from "react";
import goldMedal from "../../assets/gold_medal.png";
import silverMedal from "../../assets/silver_medal.png";
import "./SkillItem.css";

interface SkillItemProps {
  name: string;
  level: string;
  lien: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, lien }) => {
  const imagePath = `/skills/${name}.png`;

  // Définir le chemin de l'icône de médaille en fonction du niveau de compétence
  let medalIcon;
  if (level === "Avancé") {
    medalIcon = goldMedal;
  } else if (level === "Intermédiaire") {
    medalIcon = silverMedal;
  }

  // Condition pour afficher l'image uniquement si le niveau est soit "Intermédiaire" soit "Avancé"
  const showMedal = level === "Avancé" || level === "Intermédiaire";

  // Fonction pour rediriger vers le lien
  const handleRedirect = (lien: string) => {
    window.open(lien, "_blank");
  };

  return (
    <div className="card skill-card">
      <div className="medal-container">
        {showMedal && (
          <img src={medalIcon} alt={level} className="medal-icon" />
        )}
      </div>
      {/* Ajout du lien vers la partie card-body */}
      <div className="card-body" onClick={() => handleRedirect(lien)}>
        <h5 className="card-title">{name}</h5>
        <img src={imagePath} alt={name} className="card-img-top" />
      </div>
    </div>
  );
};

export default SkillItem;
