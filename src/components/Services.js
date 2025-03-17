import React from "react";
import "./Services.css"; // Ensure CSS is imported

const services = [
  { title: "Web Development", description: "We build responsive websites." },
  { title: "SEO Optimization", description: "Improve your website ranking." },
  { title: "UI/UX Design", description: "Create stunning user interfaces." },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-card-container">
        {services.map((service, index) => (
          <div key={index} className="services-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
