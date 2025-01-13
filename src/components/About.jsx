import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I am passionate about Linux, system administration, networking, and development. 
              With a strong foundation in both systems and programming, I strive to create 
              efficient and robust solutions for complex technical challenges.
            </p>
          </div>
          
          <div className="skills-container">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <ul>
                  <li>Python</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>System Administration</h4>
                <ul>
                  <li>Linux Administration</li>
                  <li>Network Management</li>
                  <li>Server Configuration</li>
                  <li>Shell Scripting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;