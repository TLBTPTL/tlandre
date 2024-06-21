import { useState } from "react";
import SkillItem from "./SkillItem";
import SkillCategory from "./SkillCategory";
import skillsData from "../../assets/skills.json";
import "./SkillList.css";

interface SkillData {
  id: number;
  name: string;
  level: string;
  lien: string;
}

interface Categories {
  Langages: SkillData[];
  "Frameworks/Librairies": SkillData[];
  "Bases de données": SkillData[];
  Outils: SkillData[];
}

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
    <div className="section">
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
        {skillsData.categories[selectedCategory].map((skill) => (
          <SkillItem
            key={skill.id}
            name={skill.name}
            level={skill.level}
            lien={skill.lien}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillList;
