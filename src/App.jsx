import "./App.css";
import profile from "./assets/profile.jpeg.jpeg";

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <h2>Suthin</h2>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="profile-section">
        <div className="profile-card">
          <img src={profile} alt="Profile" className="profile-img" />

          <h1>Suthin Varghese</h1>
          <h3>Quality Engineering Anaylst</h3>

          <p>
            Automation Testing | Manual Testing | IBM Sterling OMS | API Testing | Selenium | Java | TestNG
          </p>

          <div className="buttons">
            <a href="#projects">View Projects</a>
            <a href="mailto:suthinvarghese1998@gmail.com">Contact Me</a>
            <a href="/resume.pdf" download>Download Resume</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          - Software Quality Engineer with 4.2 years of experience in Software Testing & Quality Assurance
- Proven expertise in Retail Supply Chain systems including Order Management Systems (OMS), Warehouse Management Systems (WMS), and Mobile Applications
- Skilled in Functional Testing, Regression Testing, and API Testing (Postman) ensuring end‑to‑end validation across diverse platforms
- Hands‑on experience in Automation Testing using Selenium with Java, implementing TestNG Hybrid Frameworks (Data‑Driven + Keyword‑Driven) to enhance test reusability and coverage
- Strong background in test planning, execution, and defect management, contributing to improved sprint completion and reduced defect leakage
- Adept at integration testing across OMS, WMS, and mobile ecosystems, ensuring seamless order flow and system reliability
- Experienced in Agile and Waterfall methodologies, collaborating with cross‑functional teams to deliver quality releases
- Recognized for analytical problem‑solving, stakeholder collaboration, and time management, consistently driving process improvements

        </p>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="grid">
          <div>Automation Testing</div>
          <div>Functional Testing</div>
          <div>Selenium WebDriver</div>
          <div>Java</div>
          <div>TestNG</div>
          <div>API Testing(PostMan)</div>
          <div>JIRA</div>
          <div>Oracle DB2</div>
          <div>Agile Methodology</div>
          <div>SDLC</div>
          <div>STLC</div>
          <div>GitHub</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          <div className="project-card">
            <h3>Selenium Automation Framework</h3>
            <p>Built and maintained Selenium TestNG automation framework.</p>
          </div>

          <div className="project-card">
            <h3>OMS Regression Testing</h3>
            <p>Validated retail order flows across OMS, WMS and mobile apps.</p>
          </div>

          <div className="project-card">
            <h3>API Testing</h3>
            <p>Validated APIs using Postman and Bruno with functional checks.</p>
          </div>

          <div className="project-card">
            <h3>Mobile Application Testing</h3>
            <p>Performed functional, regression, UI and compatibility testing.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Achievements</h2>
        <div className="grid">
          <div>Reduced defect leakage by 15%</div>
          <div>Improved sprint completion by 20%</div>
          <div>Validated 200+ API endpoints</div>
          <div>Designed 500+ test cases</div>
        </div>
      </section>

      <section className="section">
        <h2>Certifications</h2>
        <div className="grid">
          <div>Infosys Certified Java Programmer</div>
          <div>Infosys Global Agile Developer</div>
          <div>Infosys Certified DevOps Professional</div>
          <div>Infosys Certified Selenium Automation Tester</div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Email: suthinvarghese1998@gmail.com</p>
        <p>Mobile: +91 9645069467</p>
        <p>Location: Trivandrum, Kerala</p>
        <p>
  LinkedIn:
  <a
    href="https://www.linkedin.com/in/suthin-varghese/"
    target="_blank"
  >
    View Profile
  </a>
</p>

<p>
  GitHub:
  <a
    href="https://github.com/suthin10"
    target="_blank"
  >
    View GitHub
  </a>
</p>
      </section>
    </div>
  );
}

export default App;