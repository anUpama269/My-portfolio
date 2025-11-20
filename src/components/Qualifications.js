import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./Qualifications.css";

const qualificationsData = [
  {
    title: "🎓 Bachelor of Technology",
    subtitle: "Electrical and Electronics Engineering",
    institution: "APJ Abdul Kalam Technological University",
    date: "May 2023",
  },
  {
    title: "💻 Python Fullstack Developer",
    subtitle: "Luminar Technolab | Remote",
    description: "Building Django-React fullstack apps with REST APIs and MySQL",
    date: "Jan 2025 - Sep 2025",
  },
  {
    title: "🏦 Central Operations Associate",
    subtitle: "Wipro Ltd.",
    description: "Handled cheque clearing process for a major banking client",
    date: "2023 - 2024",
  },
  {
    title: "💻 Intern",
    subtitle: "Sysdevcode",
    description: "Frontend and Backend Developer",
    date: "Nov 2025 - Present",
  },
];

const Qualifications = () => {
  const cardsRef = useRef([]);

  // Continuous jiggle effect for card elements
  useEffect(() => {
    const interval = setInterval(() => {
      cardsRef.current.forEach(card => {
        if(card) {
          const elements = card.querySelectorAll(".card-content *");
          elements.forEach(el => {
            const x = (Math.random() - 0.5) * 2; // -1 to 1 px
            const y = (Math.random() - 0.5) * 2;
            el.style.transform = `translate(${x}px, ${y}px)`;
          });
        }
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="qualifications" className="qualification-section">
      <div className="stars-layer"></div>
      <div className="orbit-layer"></div>

      <h1 className="qualification-heading">My Qualifications</h1>

      <div className="qualification-cards">
        {qualificationsData.map((q, index) => (
          <div
            className="qualification-card"
            key={index}
            ref={el => cardsRef.current[index] = el}
            style={{ "--i": index }}
          >
            <div className="card-content">
              <h2>{q.title}</h2>
              <h4>{q.subtitle}</h4>
              {q.institution && <p>{q.institution}</p>}
              {q.description && <p>{q.description}</p>}
              <span>{q.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to Contact Section */}
      <div className="scroll-to-contact">
        <Link to="contact" smooth={true} duration={600} className="scroll-link">
          ↓ Scroll to Contact Me ↓
        </Link>
      </div>
    </section>
  );
};

export default Qualifications;
