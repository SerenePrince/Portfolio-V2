import "../styles/Home.css";
import { FaDownload } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div className="home__profile fade-in-from-left">
        <img
          src="./assets/images/hero-profile.jpg"
          alt="An image of Noah Park-Nguyen"
        />
      </div>
      <div className="home__summary fade-in">
        <div className="home__introduction fade-in-from-top">
          <h1>
            Hi <span className="home__wave">👋🏼</span> I&apos;m Noah.
          </h1>
        </div>
        <div className="home__tagline fade-in-from-right">
          <h2>
            A software developer dedicated to solving complex problems with
            creative, user-centered solutions.
          </h2>
        </div>
        <div className="home__resume fade-in-from-bottom">
          <a
            href="./assets/documents/NoahParkNguyenResume2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="download-button">
              <FaDownload /> My Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
