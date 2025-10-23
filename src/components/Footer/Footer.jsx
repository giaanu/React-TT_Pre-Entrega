import ocarinaImg from "../../assets/ocarina.png";
import "./Footer.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={ocarinaImg} alt="Logo Ocarina" className="footer-logo" />

        <p>© 2025 Ocarina Store — Todos los derechos reservados.</p>

        <div className="social-icons">
          <a
            href="https://instagram.com/gianwca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/giaanu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/gianlucazarrelli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};
