import { useState } from "react";
import "./Navbar.css";
import { FaDownload} from "react-icons/fa";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#home">
          Kajal
        </a>

        <div className="navbar-actions">
          <button
            className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#certificates" onClick={() => setMenuOpen(false)}>
            Certificates
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <a className="navbar-resume" href="/resume.pdf" download>
          <span className="download-icon" >
          <FaDownload/>
          </span>
          Download Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
