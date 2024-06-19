import React, { useState } from "react";
import competences from "../../assets/competences-iut.json";
import "./CompetencesIUT.css";

interface SubSkill {
  name: string;
  rating: number;
}

interface Skill {
  title: string;
  subSkills: SubSkill[];
}

const CompetencesIUT: React.FC = () => {
  const [expandedSkills, setExpandedSkills] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSkill = (title: string) => {
    setExpandedSkills((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="competences-container">
      <h1>Compétences IUT</h1>
      {competences.map((skill: Skill) => (
        <div key={skill.title} className="skill-item">
          <div className="skill-title" onClick={() => toggleSkill(skill.title)}>
            {skill.title}
          </div>
          {expandedSkills[skill.title] && (
            <ul className="subskill-list">
              {skill.subSkills.map((subSkill) => (
                <li key={subSkill.name} className="subskill-item">
                  <span className="subskill-name">{subSkill.name}</span>
                  <span className="subskill-rating">{`Évaluation: ${subSkill.rating}/5`}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CompetencesIUT;
