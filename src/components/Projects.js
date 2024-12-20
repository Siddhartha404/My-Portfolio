import React from 'react';
import './Projects.css';

function Projects() {
  return (
    
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <a 
          href="https://github.com/Siddhartha404/Network_scanner.git" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <h3>Network Scanner Tool</h3>
          <p>
            A Python-based tool for analyzing and monitoring local or remote networks. 
            It identifies active devices within a specified network range, measures latency using ICMP pings, 
            and scans for open ports. This tool leverages multithreading for optimal performance on larger networks.
          </p>
        </a>
      </div>
      <div className="project-card">
        <h3>Project 2</h3>
        <p>Description of your second project.</p>
      </div>
    </section>
  );
}

export default Projects;
