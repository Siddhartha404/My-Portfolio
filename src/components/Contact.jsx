import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-links">
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-info">
                <h3>Email</h3>
                <a href="mailto:tsiddhartha404@gmail.com" className="contact-link">
                  tsiddhartha404@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/siddhartha-thapa-chhetri-2376b3236" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Siddhartha Thapa Chhetri
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💻</div>
              <div className="contact-info">
                <h3>GitHub</h3>
                <a 
                  href="https://github.com/Siddhartha404" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Siddhartha404
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;