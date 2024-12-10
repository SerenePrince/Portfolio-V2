import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bz0e6kb", "template_gpuvwzo", form.current, {
        publicKey: "ptjymULPpGwZbx6nd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact__github fade-in-from-left">
        <a
          href="https://github.com/sereneprince"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </div>
      <div className="contact__linkedin fade-in-from-top">
        <a
          href="https://www.linkedin.com/in/nparknguyen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
      <div className="contact__email fade-in-from-right">
        <a
          href="mailto:noahparknguyen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> Email
        </a>
      </div>
      <div className="contact__form fade-in-from-bottom">
        <h1>Let&apos;s get in touch!</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input
              type="text"
              id="full-name"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" value="send">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
