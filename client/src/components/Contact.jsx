import {
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
FaRegPaperPlane,
} from "react-icons/fa";
import "./Contact.css";
function Contact() {
  return (
    <div id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="container">
        {/* <div className="contact-details"> */}
          <form className="contact-form">
            <div className="contact-input1">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="contact-input2"
              required
            />
            <textarea
              placeholder="Your Message"
              className="contact-textarea"
              required
            ></textarea>
            <button type="submit" className="contact-button">
              Send Message <span><FaRegPaperPlane /></span>
            </button>
          </form>
        {/* </div> */}

        <div className="contact-details">
          <div className="contact-icons">
            <span>
              <FaEnvelope /> Email:
            </span>
            <span>
              <FaMapMarkerAlt /> Location:
            </span>
            <span>
              <FaLinkedin /> Linkdin:
            </span>
            <span>
              <FaGithub /> Github:
            </span>
          </div>
          <div className="icon-details">
            <span>Kajal Kohli</span>
            <span>Software Developer</span>
            <span>Panipat, Haryana</span>
            <span>kohlikajal00@gmail.com</span>
          </div>
        </div>
        <div className="socialpic">
            <img src="/assets/contackpic.jpg" alt="Contact" className="contact-pic" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
