import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Projects.css";

import eterna1 from "../asset/eterna1.png";
import eterna2 from "../asset/eterna2.png";
import ecommerce1 from "../asset/ecommerce1.png";
import ecommerce2 from "../asset/ecommerce2.png";

const projectsData = [
  {
    title: "ETERNA Fashion Store",
    images: [eterna1, eterna2],
    description:
      "A React & Django e-commerce website with dynamic chatbot and cart system.",
  },
  {
    title: "E-Commerce Website",
    images: [ecommerce1, ecommerce2],
    description:
      "Full-stack e-commerce project with online payment integration and order management.",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);
  const [sequenceIndex, setSequenceIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (hovered !== null) {
      interval = setInterval(() => {
        setSequenceIndex((prev) => (prev + 1) % 3);
      }, 1200);
    } else {
      setSequenceIndex(0);
    }
    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <section id="projects" className="projects-section">
      <div className="stars-layer"></div>
      <div className="orbits-layer"></div>

      <h1 className="projects-heading">🚀 My Works</h1>

      <div className="projects-center">
        {projectsData.map((project, index) => {
          const isHovered = hovered === index;
          return (
            <div
              key={index}
              className={`project-card ${isHovered ? "hovered" : ""}`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 className="project-title">{project.title}</h3>

              <div className="project-content">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={project.title}
                    className={`project-img ${
                      isHovered && sequenceIndex === i ? "penetrate" : ""
                    }`}
                    style={{ zIndex: sequenceIndex === i ? 3 : 1 }}
                  />
                ))}

                {isHovered && sequenceIndex === 2 && (
                  <p className="project-description penetrate">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="scroll-link-next">
        <Link
          to="qualifications"
          smooth={true}
          duration={600}
          className="btn-next"
        >
          ↓ Next: Qualifications ↓
        </Link>
      </div>
    </section>
  );
};

export default Projects;
