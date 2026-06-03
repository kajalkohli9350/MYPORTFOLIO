import {
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaRegPaperPlane,
} from "react-icons/fa";
import "./Contact.css";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://myportfolio-okoz.onrender.com/api/contact",
        formData,
      );

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };
  return (
    <div id="contact" className="contact-section animate" data-anim="fade">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="container">
        {/* <div className="contact-details"> */}
        <form
          className="contact-form animate"
          data-anim="slide-left"
          onSubmit={handleSubmit}
        >
          <div className="contact-input1">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="contact-input2"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message{" "}
            <span>
              <FaRegPaperPlane />
            </span>
          </button>
        </form>
        {/* </div> */}

        <div className="contact-details animate" data-anim="slide-right">
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
        <div className="socialpic animate" data-anim="zoom">
          <img
            src="/assets/contackpic.jpg"
            alt="Contact"
            className="contact-pic"
          />
        </div>
      </div>
    </div>
  );
}
export default Contact;
