import "../styles/About.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <div className="about">
      <div className="about__summary fade-in-from-left">
        <div className="about__title">
          <h4>Noah Park-Nguyen</h4>
          <p>Ottawa, Ontario</p>
        </div>
        <div className="about__info">
          <p>
            I&apos;m a student at Algonquin College, currently honing my skills
            as a full-stack developer. My strength lies in back-end development,
            where I specialize in software development, software testing, and
            troubleshooting.
          </p>
        </div>
      </div>
      <div className="about__skills fade-in-from-top">
        <div className="skills__parent">
          <div className="skills__row">
            <img src="./assets/images/java.png" alt="Java" />
            <img src="./assets/images/c.png" alt="C" />
            <img src="./assets/images/c-.png" alt="C++" />
            <img src="./assets/images/python.png" alt="Python" />
            <img src="./assets/images/database.png" alt="SQL" />
          </div>
          <div className="skills__row">
            <img src="./assets/images/java.png" alt="Java" />
            <img src="./assets/images/c.png" alt="C" />
            <img src="./assets/images/c-.png" alt="C++" />
            <img src="./assets/images/python.png" alt="Python" />
            <img src="./assets/images/database.png" alt="SQL" />
          </div>
        </div>
        <div className="skills__parent">
          <div className="skills__row">
            <img src="./assets/images/js.png" alt="JavaScript" />
            <img src="./assets/images/html-5.png" alt="HTML5" />
            <img src="./assets/images/css-3.png" alt="CSS3" />
            <img src="./assets/images/react.png" alt="React" />
            <img src="./assets/images/php.png" alt="php" />
          </div>
          <div className="skills__row">
            <img src="./assets/images/js.png" alt="JavaScript" />
            <img src="./assets/images/html-5.png" alt="HTML5" />
            <img src="./assets/images/css-3.png" alt="CSS3" />
            <img src="./assets/images/react.png" alt="React" />
            <img src="./assets/images/php.png" alt="php" />
          </div>
        </div>
        <div className="skills__parent">
          <div className="skills__row">
            <img src="./assets/images/visual-basic.png" alt="Visual Studio" />
            <img src="./assets/images/git.png" alt="Git" />
            <img src="./assets/images/github.png" alt="GitHub" />
            <img src="./assets/images/mysql.png" alt="MySQL" />
            <img src="./assets/images/office.png" alt="Microsoft Office" />{" "}
          </div>
          <div className="skills__row">
            <img src="./assets/images/visual-basic.png" alt="Visual Studio" />
            <img src="./assets/images/git.png" alt="Git" />
            <img src="./assets/images/github.png" alt="GitHub" />
            <img src="./assets/images/mysql.png" alt="MySQL" />
            <img src="./assets/images/office.png" alt="Microsoft Office" />
          </div>
        </div>
      </div>
      <div className="about__image fade-in-from-bottom">
        <h2>About Me!</h2>
        <img
          src="./assets/images/cassie-the-cat.jpg"
          alt="Cassie looking very displeased"
        ></img>
      </div>
      <div className="about__quote fade-in">
        <p>
          &quot;Don&apos;t worry boys! The Engineer, is Engi-here!&quot;
          <br></br>
          <br></br>- Dr. Dell Conagher
        </p>
      </div>
      <div className="about__links fade-in-from-right">
        <div className="about__socials">
          <ul>
            <li>
              <a
                href="https://github.com/sereneprince"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nparknguyen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:noahparknguyen@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope /> Email
              </a>
            </li>
          </ul>
        </div>
        <img src="./assets/images/profile.png"></img>
      </div>
    </div>
  );
}

export default About;
