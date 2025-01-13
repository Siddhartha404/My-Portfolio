import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <a 
              href="https://github.com/Siddhartha404/Network_scanner.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <div className="project-content">
                <h3 className="project-title">Network Scanner Tool</h3>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Networking</span>
                  <span className="tech-tag">Multithreading</span>
                </div>
                <p className="project-description">
                  A Python-based tool for analyzing and monitoring local or remote networks. 
                  It identifies active devices within a specified network range, measures latency using ICMP pings, 
                  and scans for open ports. This tool leverages multithreading for optimal performance on larger networks.
                </p>
                <div className="project-footer">
                  <span className="view-project">View Project →</span>
                </div>
              </div>
            </a>
          </div>

          <div className="project-card">
            <a 
              href="https://github.com/Siddhartha404/Lego-Website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
            <div className="project-content">
              <h3 className="project-title">Lego Collection Website</h3>
              <div className="project-tech">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Javascript</span>
              </div>
              <p className="project-description">
              Developed a full-stack web application for browsing and managing Lego sets. 
              The platform includes user authentication with registration and login, along with a dynamic filtering system by categories like All Sets, Technic, and Classic Town. 
              The responsive UI features collection cards, a navigation bar, and registration forms, built using modern web development practices and component-based
              </p>
              <div className="project-footer">
                <span className="view-project">View Project →</span>
              </div>
            </div>
            </a>
          </div>

          <div className="project-card">
            <a 
              href="https://github.com/Siddhartha404/Pygame_projects/tree/main/Space-Invaders" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
            <div className="project-content">
              <h3 className="project-title">Space Shooter</h3>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Pygame</span>
              </div>
              <p className="project-description">
              Created an arcade-style space shooter featuring dynamic sprite-based gameplay and engaging particle effects. 
              Implemented collision detection, cooldown-based shooting mechanics, and smooth vector-based movement. 
              Added immersive sound effects, a scoring system, and sprite animations to enhance player experience. 
              Utilized Python, Pygame, and object-oriented programming with event handling for robust game functionality.
              </p>
              <div className="project-footer">
                <span className="view-project">View Project →</span>
              </div>
            </div>
            </a>
          </div>

          <div className="project-card">
            <a 
              href="https://github.com/Siddhartha404/Lego-Website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
            <div className="project-content">
              <h3 className="project-title">Lego Collection Website</h3>
              <div className="project-tech">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Javascript</span>
              </div>
              <p className="project-description">
              Developed a full-stack web application for browsing and managing Lego sets. 
              The platform includes user authentication with registration and login, along with a dynamic filtering system by categories like All Sets, Technic, and Classic Town. 
              The responsive UI features collection cards, a navigation bar, and registration forms, built using modern web development practices and component-based
              </p>
              <div className="project-footer">
                <span className="view-project">View Project →</span>
              </div>
            </div>
            </a>
          </div>

          <div className="project-card">
            <a 
              href="https://github.com/Siddhartha404/Lego-Website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
            <div className="project-content">
              <h3 className="project-title">Lego Collection Website</h3>
              <div className="project-tech">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Javascript</span>
              </div>
              <p className="project-description">
              Developed a full-stack web application for browsing and managing Lego sets. 
              The platform includes user authentication with registration and login, along with a dynamic filtering system by categories like All Sets, Technic, and Classic Town. 
              The responsive UI features collection cards, a navigation bar, and registration forms, built using modern web development practices and component-based
              </p>
              <div className="project-footer">
                <span className="view-project">View Project →</span>
              </div>
            </div>
            </a>
          </div>

          <div className="project-card">
            <a 
              href="https://github.com/Siddhartha404/Lego-Website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
            <div className="project-content">
              <h3 className="project-title">Lego Collection Website</h3>
              <div className="project-tech">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Javascript</span>
              </div>
              <p className="project-description">
              Developed a full-stack web application for browsing and managing Lego sets. 
              The platform includes user authentication with registration and login, along with a dynamic filtering system by categories like All Sets, Technic, and Classic Town. 
              The responsive UI features collection cards, a navigation bar, and registration forms, built using modern web development practices and component-based
              </p>
              <div className="project-footer">
                <span className="view-project">View Project →</span>
              </div>
            </div>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;