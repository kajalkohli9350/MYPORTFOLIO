import "./About.css";
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
function About() {
  return (
    <section id="about" className="about-section animate" data-anim="fade">
      <div className="about-container animate" data-anim="slide-left">
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
          <span>Kajal Kohli</span>
          <span>Software Developer</span>
          <span>Panipat, Haryana</span>
          <span>kohlikajal00@gmail.com</span>
        </div>
      </div>
    </section>
  );
}

export default About;
