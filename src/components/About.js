import React from "react";
import "./About.css"; // Import the styles

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        We are a passionate team dedicated to providing top-quality web
        solutions. Our goal is to help businesses grow by offering exceptional
        services in web development, UI/UX design, and more.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>Deliver innovative and scalable web solutions to clients worldwide.</p>
        </div>
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>Empowering businesses with cutting-edge technology and creativity.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
