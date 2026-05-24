import "./Home.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
function Home() {
  return (
    <section className="home">
      <div className="leftcontaioner">
        <div className="homecontainer">
          <h2>Hi, I'm</h2>
          <h1 className="text-primary">Kajal</h1>
          <h3 className="text-secondary">
            <span>MERN </span> Stack Developer
          </h3>

          <p>
            I build responsive, user-friendly and modern web applications using
            the MERN stack. I am passionate about creating seamless user
            experiences and writing clean, efficient code. With a strong
            foundation in JavaScript and a keen eye for design, I strive to
            bring innovative ideas to life through my projects.
          </p>
        </div>
        <div className="homebtn">
          <a href="mywork" className="btn-primary">
            View My work
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/kajal-kohli-119866326"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/kajalkohli9350"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a href="mailto:kohlikajal00@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="homeimg">
        <img src="/assets/portfoliopic.png" alt="mypic" className="homeimg" />
      </div>
    </section>
  );
}

export default Home;
