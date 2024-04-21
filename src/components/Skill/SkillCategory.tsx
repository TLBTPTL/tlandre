import React from "react";

interface SkillCategoryProps {
  name: string;
  active: boolean;
  onClick: () => void;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  name,
  active,
  onClick,
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    onClick();
  };
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${active ? "active" : ""}`}
        onClick={handleClick}
        href="#"
      >
        {name}
      </a>
    </li>
  );
};

export default SkillCategory;
