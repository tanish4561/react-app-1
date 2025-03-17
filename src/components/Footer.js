import React from "react";
import "./Footer.css"; // Import the styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
