import "./Projects.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">

        <article className="project-card">
          <img src={project1} alt="NGO Awareness Website" />

          <div className="project-card-body">
            <h3>NGO Awareness Website</h3>

            <p>
              Intelligent event management application that automates planning,
              scheduling and personalized event discovery using AI.
            </p>

            <div className="project-tags">
              <span className="tag">API</span>
              <span className="tag">React</span>
            </div>

            <div className="project-buttons">
              <a href="https://convivablecable22.github.io/inamigos_taskbyaj/awareness.html" className="btn btn-primary">
                Live Demo
              </a>

              <a href="https://github.com/ConvivableCable22/inamigos_taskbyaj" className="btn btn-secondary">
                GitHub
              </a>
            </div>
          </div>
        </article>

        <article className="project-card">
          <img src={project2} alt="Hotel Management System" />

          <div className="project-card-body">
            <h3>Hotel Management System</h3>

            <p>
              Dynamic web application that creates personalized workout plans
              using React and external APIs.
            </p>

            <div className="project-tags">
              <span className="tag">API</span>
              <span className="tag">React</span>
            </div>

            <div className="project-buttons">
              <a href="#" className="btn btn-primary">
                Live Demo
              </a>

              <a href="#" className="btn btn-secondary">
                GitHub
              </a>
            </div>
          </div>
        </article>

        <article className="project-card">
          <img src={project3} alt="Student Management System" />

          <div className="project-card-body">
            <h3>Student Management System</h3>

            <p>
              Student collaboration platform for communication, event sharing,
              and resource exchange within a college community.
            </p>

            <div className="project-tags">
              <span className="tag">API</span>
              <span className="tag">React</span>
            </div>

            <div className="project-buttons">
              <a href="#" className="btn btn-primary">
                Live Demo
              </a>

              <a href="#" className="btn btn-secondary">
                GitHub
              </a>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Projects;