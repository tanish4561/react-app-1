import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero"; 
import Services from "./components/Services"; 
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Users from "./components/Users";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features"; // Added Features component
import About from "./components/About"; // Added About component
import Footer from "./components/Footer"; // Added Footer component
import "./App.css"; // Ensure styles are applied

function App() {
  return (
    <div>
      <Navbar /> {/* Navigation Bar */}
      <section id="hero">
        <Hero /> {/* Hero Section */}
      </section>
      <section id="services">
        <Services /> {/* Services Section */}
      </section>
      <section id="features">
        <Features /> {/* Features Section */}
      </section>
      <section id="pricing">
        <Pricing /> {/* Pricing Section */}
      </section>
      <section id="testimonials">
        <Testimonials /> {/* Testimonials Section */}
      </section>
      <section id="users">
        <Users /> {/* Users Section */}
      </section>
      <section id="about">
        <About /> {/* About Section */}
      </section>
      <section id="contact">
        <Contact /> {/* Contact Section */}
      </section>
      <Footer /> {/* Footer Section */}
    </div>
  );
}

export default App;
