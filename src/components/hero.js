import React from "react";
import "./hero.css"; // Import the separate CSS file

const Hero = () => {
  return (
    <div className="hero-container">
      <video
        autoPlay
        muted
        loop
        className="video-background"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
      <div className="hero-content">
        <h1>Welcome to Our Landing Page</h1>
        <p>Discover amazing features and services.</p>
        <button className="hero-button">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
