import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiJavascript, SiExpress, SiMongodb } from "react-icons/si";

import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <div className="skill-icon">
            <FaHtml5 style={{ color: "#E34F26" }} />
          </div>
          <h4>HTML</h4>
        </div>
        <div className="skill-card">
          <div className="skill-icon">
            <FaCss3Alt style={{ color: "#264DE4" }} />
          </div>
          <h4>CSS</h4>
        </div>
        <div className="skill-card">
          <div className="skill-icon">
            <SiJavascript style={{ color: "#F7DF1E" }} />
          </div>
          <h4>JavaScript</h4>
        </div>
        <div className="skill-card">
          <div className="skill-icon">
            <FaReact style={{ color: "#61DAFB" }} />
          </div>
          <h4>React</h4>
        </div>
        <div className="skill-card">
          <div className="skill-icon">
            <FaNodeJs style={{ color: "#339933" }} />
          </div>
          <h4>Node.js</h4>
        </div>
        <div className="skill-card">
          <div className="skill-icon">
            <SiExpress style={{ color: "#000000" }} />
          </div>
          <h4>Express.js</h4>
        </div>
        <div className="skill-card">
          <div className="skill-icon">
            <SiMongodb style={{ color: "#47A248" }} />
          </div>
          <h4>MongoDB</h4>
        </div>
        <div className="skill-card">
          <div className="skill-icon">
            <FaGithub style={{ color: "#333333" }} />
          </div>
          <h4>Git & GitHub</h4>
        </div>
      </div>
    </section>
  );
}

export default Skills;
