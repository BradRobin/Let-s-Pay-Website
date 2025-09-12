import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-header">
          <h1>About Let'sPay</h1>
          <p className="about-subtitle">
            International private limited company with a presence in Kenya
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Let's Pay was formed in 2009 by professionals from the card payment domain, 
              the technology and banking domain, who share a common vision to implement a 
              secure payment platform system, targeting the global market.
            </p>
            <p>
              Let's Pay also focuses on emerging mobile technology and offers secure 
              electronic payment services using a mobile application (mobile app) for 
              facilitating various payments like collecting and managing revenues, bill 
              payments, etc., through Account/Wallet/Card.
            </p>
            <p>
              Let's Pay is a tier one bank core system used across all continents of the world 
              and is an international trademark brand registered in Kenya.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Man-years of experience</p>
            </div>
            <div className="stat-item">
              <h3>2009</h3>
              <p>Founded</p>
            </div>
            <div className="stat-item">
              <h3>Global</h3>
              <p>Presence across all continents</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Customer support</p>
            </div>
          </div>
        </div>

        <div className="strengths-section">
          <h2>Our Strengths</h2>
          <div className="strengths-grid">
            <div className="strength-card">
              <h3>Domain Expertise</h3>
              <p>Our technical team has wealth of domain expertise with subject matter experts who have participated in similar projects and interact with users at all levels.</p>
            </div>
            <div className="strength-card">
              <h3>24/7 Support</h3>
              <p>Our commitment and sincerity of service engineers is something to be experienced. We provide round-the-clock support through our Customer Support Centre.</p>
            </div>
            <div className="strength-card">
              <h3>Technological Competence</h3>
              <p>Our engineers are technologically competent to deliver complex solutions with deep understanding of business requirements across different countries.</p>
            </div>
            <div className="strength-card">
              <h3>Quality Standards</h3>
              <p>We provide solutions and services whose quality standards will be second to none, with a vision to expand business of providing efficient & customer-centric services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
