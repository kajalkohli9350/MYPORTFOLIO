import {FaGithub} from "react-icons/fa";
import { FcNext } from "react-icons/fc";

import "./Projects.css";
function Projects() {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <div className="description">
            <img src="/assets/project1img.png" alt="Project 1" className="project-image" />
            <h3>Mental Wellness WebApp</h3>
            <p>
              A mental wellness web application to supports mental health and
              wellness
            </p>
          </div>
          <div className="project-link-container">
            <a
            href="https://mind-wellness-app-z9yo.vercel.app/"
              className="project-link1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <FcNext style={{ marginLeft: "5px" }} />
            </a>
            
            <a
              href="https://github.com/kajalkohli9350/Mind-Wellness-App"
                            className="project-link2"

              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
          <div className="project-card">
          <div className="description">
            <img src="/assets/clonepic.png" alt="Project 2" className="project-image" />
            <h3>CromTech Clone</h3>
            <p>
              A clone of the CromTech website built with React and styled-components.
            </p>
          </div>
          <div className="project-link-container">
            <a
            href="https://cromtech-clone.vercel.app/"
              className="project-link1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <FcNext style={{ marginLeft: "5px" }} />
            </a>
            
            <a
              href="https://github.com/kajalkohli9350/cromtechsolutions"
                            className="project-link2"

              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
          <div className="project-card">
          <div className="description">
            <img src="/assets/project3pic.png" alt="Project 3" className="project-image" />
            <h3>Project 3</h3>
            <p>
            A Mylearnhub built with React and styled-components, providing an interactive learning platform.
            </p>
          </div>
          <div className="project-link-container">
            <a
            href="#"
              className="project-link1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <FcNext style={{ marginLeft: "5px" }} />
            </a>
            
            <a
              href="https://github.com/kajalkohli9350/mylearnhub"
                            className="project-link2"

              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
