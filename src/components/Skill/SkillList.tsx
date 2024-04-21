import { useState } from "react";
import SkillItem from "./SkillItem";
import SkillCategory from "./SkillCategory";
import skillsData from "../../assets/skills.json";
import "./SkillList.css";

// Définition du type des données de chaque catégorie
interface SkillData {
  id: number;
  name: string;
  level: string;
  lien: string;
}

// Définition du type de vos catégories
interface Categories {
  Langages: SkillData[];
  "Frameworks/Librairies": SkillData[];
  "Bases de données": SkillData[];
  Outils: SkillData[];
}

// Obtention des clés des catégories
type SkillCategoryName = keyof Categories;

function SkillList() {
  const categories: SkillCategoryName[] = Object.keys(
    skillsData.categories
  ) as SkillCategoryName[];

  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategoryName>("Langages");

  const handleCategoryChange = (category: SkillCategoryName) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <h1>Mes Compétences</h1>
      <ul className="nav nav-tabs justify-content-center">
        {categories.map((category) => (
          <SkillCategory
            key={category}
            name={category}
            active={category === selectedCategory}
            onClick={() => handleCategoryChange(category)}
          />
        ))}
      </ul>
      <div id="skills" className="skill-list">
        {" "}
        {/* Ajout de l'ID skills */}
        {skillsData.categories[selectedCategory].map((skill) => (
          <SkillItem
            key={skill.id}
            name={skill.name}
            level={skill.level}
            lien={skill.lien}
          />
        ))}
      </div>
    </>
  );
}

export default SkillList;
