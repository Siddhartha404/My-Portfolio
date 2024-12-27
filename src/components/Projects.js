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
            <div className="project-content">
              <h3 className="project-title">Project 2</h3>
              <div className="project-tech">
                <span className="tech-tag">Coming Soon</span>
              </div>
              <p className="project-description">
                Description of your second project.
              </p>
              <div className="project-footer">
                <span className="project-status">In Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;