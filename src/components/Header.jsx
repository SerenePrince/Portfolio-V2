import { useState } from "react";
import "../styles/Header.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

function Header() {
  const [currentComponent, setCurrentComponent] = useState("home");
  const [selectedNav, setSelectedNav] = useState("home");

  const handleNavClick = (component) => {
    setCurrentComponent(component);
    setSelectedNav(component);
  };

  return (
    <header className="header">
      <div className="header__navigation">
        <nav>
          <ul>
            <li
              className={selectedNav === "home" ? "selected" : ""}
              onClick={() => handleNavClick("home")}
            >
              Home
            </li>
            <li
              className={selectedNav === "about" ? "selected" : ""}
              onClick={() => handleNavClick("about")}
            >
              About
            </li>
            <li
              className={selectedNav === "experience" ? "selected" : ""}
              onClick={() => handleNavClick("experience")}
            >
              Experience
            </li>
            <li
              className={selectedNav === "projects" ? "selected" : ""}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </li>
            <li
              className={selectedNav === "contact" ? "selected" : ""}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__content">
        <div
          className={`component ${
            currentComponent === "home" ? "visible" : ""
          }`}
        >
          <Home />
        </div>
        <div
          className={`component ${
            currentComponent === "about" ? "visible" : ""
          }`}
        >
          <About />
        </div>
        <div
          className={`component ${
            currentComponent === "experience" ? "visible" : ""
          }`}
        >
          <Experience />
        </div>
        <div
          className={`component ${
            currentComponent === "projects" ? "visible" : ""
          }`}
        >
          <Projects />
        </div>
        <div
          className={`component ${
            currentComponent === "contact" ? "visible" : ""
          }`}
        >
          <Contact />
        </div>
      </div>
    </header>
  );
}

export default Header;
