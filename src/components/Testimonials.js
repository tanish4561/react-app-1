import React from "react";
import "./Testimonials.css"; // Import CSS

const testimonials = [
  { name: "Alice Johnson", feedback: "This service is amazing! Highly recommended." },
  { name: "Michael Smith", feedback: "Super easy to use and very efficient." },
  { name: "Emma Brown", feedback: "Fantastic experience! Will use it again for sure." },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Users Say</h2>
      <div className="testimonials-card-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
