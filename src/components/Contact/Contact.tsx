import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-info">
        Vous pouvez me contacter par mail ou sur mes réseaux !
      </p>
      <div className="social-links">
        <a
          href="mailto:titouan.lysandre@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/titouan-lysandre-andre-9358b1251"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a
          href="https://github.com/TLBTPTL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a
          href="https://www.instagram.com/titouan_lysandre_adr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a
          href="https://discordapp.com/users/692296855647682631"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} /> Discord
        </a>
      </div>
    </div>
  );
}

export default Contact;
