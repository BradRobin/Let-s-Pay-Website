import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const AnimatedCounter = ({ to, duration = 1600, suffix = '' }) => {
  const [value, setValue] = useState(0);
  const hasStartedRef = useRef(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;
    let rafId = 0;
    let obs;
    const startAnim = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      const start = performance.now();
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = easeOutCubic(p);
        setValue(Math.floor(eased * to));
        if (p < 1) rafId = requestAnimationFrame(tick); else setValue(to);
      };
      rafId = requestAnimationFrame(tick);
    };
    if ('IntersectionObserver' in window) {
      obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            startAnim();
            if (obs && el) obs.unobserve(el);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -15% 0px' });
      obs.observe(el);
    } else {
      startAnim();
    }
    return () => { if (obs && el) obs.unobserve(el); if (rafId) cancelAnimationFrame(rafId); };
  }, [to, duration]);

  return <span ref={nodeRef}>{value}{suffix}</span>;
};

const Experience = () => {
  return (
    <div className="experience">
      <div className="container">
        <div className="experience-header">
          <h1>Our Experience</h1>
          <div className="info-block">
            <p className="experience-subtitle">
              Over a decade of expertise across multiple domains and industries
            </p>
          </div>
        </div>

        <div className="experience-content">
          <div className="experience-stats">
            <div className="stat-card">
              <div className="stat-number"><AnimatedCounter to={935} duration={1800} suffix="" /></div>
              <div className="stat-label">Years of combined experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number"><AnimatedCounter to={16} duration={1400} suffix="+" /></div>
              <div className="stat-label">Years in business</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Global</div>
              <div className="stat-label">Continental presence</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support availability</div>
            </div>
          </div>

          <div className="domains-section">
            <h2>Domain Expertise</h2>
            <div className="domains-grid">
              <div className="domain-category">
                <h3>Technology Infrastructure</h3>
                <ul className="domain-list">
                  <li>Network Infrastructure and Connectivity</li>
                  <li>Cloud Computing, hosting, archiving</li>
                  <li>Big Data and AI</li>
                  <li>Business Intelligence & Communication</li>
                  <li>Secure Communication System</li>
                  <li>Wireless Infrastructure</li>
                  <li>IP Networks</li>
                  <li>Video Conferencing</li>
                </ul>
              </div>

              <div className="domain-category">
                <h3>Security & Surveillance</h3>
                <ul className="domain-list">
                  <li>Security and Surveillance Systems</li>
                  <li>Security Design, Consultancy, Installation</li>
                  <li>Risk & Threat Analysis</li>
                  <li>Security Printing</li>
                  <li>Civil, Mechanical, Electrical Engineering</li>
                  <li>Electronic Engineering integration systems</li>
                </ul>
              </div>

              <div className="domain-category">
                <h3>Digital Solutions</h3>
                <ul className="domain-list">
                  <li>E-government</li>
                  <li>E-payment</li>
                  <li>E-learning</li>
                  <li>IT Consulting</li>
                  <li>Structured Cabling</li>
                  <li>Intelligent Power Transmission</li>
                  <li>Smart Grid</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="industries-section">
            <h2>Industry Verticals</h2>
            <div className="industries-grid">
              <div className="industry-card">
                <div className="industry-icon">🏦</div>
                <h3>Banking, Finance & Insurance</h3>
                <p>Tier one bank core system used across all continents by leading banks, financial institutions, and insurance companies.</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🏥</div>
                <h3>Medical & Health Solutions</h3>
                <p>Hospital Management Information Systems (HMIS) with unified patient records and telemedicine capabilities.</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">⚡</div>
                <h3>Energy Systems & Equipment</h3>
                <p>Smart grid solutions and intelligent power transmission systems for modern energy infrastructure.</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🌐</div>
                <h3>ICT Networks & Integration</h3>
                <p>Comprehensive ICT solutions including network design, installation, and integration services.</p>
              </div>
            </div>
          </div>

          <div className="capabilities-section">
            <h2>Core Capabilities</h2>
            <div className="capabilities-grid">
              <div className="capability-item">
                <h3>Payment Processing</h3>
                <p>Testing of Payment Delivery Channels like ATM, POS, HMIS, etc.</p>
              </div>
              <div className="capability-item">
                <h3>Staffing Solutions</h3>
                <p>Offshore & onsite project staffing for various technology implementations.</p>
              </div>
              <div className="capability-item">
                <h3>System Integration</h3>
                <p>End-to-end business requirements and customer needs fulfillment.</p>
              </div>
              <div className="capability-item">
                <h3>Consultation Services</h3>
                <p>Expert consultation on payment associations like VISA and Mastercard operations.</p>
              </div>
            </div>
          </div>

          <div className="achievements-section">
            <h2>Key Achievements</h2>
            <div className="achievements-list">
              <div className="achievement-item">
                <div className="achievement-icon">🏆</div>
                <div className="achievement-text">
                  <h3>International Recognition</h3>
                  <p>Successfully implemented solutions across all continents with proven track record.</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">🔒</div>
                <div className="achievement-text">
                  <h3>Security Excellence</h3>
                  <p>Bank-grade security with 99.99999% availability (seven nines) - unmatched in the industry.</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">📱</div>
                <div className="achievement-text">
                  <h3>Mobile Innovation</h3>
                  <p>Pioneered mobile payment solutions with Android & iOS applications for seamless transactions.</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">🌍</div>
                <div className="achievement-text">
                  <h3>Global Impact</h3>
                  <p>Empowered governments and enterprises worldwide with digital transformation solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
