import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const contacts = [
    { icon: <FaPhone />, title: "Phone", details: "8848793227" },
    { icon: <FaEnvelope />, title: "Email", details: "anupamapnair@gmail.com" },
    { icon: <FaLinkedin />, title: "LinkedIn", details: "https://www.linkedin.com/in/anupama-p-nair" },
  ];

  return (
    <section id="contact" className="contact-section">
      {/* Cosmic bubbles */}
      <div className="bubbles-layer">
        {[...Array(12)].map((_, i) => <span key={i}></span>)}
      </div>

      {/* Heading */}
      <h1 className="contact-heading">Get in Touch</h1>

      {/* Flip Cards */}
      <div className="contact-cards">
        {contacts.map((contact, idx) => (
          <div key={idx} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-icon">{contact.icon}</div>
                <h3>{contact.title}</h3>
              </div>
              <div className="flip-card-back">
                {contact.title === "LinkedIn" ? (
                  <a href={contact.details} target="_blank" rel="noopener noreferrer">{contact.details}</a>
                ) : contact.title === "Email" ? (
                  <a href={`mailto:${contact.details}`}>{contact.details}</a>
                ) : (
                  <span>{contact.details}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Box */}
      <div className="message-box">
        <textarea placeholder="Drop a message..." rows="3"></textarea>
        <button>Send</button>
      </div>

      {/* Back to Top */}
      <div className="scroll-link">
        <a href="#hero">↑ Back to Top ↑</a>
      </div>
    </section>
  );
}

export default Contact;
