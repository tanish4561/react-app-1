import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">My Landing Page</h1>
      <div className="nav-links">
        <a href="#features" className="nav-link">Features</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
