import "./About.css";
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Hello! I'm a passionate software developer with a love for creating
          innovative solutions. With experience in full-stack development, I
          enjoy working on projects that challenge me to learn and grow. In my
          free time, I like to explore new technologies, contribute to
          open-source projects, and stay up-to-date with industry trends. I'm
          always eager to collaborate and connect with fellow developers!
        </p>
      </div>
      <div className="about-details">
        <div className="about-icons">
          <span>
            <FaUser /> Name:
          </span>
          <span>
            <FaGraduationCap /> Title:
          </span>
          <span>
            <FaMapMarkerAlt /> Location:
          </span>
          <span>
            <FaEnvelope /> Email:
          </span>
        </div>
        <div className="icon-details">
          <p>John Doe</p>
          <p>Software Developer</p>
          <p>San Francisco, CA</p>
          <p>john.doe@example.com</p>
        </div>
      </div>
    </section>
  );
}

export default About;
