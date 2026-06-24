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
    <section id="skills" className="skills-section animate" data-anim="fade">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        <div className="skill-card animate" data-anim="zoom">
          <div className="skill-icon skill-html">
            <FaHtml5 />
          </div>
          <h4>HTML</h4>
        </div>
        <div className="skill-card animate" data-anim="zoom">
          <div className="skill-icon skill-css">
            <FaCss3Alt />
          </div>
          <h4>CSS</h4>
        </div>
        <div className="skill-card animate" data-anim="zoom">
          <div className="skill-icon skill-js">
            <SiJavascript />
          </div>
          <h4>JavaScript</h4>
        </div>
        <div className="skill-card animate" data-anim="zoom">
          <div className="skill-icon skill-react">
            <FaReact />
          </div>
          <h4>React</h4>
        </div>
        <div className="skill-card animate" data-anim="zoom">
          <div className="skill-icon skill-node">
            <FaNodeJs />
          </div>
          <h4>Node.js</h4>
        </div>
        <div className="skill-card animate" data-anim="zoom">
          <div className="skill-icon skill-express">
            <SiExpress />
          </div>
          <h4>Express.js</h4>
        </div>
        <div className="skill-card animate" data-anim="zoom">
          <div className="skill-icon skill-mongo">
            <SiMongodb  />
          </div>
          <h4>MongoDB</h4>
        </div>
        <div className="skill-card animate" data-anim="zoom">
          <div className="skill-icon skill-github">
            <FaGithub  />
          </div>
          <h4>Git & GitHub</h4>
        </div>
      </div>
    </section>
  );
}

export default Skills;
