import { FaGithub, FaPlay } from "react-icons/fa";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="project__showcase fade-in-from-left">
        <h1>Weather App</h1>
        <p>Python | PyQt5 | API</p>
        <img src="./assets/images/weather-app-showcase1.png"></img>
        <a
          href="https://github.com/SerenePrince/Weather-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </div>
      <div className="project__showcase fade-in-from-top">
        <h1>Wordle Clone</h1>
        <p>React | JavaScript | CSS</p>
        <img src="./assets/images/wordle-clone-showcase.png"></img>
        <a
          href="https://github.com/SerenePrince/Wordle-Clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://sereneprince.github.io/Wordle-Clone/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPlay /> Play it now!
        </a>
      </div>
      <div className="project__showcase__reverse fade-in-from-bottom">
        <h1>Typing Test</h1>
        <p>Coming soon...</p>
      </div>
      <div className="project__showcase__reverse fade-in-from-right">
        <h1>Spelling Bee</h1>
        <p>Coming soon...</p>
      </div>
    </div>
  );
}

export default Projects;
