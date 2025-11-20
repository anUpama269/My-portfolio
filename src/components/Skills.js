import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaGithub,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import { SiDjango, SiMysql, SiSqlite, SiPostman, SiPycharm } from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "REST API", icon: <FaCode /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "DB Design", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "PyCharm", icon: <SiPycharm /> },
    ],
  },
];

const Skills = () => {
  const stars = Array.from({ length: 150 }).map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    const delay = Math.random() * 5;
    return (
      <div
        key={i}
        className="star"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <section id="skills" className="skills-section">
      {/* Cosmic Background */}
      <div className="stars-layer">{stars}</div>
      <div className="orbit-layer"></div>
      <div className="meteor"></div>
      <div className="meteor"></div>
      <div className="meteor"></div>

      <div className="skills-inner">
        <motion.h1
          className="skills-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          🌌 What I Work In
        </motion.h1>

        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Tech Stack I Work With
        </motion.p>

        {/* Horizontal scrolling cards */}
        <div className="skills-horizontal confined">
          <div className="scrolling-wrapper">
            {skillsData.concat(skillsData).map((cat, i) => (
              <article className="skills-card" key={cat.category + i}>
                <h3 className="card-title">{cat.category}</h3>
                <ul className="skills-list">
                  {cat.skills.map((skill, idx) => (
                    <li className="skill-pill" key={idx}>
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <motion.div
          className="skills-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a href="#projects" className="cta-btn">
            Explore Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
