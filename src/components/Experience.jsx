import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="experience__education fade-in-from-left">
        <p>
          <strong>
            <a
              href="https://www.algonquincollege.com/sat/program/computer-engineering-technology-computing-science/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer Engineering Technology - Computer Science
            </a>
          </strong>
        </p>
        <p className="education__info">
          <strong>Algonquin College</strong>
          <p>Ottawa, Ontario</p>
          <p>Jan 2023 - Dec 2025</p>
        </p>
        <p>
          Graduated with a GPA of 3.76, consistently earning Dean&apos;s Honour
          List recognition. Gained expertise in key areas such as
          object-oriented programming, data structures, and network programming,
          developing a strong foundation in software development and systems
          engineering that directly supports industry-relevant skills.
        </p>
      </div>
      <div className="experience__work__reverse fade-in-from-right">
        <p>
          <strong>
            <a
              href="https://www.algonquincollege.com/r3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Tester
            </a>
          </strong>
        </p>
        <div className="work__info">
          <p>
            <strong>Algonquin College</strong>
          </p>
          <p>Ottawa, Ontario</p>
          <p>Sep 2024 - Dec 2024</p>
        </div>
        <p>
          Executed test cases for the R3 Project, ensuring the reliability of
          the new student information system. Identified bugs, performed
          regression testing, and collaborated within an agile team to enhance
          software quality.
        </p>
      </div>
      <div className="experience__work fade-in-from-left">
        <p>
          <strong>
            <a
              href="https://fintrac-canafe.canada.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Developer
            </a>
          </strong>
        </p>
        <div className="work__info">
          <p>
            <strong>FINTRAC</strong>
          </p>
          <p>Ottawa, Ontario</p>
          <p>Jan 2024 - Apr 2024</p>
        </div>
        <p>
          Resolved bugs through Microsoft Azure DevOps, leveraging tools like
          Visual Studio Code, Git, and Eclipse for development. Created a Java
          application to automate data updates by scanning APIs and YAML files,
          ensuring data consistency.
        </p>
      </div>
    </div>
  );
}

export default Experience;
