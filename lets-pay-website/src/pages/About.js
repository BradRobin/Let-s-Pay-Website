import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* First Section - Company Introduction text left, logo right */}
      <section className="flow-section intro-section">
        <div className="flow-container">
          <div className="text-content">
            <h1 className="section-title">About <span className="highlight-blue"><span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span></span></h1>
            <div className="info-block">
              <p className="intro-text">
                <span className="highlight-cyan"><span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span></span> Limited is a software development company which provides innovative, customized, scalable and integrated software solutions. 
                We are an international private limited company with a presence in Kenya, formed in <span className="highlight-red">2009</span> by professionals from the card payment domain, 
                the technology and banking domain, who share a common vision to implement a 
                secure payment platform system, targeting the global market.
              </p>
              <p className="intro-text">
                <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> also focuses on emerging mobile technology and offers secure 
                electronic payment services using a mobile application (mobile app) for 
                facilitating various payments like collecting and managing revenues, bill 
                payments, etc., through Account/Wallet/Card. <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> is a 
                <span className="highlight-blue"> tier one bank core system</span> used across all continents of the world.
              </p>
              <p className="intro-text">
                Our core values define who we are: <span className="highlight-red">We Are Passionate</span> about technology and innovation, 
                <span className="highlight-blue"> Honest & Dependable</span> in all our partnerships and solutions, and 
                <span className="highlight-cyan"> Always Improving</span> to deliver the best software solutions to our clients.
              </p>
            </div>
            <p className="trademark-text">
              <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> is an international trademark brand also registered in <span className="highlight-red">KENYA</span>.
            </p>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/who we are.png" 
                alt="Let's Pay Who Are We - Letspay Limited Software Development Company Identity with Map of Kenya Region Showing Client Locations, Red and Blue Location Pins, Core Values Icons for We Are Passionate, Honest & Dependable, Always Improving, and Integrated Financial Management System Branding" 
                className="section-image"
              />
              <h3>Who Are We</h3>
              <p>Letspay Limited - Software Development Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Company Focus text right, placeholder image left */}
      <section className="flow-section focus-section">
        <div className="flow-container">
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Solutions for Healthcare.png" 
                alt="Let's Pay Solutions for Healthcare - Comprehensive Healthcare Management Software with Doctor Holding Clipboard, Hospital Building, Syringe, Pill, Heart with Pulse Line, Test Tube, First Aid Kit, Ambulance, Dropper, Nurse Icon, Patient Care, and Blood Bag for Clinical Workflow Automation and Healthcare Digital Transformation" 
                className="section-image"
              />
              <h3>Company Focus</h3>
              <p>Strategic Vision</p>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">Our <span className="highlight-cyan">Focus</span></h2>
            <div className="info-block">
              <p className="focus-text">
                <span className="highlight-blue">IT solutions provider</span> for Financial & Enterprise 
                verticals. Have comprehensive & emerging technology-based products for the 
                <span className="highlight-cyan"> Payment, Health & HR domains</span>. Our comprehensive healthcare 
                management software solution facilitates online transactions and automates outpatients, inpatients, 
                pharmacy, pathology, radiology, operation theatre, procurement, inventory, assets, payroll, 
                human resource, nursing, budgeting and financial accounting and produces MIS reports.
              </p>
              <p className="focus-text">
                Software solution to address end-to-end business requirements and meet the needs of customers. 
                Have nearly <span className="highlight-red">1000 Man Years</span> of experience. 
                Consultation on handling payment associations like <span className="highlight-blue">VISA and Mastercard</span> operations.
                Our healthcare solutions bridge clinical care with financial accountability, enabling smarter, 
                faster, and more transparent healthcare delivery.
              </p>
            </div>
            <div className="focus-features">
              <div className="scrolling-container">
                <div className="feature-item">Testing of Payment Delivery Channels like ATM, POS, HMIS</div>
                <div className="feature-item">Staffing Solution for offshore & onsite projects</div>
                <div className="feature-item">Comprehensive & emerging technology-based products</div>
                <div className="feature-item">End-to-end healthcare management software integration</div>
                <div className="feature-item">Clinical workflow automation and MIS reporting</div>
                {/* Duplicate for seamless loop */}
                <div className="feature-item">Testing of Payment Delivery Channels like ATM, POS, HMIS</div>
                <div className="feature-item">Staffing Solution for offshore & onsite projects</div>
                <div className="feature-item">Comprehensive & emerging technology-based products</div>
                <div className="feature-item">End-to-end healthcare management software integration</div>
                <div className="feature-item">Clinical workflow automation and MIS reporting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Experience text left, placeholder image right */}
      <section className="flow-section experience-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Our <span className="highlight-blue">Experience</span></h2>
            <div className="experience-stats">
              <div className="stat-item">
                <span className="stat-number highlight-red">1000+</span>
                <span className="stat-label">Man-years of experience across payment and enterprise domains</span>
              </div>
              <div className="stat-item">
                <span className="stat-number highlight-cyan">Global</span>
                <span className="stat-label">Worked in multiple risk regions and verticals</span>
              </div>
            </div>
            <div className="info-block">
              <p className="experience-text">
                Our excellent team is our strength and asset. The enthusiastic and hardworking team at Apps Pool is immensely knowledgeable and qualified. 
                Empowered by their in-depth knowledge and hands-on experience, they are the pillars of our pulsating growth.
                <span className="highlight-blue">Hands-on approach inception-to-Closure</span>. 
                Work with you end-to-end. Stay till the end to ensure you get the objectives fulfilled.
              </p>
              <p className="experience-text">
                A pool of human minds with deep-rooted knowledge across multiple industry verticals. 
                <span className="highlight-cyan">Focus on empowering the SME</span>. We work with SMEs as a separate focus area. 
                This is to empower them to use the power of automation while managing risk in a controlled environment.
              </p>
            </div>
            <div className="infrastructure-highlight">
              <h3 className="highlight-red">SELF OWNED OFFICE, STORAGE AND WORKING FACILITIES</h3>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/team.png" 
                alt="Let's Pay Team - Apps Pool Core Team of Four Individuals Gathered Around Computer Workstation with Dynamic Cross-Functional Collaboration, Expertise and Innovation, Organizational Culture and Collaborative Strength for Letspay Integrated Financial Management System Growth" 
                className="section-image"
              />
              <h3>Professional Team</h3>
              <p>Apps Pool Core Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Healthcare Vision text right, placeholder image left */}
      <section className="flow-section healthcare-section">
        <div className="flow-container">
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/smart telemedicine devices.png" 
                alt="Let'spay Healthcare Vision and Telemedicine" 
                className="section-image"
              />
              <h3>Healthcare Vision</h3>
              <p>Telemedicine Solutions</p>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">Our <span className="highlight-red">Ambition</span></h2>
            <div className="healthcare-poem">
              <div className="scrolling-container">
                <p className="poem-line">Our ambition is to</p>
                <p className="poem-line highlight-blue">improve health care</p>
                <p className="poem-line">for all of our people,</p>
                <p className="poem-line">But we understand</p>
                <p className="poem-line">that we can't put a</p>
                <p className="poem-line highlight-cyan">level 6 public hospital</p>
                <p className="poem-line">in every village.</p>
                {/* Duplicate for seamless loop */}
                <p className="poem-line">Our ambition is to</p>
                <p className="poem-line highlight-blue">improve health care</p>
                <p className="poem-line">for all of our people,</p>
                <p className="poem-line">But we understand</p>
                <p className="poem-line">that we can't put a</p>
                <p className="poem-line highlight-cyan">level 6 public hospital</p>
                <p className="poem-line">in every village.</p>
              </div>
            </div>
            <div className="info-block">
              <p className="healthcare-text">
                We believe that citizens, in every part of the country, should have access to basic healthcare. 
                There are various strategies to do so, and one of those strategies is  
                <span className="highlight-red"> telemedicine</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Educational Solutions text left, image right */}
      <section className="flow-section education-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Solutions for <span className="highlight-orange">Education</span></h2>
            <div className="info-block">
              <p className="education-text">
                We offer innovative school and college administrative software that provides the most 
                technologically advanced information management system for educational institutions of today and for tomorrow. 
                Our integrated financial management system streamlines academic and administrative operations, 
                enabling institutions to focus on what matters most - delivering quality education.
              </p>
            </div>
            <div className="education-features">
              <div className="scrolling-container">
                <div className="education-item">
                  <div className="education-icon">💡</div>
                  <h4 className="highlight-blue">Innovation & Knowledge</h4>
                  <p>Cutting-edge technology for modern learning environments</p>
                </div>
                <div className="education-item">
                  <div className="education-icon">🌍</div>
                  <h4 className="highlight-cyan">Global Education Reach</h4>
                  <p>Scalable solutions for institutions worldwide</p>
                </div>
                <div className="education-item">
                  <div className="education-icon">📊</div>
                  <h4 className="highlight-red">Smart Data Systems</h4>
                  <p>Real-time fee tracking and performance analytics</p>
                </div>
                <div className="education-item">
                  <div className="education-icon">👩‍🏫</div>
                  <h4 className="highlight-green">Staff & Resource Management</h4>
                  <p>Comprehensive payroll and resource planning</p>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="education-item">
                  <div className="education-icon">💡</div>
                  <h4 className="highlight-blue">Innovation & Knowledge</h4>
                  <p>Cutting-edge technology for modern learning environments</p>
                </div>
                <div className="education-item">
                  <div className="education-icon">🌍</div>
                  <h4 className="highlight-cyan">Global Education Reach</h4>
                  <p>Scalable solutions for institutions worldwide</p>
                </div>
                <div className="education-item">
                  <div className="education-icon">📊</div>
                  <h4 className="highlight-red">Smart Data Systems</h4>
                  <p>Real-time fee tracking and performance analytics</p>
                </div>
                <div className="education-item">
                  <div className="education-icon">👩‍🏫</div>
                  <h4 className="highlight-green">Staff & Resource Management</h4>
                  <p>Comprehensive payroll and resource planning</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Solutions for education.png" 
                alt="Let's Pay Solutions for Education - Integrated Financial Management System for Educational Institutions with Graduate Cap and Gown, Innovation Light Bulb, Global Education Globe, Learning Book, Assessment Pencil, and Administrative Functions for Schools and Colleges" 
                className="section-image"
              />
              <h3>Educational Solutions</h3>
              <p>Innovative School & College Software</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sixth Section - Strengths text left, placeholder image right */}
      <section className="flow-section strengths-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Our <span className="highlight-cyan">Strengths</span></h2>
            <div className="strengths-list">
              <div className="scrolling-container">
                <div className="strength-item">
                  <h3 className="highlight-blue">Domain Expertise</h3>
                  <p>Let'spay Technical team has a wealth of Domain expertise and has on its rolls subject matter experts who have participated in similar projects and interact with the users at all levels. Our excellent team is our strength and asset, with enthusiastic and hardworking professionals who are immensely knowledgeable and qualified.</p>
                </div>
                <div className="strength-item">
                  <h3 className="highlight-red">24/7 Support</h3>
                  <p>The commitment and sincerity of Let'spay service engineers is something to be experienced to believe. Let'spay support services are extended through the Customer Support Centre 24/7 help desk support team.</p>
                </div>
                <div className="strength-item">
                  <h3 className="highlight-cyan">Technological Competence</h3>
                  <p>Let'spay engineers are technologically competent to deliver complex solutions. Understanding business requirements of Clients - Having worked very closely with clients in different countries for 9+ years.</p>
                </div>
                <div className="strength-item">
                  <h3 className="highlight-blue">Quality Standards</h3>
                  <p>Let'spay will provide solutions and services, whose quality standards will be second to none. The group has a vision to expand the business of providing the most efficient & customer-centric services.</p>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="strength-item">
                  <h3 className="highlight-blue">Domain Expertise</h3>
                  <p>Let'spay Technical team has a wealth of Domain expertise and has on its rolls subject matter experts who have participated in similar projects and interact with the users at all levels. Our excellent team is our strength and asset, with enthusiastic and hardworking professionals who are immensely knowledgeable and qualified.</p>
                </div>
                <div className="strength-item">
                  <h3 className="highlight-red">24/7 Support</h3>
                  <p>The commitment and sincerity of Let'spay service engineers is something to be experienced to believe. Let'spay support services are extended through the Customer Support Centre 24/7 help desk support team.</p>
                </div>
                <div className="strength-item">
                  <h3 className="highlight-cyan">Technological Competence</h3>
                  <p>Let'spay engineers are technologically competent to deliver complex solutions. Understanding business requirements of Clients - Having worked very closely with clients in different countries for 9+ years.</p>
                </div>
                <div className="strength-item">
                  <h3 className="highlight-blue">Quality Standards</h3>
                  <p>Let'spay will provide solutions and services, whose quality standards will be second to none. The group has a vision to expand the business of providing the most efficient & customer-centric services.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Happy customers.png" 
                alt="Let's Pay Happy Customers - Institutional Trust and Customer Satisfaction Across Government, Healthcare, and Educational Organizations Including Ministry of Youth Sports Arts Recreation Zimbabwe, Amref Health Africa, Evans Sunrise Medical Centre" 
                className="section-image"
              />
              <h3>Our Strengths</h3>
              <p>Excellence & Quality</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
