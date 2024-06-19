import About from "./About/About";
import Header from "./Header/Header";
import Skills from "../Skill/SkillList";
import Projects from "../Project/ProjectList";
import Contact from "../Contact/Contact";

function Accueil() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Accueil;
