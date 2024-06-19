import { useState } from "react";
import ProjectItem from "./ProjectItem";
import projectsData from "../../assets/projects.json";
import "./ProjectList.css";

interface ProjectData {
  name: string;
  technologies: string;
  type: string;
  lien: string;
}

interface ProjectsData {
  equipe: ProjectData[];
  perso: ProjectData[];
}

function ProjectList() {
  const { equipe, perso } = projectsData as ProjectsData;

  const projectsPerPage = 3;

  const [equipePage, setEquipePage] = useState(1);
  const [persoPage, setPersoPage] = useState(1);

  const handleEquipePageChange = (page: number) => {
    setEquipePage(page);
  };

  const handlePersoPageChange = (page: number) => {
    setPersoPage(page);
  };

  const equipeStartIndex = (equipePage - 1) * projectsPerPage;
  const equipeEndIndex = equipePage * projectsPerPage;
  const equipeLimited = equipe.slice(equipeStartIndex, equipeEndIndex);

  const persoStartIndex = (persoPage - 1) * projectsPerPage;
  const persoEndIndex = persoPage * projectsPerPage;
  const persoLimited = perso.slice(persoStartIndex, persoEndIndex);

  const equipePaginationVisible = equipe.length > 3;
  const persoPaginationVisible = perso.length > 3;

  return (
    <>
      <h1>Mes Projets</h1>
      <div className="row" id="projects">
        <div className="col-md-6">
          <h3>Projets en Équipe</h3>
          <div className="project-list-card-column">
            {equipeLimited.map((project: ProjectData, index: number) => (
              <div className="mb-3" key={index}>
                <ProjectItem
                  name={project.name}
                  technologies={project.technologies}
                  type={project.type}
                  lien={project.lien}
                />
              </div>
            ))}
            {equipePaginationVisible && (
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li
                    className={`page-item ${
                      equipePage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handleEquipePageChange(equipePage - 1)}
                    >
                      Previous
                    </button>
                  </li>
                  {[
                    ...Array(Math.ceil(equipe.length / projectsPerPage)).keys(),
                  ].map((num) => (
                    <li
                      key={num}
                      className={`page-item ${
                        num + 1 === equipePage ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handleEquipePageChange(num + 1)}
                      >
                        {num + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      equipePage === Math.ceil(equipe.length / projectsPerPage)
                        ? "disabled"
                        : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handleEquipePageChange(equipePage + 1)}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <h3>Projets Personnels</h3>
          <div className="project-list-card-column">
            {persoLimited.map((project: ProjectData, index: number) => (
              <div className="mb-3" key={index}>
                <ProjectItem
                  name={project.name}
                  technologies={project.technologies}
                  type={project.type}
                  lien={project.lien}
                />
              </div>
            ))}
            {persoPaginationVisible && (
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li
                    className={`page-item ${persoPage === 1 ? "disabled" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePersoPageChange(persoPage - 1)}
                    >
                      Previous
                    </button>
                  </li>
                  {[
                    ...Array(Math.ceil(perso.length / projectsPerPage)).keys(),
                  ].map((num) => (
                    <li
                      key={num}
                      className={`page-item ${
                        num + 1 === persoPage ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePersoPageChange(num + 1)}
                      >
                        {num + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      persoPage === Math.ceil(perso.length / projectsPerPage)
                        ? "disabled"
                        : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePersoPageChange(persoPage + 1)}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectList;
