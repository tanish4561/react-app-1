import React from "react";
import "./Features.css";
import { FaCheckCircle, FaBolt, FaShieldAlt } from "react-icons/fa";

const features = [
  { icon: <FaCheckCircle />, title: "Easy to Use", description: "Simple and intuitive interface." },
  { icon: <FaBolt />, title: "High Performance", description: "Fast loading and smooth experience." },
  { icon: <FaShieldAlt />, title: "Secure & Reliable", description: "Built with top security practices." },
];

const Features = () => {
  return (
    <div className="features-container">
      <h2 className="features-heading">🚀 Features</h2>
      <p className="features-subtext">Highlight the best features of your product here.</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
