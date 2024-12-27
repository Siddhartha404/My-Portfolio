import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Siddhartha Thapa Chhetri</h1>
        <p className="hero-subtitle">Aspiring System Administrator and Developer</p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-button primary">View Projects</a>
          <a href="#about" className="hero-button secondary">About Me</a>
          <a href="#contact" className="hero-button secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;