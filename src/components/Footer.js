import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  const icons = [
    { icon: <FaPhone />, link: "tel:8848793227" },
    { icon: <FaEnvelope />, link: "mailto:anupamapnair@gmail.com" },
    { icon: <FaGithub />, link: "https://github.com/anupama-p-nair" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anupama-p-nair" },
  ];

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev > -100 ? prev - 0.2 : 0));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-section">
      {/* Shooting stars */}
      <div className="shooting-stars">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="shooting-star" style={{ "--i": i / 10 }}></div>
        ))}
      </div>

      {/* Thank you */}
      <h2 className="footer-thankyou">Thank you for visiting</h2>

      {/* Horizontal scrolling icons */}
      <div className="footer-icons-wrapper">
        <div className="footer-icons" style={{ transform: `translateX(${offset}%)` }}>
          {icons.map((item, idx) => (
            <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Name & year */}
      <div className="footer-name">2025 Anupama P Nair | Designed with ❤️</div>

      {/* Quick links */}
      <div className="footer-links">
        <Link to="hero" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="qualifications" smooth={true} duration={500}>Qualifications</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
