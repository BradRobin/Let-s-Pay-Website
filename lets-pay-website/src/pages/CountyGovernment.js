import React, { useState } from 'react';
import LearnMoreButton from '../components/LearnMoreButton';
import './CountyGovernment.css';

const CountyGovernment = () => {
  // State for dropdown visibility
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Toggle dropdown function
  const toggleDropdown = (index) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="county-government">
      {/* First Section - Intro text left, image right */}
      <section className="flow-section intro-section">
        <div className="flow-container">
          <div className="text-content">
            <h1 className="section-title">Kenyan County Government Solutions</h1>
            <div className="info-block">
              <p className="intro-text">
                <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> is a Web & mobility-based platform, targeted towards facilitating 
                Government Departments to collect and manage revenue payments more seamlessly 
                & conveniently. This is a holistic platform, which facilitates the collection 
                of payments using Cash, Debit, and credit Cards & Mobile Wallets and direct 
                bank deposit from consumers and also supports other ERP modules like Human 
                Resource Management, Electronic Document Management, Case Management, Fleet 
                Management, Licenses, Property & Land Rates.
              </p>
              <p className="highlight-text">
                <span className="highlight-cyan">Real-time system</span> with secure audit trails, automatic reports, 
                and self-reconciling without human intervention. The most secure and customized 
                system in Kenya.
              </p>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/let's pay overview.png" 
                alt="Let'spay County Government Platform Overview" 
                className="section-image"
              />
              <h3>County Government Platform</h3>
              <p>Comprehensive Revenue Management</p>
              <LearnMoreButton
                title="County Government Platform"
                description="Our comprehensive platform provides county governments with integrated revenue management solutions including real-time payment processing, automated reconciliation, and comprehensive reporting. The system supports multiple payment methods and provides secure audit trails for financial transparency."
                ctaText="Explore Platform"
                ctaLink="/county-government"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Revenue Collection text left, image right */}
      <section className="flow-section revenue-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Revenue Collection Excellence</h2>
            <div className="info-block">
              <p className="section-text">
                An increase in revenue collection can be achieved through employing county revenue 
                instruments for tax collection, as well as exploiting and harnessing all available 
                sources of revenue in their localities, and devising a cost-effective means of 
                collecting revenues.
              </p>
            </div>
            <div className="revenue-features">
              <div className="scrolling-container">
                <div className="feature-card">
                  <div className="feature-icon">💰</div>
                  <h3 className="highlight-blue">Multiple Payment Methods</h3>
                  <p>Cash, Debit/Credit Cards, Mobile Wallets, Direct Bank Deposits</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📊</div>
                  <h3 className="highlight-cyan">Real-Time Reporting</h3>
                  <p>Automatic reports and self-reconciling without human intervention</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🔒</div>
                  <h3 className="highlight-red">Secure Audit Trails</h3>
                  <p>Complete transaction tracking and compliance monitoring</p>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="feature-card">
                  <div className="feature-icon">💰</div>
                  <h3 className="highlight-blue">Multiple Payment Methods</h3>
                  <p>Cash, Debit/Credit Cards, Mobile Wallets, Direct Bank Deposits</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📊</div>
                  <h3 className="highlight-cyan">Real-Time Reporting</h3>
                  <p>Automatic reports and self-reconciling without human intervention</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🔒</div>
                  <h3 className="highlight-red">Secure Audit Trails</h3>
                  <p>Complete transaction tracking and compliance monitoring</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Realtime Payment Solution.png" 
                alt="Real-time Payment Solution for County Governments" 
                className="section-image"
              />
              <h3>Real-Time Payment Solution</h3>
              <p>Mobile Financial Services & Payment Platform</p>
              <LearnMoreButton
                title="Real-Time Payment Solution"
                description="Advanced real-time payment processing system that enables instant revenue collection with automated fee calculation, receipt generation, and secure transaction monitoring. Features include multi-channel payment support, fraud detection, and comprehensive transaction logging."
                ctaText="View Solution"
                ctaLink="/solutions"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - ERP Modules text left, image right */}
      <section className="flow-section modules-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Comprehensive ERP Modules</h2>
            <div className="info-block">
              <p className="section-text">
                <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> ERP provides integrated modules for complete county government management:
              </p>
            </div>
            <div className="modules-grid">
              <div className="scrolling-container">
                <div className="module-item">
                  <div className="module-icon">📝</div>
                  <h4 className="highlight-blue">Registration Module</h4>
                  <p>Online, Agents, Mobile channels</p>
                </div>
                <div className="module-item">
                  <div className="module-icon">🏛️</div>
                  <h4 className="highlight-cyan">Revenue Services</h4>
                  <p>Set up Revenue Services</p>
                </div>
                <div className="module-item">
                  <div className="module-icon">🏠</div>
                  <h4 className="highlight-red">Land Rates & Building Plans</h4>
                  <p>Property and land management</p>
                </div>
                <div className="module-item">
                  <div className="module-icon">📋</div>
                  <h4 className="highlight-blue">Licenses</h4>
                  <p>License management system</p>
                </div>
                <div className="module-item">
                  <div className="module-icon">🚗</div>
                  <h4 className="highlight-cyan">Fleet Management</h4>
                  <p>Vehicle and fleet tracking</p>
                </div>
                <div className="module-item">
                  <div className="module-icon">👥</div>
                  <h4 className="highlight-red">Human Resource Management</h4>
                  <p>HR and personnel management</p>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="module-item">
                  <div className="module-icon">📝</div>
                  <h4 className="highlight-blue">Registration Module</h4>
                  <p>Online, Agents, Mobile channels</p>
                </div>
                <div className="module-item">
                  <div className="module-icon">🏛️</div>
                  <h4 className="highlight-cyan">Revenue Services</h4>
                  <p>Set up Revenue Services</p>
                </div>
                <div className="module-item">
                  <div className="module-icon">🏠</div>
                  <h4 className="highlight-red">Land Rates & Building Plans</h4>
                  <p>Property and land management</p>
                </div>
                <div className="module-item">
                  <div className="module-icon">📋</div>
                  <h4 className="highlight-blue">Licenses</h4>
                  <p>License management system</p>
                </div>
                <div className="module-item">
                  <div className="module-icon">🚗</div>
                  <h4 className="highlight-cyan">Fleet Management</h4>
                  <p>Vehicle and fleet tracking</p>
                </div>
                <div className="module-item">
                  <div className="module-icon">👥</div>
                  <h4 className="highlight-red">Human Resource Management</h4>
                  <p>HR and personnel management</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/IFMS chart.png" 
                alt="IFMS Chart - Integrated Financial Management System" 
                className="section-image"
              />
              <h3>IFMS Chart</h3>
              <p>Integrated Financial Management System</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - G2C App text left, image right */}
      <section className="flow-section g2c-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">G2C App - One App. Many Possibilities</h2>
            <div className="info-block">
              <p className="section-text">
                Anytime, handy Governance Assist and Citizen Connect. G2C is a unique mobile financial 
                services interface that integrates daily transactions and lifestyle expenses into a single, 
                accessible app. Featuring unified access to money transfer, payments, household expenses, 
                financial services, and P2P payments, with smart categorization for shopping, utilities, 
                transport, banking, and community services. Mobile-first design for convenience and speed, 
                enabling 2-way smooth and effective frictionless communication and transactions.
              </p>
            </div>
            <div className="g2c-features">
              <div className="scrolling-container">
                <div className="feature-highlight">Unified Access to Financial Tools</div>
                <div className="feature-highlight">Lifestyle Expenses Integration</div>
                <div className="feature-highlight">Mobile-First Design</div>
                <div className="feature-highlight">Smart Categorization</div>
                {/* Duplicate for seamless loop */}
                <div className="feature-highlight">Unified Access to Financial Tools</div>
                <div className="feature-highlight">Lifestyle Expenses Integration</div>
                <div className="feature-highlight">Mobile-First Design</div>
                <div className="feature-highlight">Smart Categorization</div>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/G2C App.png" 
                alt="Let's Pay G2C App - Mobile Financial Services Interface with Unified Access to Money Transfer, Payments, Household Expenses, Financial Services, P2P Payments, Shopping, Water, Fuel, Mobile Money, Transport, Banking, Community Services, and Personal Services" 
                className="section-image"
              />
              <h3>G2C App</h3>
              <p>One-stop Inside-Out Revenue Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Mobile Solutions text left, image right */}
      <section className="flow-section mobile-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Mobile Payment Solutions</h2>
            <div className="info-block">
              <p className="section-text">
                Mobiles are everywhere; with the advent of smartphones, the proliferation has been 
                exponential. Increasingly mobile is transforming from a simple communication tool 
                into a powerful, all-pervasive enabler of payments, transactions, and accelerating 
                business growth. <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> is at the forefront of the mobility wave with its Mobile Payment platform, 
                featuring Use Case 1: Utility Payments for unified bill management of water, gas, electricity, 
                and telecom services through mobile-first access and streamlined payment solutions.
              </p>
            </div>
            <div className="mobile-features">
              <div className="scrolling-container">
                <div className="mobile-feature">
                  <div className="feature-icon">📱</div>
                  <h4 className="highlight-blue">Mobile Wallet</h4>
                  <p>Secure mobile payment solutions</p>
                </div>
                <div className="mobile-feature">
                  <div className="feature-icon">💳</div>
                  <h4 className="highlight-cyan">mPOS Integration</h4>
                  <p>Mobile point of sale capabilities</p>
                </div>
                <div className="mobile-feature">
                  <div className="feature-icon">🏦</div>
                  <h4 className="highlight-red">Mobile Banking</h4>
                  <p>Complete banking solutions on mobile</p>
                </div>
                <div className="mobile-feature">
                  <div className="feature-icon">💡</div>
                  <h4 className="highlight-green">Utility Payments</h4>
                  <p>Unified bill management for water, gas, electricity</p>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="mobile-feature">
                  <div className="feature-icon">📱</div>
                  <h4 className="highlight-blue">Mobile Wallet</h4>
                  <p>Secure mobile payment solutions</p>
                </div>
                <div className="mobile-feature">
                  <div className="feature-icon">💳</div>
                  <h4 className="highlight-cyan">mPOS Integration</h4>
                  <p>Mobile point of sale capabilities</p>
                </div>
                <div className="mobile-feature">
                  <div className="feature-icon">🏦</div>
                  <h4 className="highlight-red">Mobile Banking</h4>
                  <p>Complete banking solutions on mobile</p>
                </div>
                <div className="mobile-feature">
                  <div className="feature-icon">💡</div>
                  <h4 className="highlight-green">Utility Payments</h4>
                  <p>Unified bill management for water, gas, electricity</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Utility Payments.png" 
                alt="Let's Pay Utility Payments - Use Case 1 Mobile Financial Services with Unified Bill Management for Water, Gas, Electricity, and Telecom Services through Mobile-First Access and Streamlined Payment Solutions" 
                className="section-image"
              />
              <h3>Mobile Innovation</h3>
              <p>Cutting-Edge Mobile Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sixth Section - Technology Stack text left, image right */}
      <section className="flow-section technology-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Advanced Technology Stack</h2>
            <div className="info-block">
              <p className="section-text">
                <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> leverages cutting-edge technologies to deliver robust, scalable, and secure 
                county government solutions. Our comprehensive technology stack is built on the Microsoft .NET Framework,
                a popular, free, cross-platform, open source developer platform for building many different types of applications.
                A web application is a software application that the user interacts with via a browser. Web applications are growing 
                in popularity because they can be updated and maintained without having to distribute or install software on computers 
                and because of their cross-platform compatibility. We utilize rich functionality and libraries, ecosystems built on 
                .NET Standard, ensuring optimal performance, reliability, and future-proofing for all government operations.
              </p>
            </div>
            <div className="tech-stack-grid">
              <div className="tech-item">
                <img src="/images/Web application development.png" alt="Let's Pay Web Application Development - Vibrant Hands-On Modern Web Development with Large Computer Monitor, Three Animated Characters Working on UI Elements, Gear Icons for System Logic, Cross-Platform Compatibility, Real-Time Updates, and Collaborative Development for Government Portals and Enterprise Solutions" className="tech-logo" />
                <div className="tech-title-container">
                  <h4 className="highlight-blue">Web Application Development</h4>
                  <button className="dropdown-btn" onClick={() => toggleDropdown(0)}>
                    <svg className={`chevron-icon ${openDropdowns[0] ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                </div>
                {openDropdowns[0] && (
                  <div className="dropdown-content">
                    <p>Vibrant hands-on modern web development with cross-platform compatibility and real-time updates</p>
                  </div>
                )}
              </div>
              <div className="tech-item">
                <img src="/images/javascript.png" alt="JavaScript" className="tech-logo" />
                <div className="tech-title-container">
                  <h4 className="highlight-cyan">JavaScript</h4>
                  <button className="dropdown-btn" onClick={() => toggleDropdown(1)}>
                    <svg className={`chevron-icon ${openDropdowns[1] ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                </div>
                {openDropdowns[1] && (
                  <div className="dropdown-content">
                    <p>Dynamic client-side functionality and interactive web interfaces</p>
                  </div>
                )}
              </div>
              <div className="tech-item">
                <img src="/images/Html and css.png" alt="HTML & CSS" className="tech-logo" />
                <div className="tech-title-container">
                  <h4 className="highlight-red">HTML & CSS</h4>
                  <button className="dropdown-btn" onClick={() => toggleDropdown(2)}>
                    <svg className={`chevron-icon ${openDropdowns[2] ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                </div>
                {openDropdowns[2] && (
                  <div className="dropdown-content">
                    <p>Modern responsive web design</p>
                  </div>
                )}
              </div>
              <div className="tech-item">
                <img src="/images/Bootstrap.png" alt="Bootstrap" className="tech-logo" />
                <div className="tech-title-container">
                  <h4 className="highlight-blue">Bootstrap</h4>
                  <button className="dropdown-btn" onClick={() => toggleDropdown(3)}>
                    <svg className={`chevron-icon ${openDropdowns[3] ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                </div>
                {openDropdowns[3] && (
                  <div className="dropdown-content">
                    <p>Mobile-first responsive framework for cross-device compatibility</p>
                  </div>
                )}
              </div>
              <div className="tech-item">
                <img src="/images/framework.png" alt="Framework" className="tech-logo" />
                <div className="tech-title-container">
                  <h4 className="highlight-cyan">Custom Framework</h4>
                  <button className="dropdown-btn" onClick={() => toggleDropdown(4)}>
                    <svg className={`chevron-icon ${openDropdowns[4] ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                </div>
                {openDropdowns[4] && (
                  <div className="dropdown-content">
                    <p>Collaborative development for rapid iteration and stakeholder feedback</p>
                  </div>
                )}
              </div>
              <div className="tech-item">
                <img src="/images/Database.png" alt="Let's Pay Microsoft SQL Server Database Technology - Industry-Leading RDBMS for Mission-Critical Intelligent Applications and Data Warehouses" className="tech-logo" />
                <div className="tech-title-container">
                  <h4 className="highlight-red">Database Systems</h4>
                  <button className="dropdown-btn" onClick={() => toggleDropdown(5)}>
                    <svg className={`chevron-icon ${openDropdowns[5] ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                </div>
                {openDropdowns[5] && (
                  <div className="dropdown-content">
                    <p>Microsoft SQL Server - Industry-leading RDBMS for mission-critical applications and data warehouses</p>
                  </div>
                )}
              </div>
              <div className="tech-item">
                <img src="/images/microsoft sql.png" alt="Microsoft SQL" className="tech-logo" />
                <div className="tech-title-container">
                  <h4 className="highlight-blue">Microsoft SQL</h4>
                  <button className="dropdown-btn" onClick={() => toggleDropdown(6)}>
                    <svg className={`chevron-icon ${openDropdowns[6] ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                </div>
                {openDropdowns[6] && (
                  <div className="dropdown-content">
                    <p>Enterprise database solutions</p>
                  </div>
                )}
              </div>
              <div className="tech-item">
                <img src="/images/crystal.png" alt="Crystal Reports" className="tech-logo" />
                <div className="tech-title-container">
                  <h4 className="highlight-cyan">Crystal Reports</h4>
                  <button className="dropdown-btn" onClick={() => toggleDropdown(7)}>
                    <svg className={`chevron-icon ${openDropdowns[7] ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                </div>
                {openDropdowns[7] && (
                  <div className="dropdown-content">
                    <p>Advanced reporting capabilities</p>
                  </div>
                )}
              </div>
              <div className="tech-item">
                <img src="/images/fortinet.png" alt="Fortinet Security" className="tech-logo" />
                <div className="tech-title-container">
                  <h4 className="highlight-red">Fortinet Security</h4>
                  <button className="dropdown-btn" onClick={() => toggleDropdown(8)}>
                    <svg className={`chevron-icon ${openDropdowns[8] ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                </div>
                {openDropdowns[8] && (
                  <div className="dropdown-content">
                    <p>Enterprise-grade security</p>
                  </div>
                )}
              </div>
              <div className="tech-item">
                <img src="/images/Modules.png" alt="Modular Architecture" className="tech-logo" />
                <div className="tech-title-container">
                  <h4 className="highlight-blue">Modular Architecture</h4>
                  <button className="dropdown-btn" onClick={() => toggleDropdown(9)}>
                    <svg className={`chevron-icon ${openDropdowns[9] ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                </div>
                {openDropdowns[9] && (
                  <div className="dropdown-content">
                    <p>Scalable system design</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Microsoft Dot net Framework.png" 
                alt="Let's Pay Microsoft .NET Framework Foundation - Popular Free Cross-Platform Open Source Developer Platform with Rich Functionality and Libraries Built on .NET Standard for Robust Enterprise-Grade Applications" 
                className="section-image"
              />
              <div className="image-title-container">
                <h3>Microsoft .NET Framework</h3>
                <button className="dropdown-btn" onClick={() => toggleDropdown('framework')}>
                  <svg className={`chevron-icon ${openDropdowns['framework'] ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
              </div>
              {openDropdowns['framework'] && (
                <div className="dropdown-content">
                  <p>Enterprise-Grade Development Platform - Popular Free Cross-Platform Open Source Developer Platform with Rich Functionality and Libraries Built on .NET Standard for Robust Enterprise-Grade Applications</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Seventh Section - Security & Trust text left, image right */}
      <section className="flow-section security-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Security & Trust</h2>
            <div className="info-block">
              <p className="section-text">
                Whenever a new tech solution makes its debut, someone tries to hack it. Despite the 
                growing popularity of mobile banking, security breaches continue to pose a significant 
                threat. Players will need to ensure their mobile platforms can provide a high level 
                of data security. Doing so is crucial for instilling and maintaining trust in the 
                entire ecosystem.
              </p>
            </div>
            <div className="security-features">
              <div className="security-feature">
                <div className="feature-icon">🔐</div>
                <h4 className="highlight-blue">High-Level Data Security</h4>
                <p>Advanced encryption and security protocols</p>
              </div>
              <div className="security-feature">
                <div className="feature-icon">🛡️</div>
                <h4 className="highlight-cyan">Trust & Compliance</h4>
                <p>Maintaining trust in the entire ecosystem</p>
              </div>
              <div className="security-feature">
                <div className="feature-icon">⚡</div>
                <h4 className="highlight-red">Real-Time Monitoring</h4>
                <p>Continuous security monitoring and alerts</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="security-images">
              <div className="scrolling-container">
                <div className="security-item">
                  <img 
                    src="/images/QR Payment.png" 
                    alt="QR Payment Solutions - Mobile Payment Technology with QR Code Generation, Secure Transactions, and Real-Time Payment Processing for Government Revenue Collection" 
                    className="section-image"
                  />
                  <h4 className="highlight-blue">QR Payment Solutions</h4>
                  <p>Mobile Payment Technology</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Market Rent Payment.png" 
                    alt="Market Rent Payment - Digital Rent Collection System with Automated Billing, Payment Tracking, and Revenue Management for Government Market Operations" 
                    className="section-image"
                  />
                  <h4 className="highlight-cyan">Market Rent Payment</h4>
                  <p>Digital Rent Collection</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Off site license payment.png" 
                    alt="Off-site License Payment - Remote License Payment System with Online Processing, Digital Documentation, and Automated License Management for Government Services" 
                    className="section-image"
                  />
                  <h4 className="highlight-red">Off-site License Payment</h4>
                  <p>Remote License Processing</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Parking fee collection.png" 
                    alt="Parking Fee Collection - Smart Parking Management System with Digital Payment Processing, Real-Time Monitoring, and Automated Fee Collection for Municipal Parking" 
                    className="section-image"
                  />
                  <h4 className="highlight-blue">Parking Fee Collection</h4>
                  <p>Smart Parking Management</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Parking fee collection USSD process.png" 
                    alt="Parking Fee Payment Mobile Flow - USSD-Based Parking Payment System with Feature Phone Compatibility, Mobile Payment Processing, and Real-Time Parking Management" 
                    className="section-image"
                  />
                  <h4 className="highlight-cyan">Parking Fee Payment Mobile Flow</h4>
                  <p>USSD-Based Payment System</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Taxes, fines and payments.png" 
                    alt="Taxes, Fines & Penalties - Government Revenue Collection System with Digital Payment Processing, Automated Fine Management, and Tax Collection for Municipal Services" 
                    className="section-image"
                  />
                  <h4 className="highlight-red">Taxes, Fines & Penalties</h4>
                  <p>Revenue Collection System</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Parking fee collection USSD process.png" 
                    alt="Traffic Fine Payment Flow - Digital Traffic Fine Management with Mobile Payment Processing, Automated Fine Calculation, and Real-Time Payment Confirmation for Traffic Violations" 
                    className="section-image"
                  />
                  <h4 className="highlight-blue">Traffic Fine Payment Flow</h4>
                  <p>Digital Traffic Fine Management</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Parking fee collection.png" 
                    alt="Parking Payment Flow - Complete Parking Transaction System with Digital Payment Processing, QR Code Integration, and Real-Time Parking Management for Urban Mobility" 
                    className="section-image"
                  />
                  <h4 className="highlight-cyan">Parking Payment Flow</h4>
                  <p>Complete Transaction System</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Realtime Payment with Receipt Generation.png" 
                    alt="Real-time Payment with Receipt - Instant Payment Processing System with Digital Receipt Generation, Real-Time Transaction Confirmation, and Automated Documentation for Government Payments" 
                    className="section-image"
                  />
                  <h4 className="highlight-red">Real-time Payment with Receipt</h4>
                  <p>Instant Payment Processing</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Parking fee collection USSD process.png" 
                    alt="Water Bill Payment Cycle - Digital Water Bill Management with Automated Billing, Mobile Payment Processing, and Real-Time Payment Confirmation for Municipal Water Services" 
                    className="section-image"
                  />
                  <h4 className="highlight-blue">Water Bill Payment Cycle</h4>
                  <p>Digital Water Bill Management</p>
                </div>
                {/* Duplicate content for seamless loop */}
                <div className="security-item">
                  <img 
                    src="/images/QR Payment.png" 
                    alt="QR Payment Solutions - Mobile Payment Technology with QR Code Generation, Secure Transactions, and Real-Time Payment Processing for Government Revenue Collection" 
                    className="section-image"
                  />
                  <h4 className="highlight-blue">QR Payment Solutions</h4>
                  <p>Mobile Payment Technology</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Market Rent Payment.png" 
                    alt="Market Rent Payment - Digital Rent Collection System with Automated Billing, Payment Tracking, and Revenue Management for Government Market Operations" 
                    className="section-image"
                  />
                  <h4 className="highlight-cyan">Market Rent Payment</h4>
                  <p>Digital Rent Collection</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Off site license payment.png" 
                    alt="Off-site License Payment - Remote License Payment System with Online Processing, Digital Documentation, and Automated License Management for Government Services" 
                    className="section-image"
                  />
                  <h4 className="highlight-red">Off-site License Payment</h4>
                  <p>Remote License Processing</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Parking fee collection.png" 
                    alt="Parking Fee Collection - Smart Parking Management System with Digital Payment Processing, Real-Time Monitoring, and Automated Fee Collection for Municipal Parking" 
                    className="section-image"
                  />
                  <h4 className="highlight-blue">Parking Fee Collection</h4>
                  <p>Smart Parking Management</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Parking fee collection USSD process.png" 
                    alt="Parking Fee Payment Mobile Flow - USSD-Based Parking Payment System with Feature Phone Compatibility, Mobile Payment Processing, and Real-Time Parking Management" 
                    className="section-image"
                  />
                  <h4 className="highlight-cyan">Parking Fee Payment Mobile Flow</h4>
                  <p>USSD-Based Payment System</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Taxes, fines and payments.png" 
                    alt="Taxes, Fines & Penalties - Government Revenue Collection System with Digital Payment Processing, Automated Fine Management, and Tax Collection for Municipal Services" 
                    className="section-image"
                  />
                  <h4 className="highlight-red">Taxes, Fines & Penalties</h4>
                  <p>Revenue Collection System</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Parking fee collection USSD process.png" 
                    alt="Traffic Fine Payment Flow - Digital Traffic Fine Management with Mobile Payment Processing, Automated Fine Calculation, and Real-Time Payment Confirmation for Traffic Violations" 
                    className="section-image"
                  />
                  <h4 className="highlight-blue">Traffic Fine Payment Flow</h4>
                  <p>Digital Traffic Fine Management</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Parking fee collection.png" 
                    alt="Parking Payment Flow - Complete Parking Transaction System with Digital Payment Processing, QR Code Integration, and Real-Time Parking Management for Urban Mobility" 
                    className="section-image"
                  />
                  <h4 className="highlight-cyan">Parking Payment Flow</h4>
                  <p>Complete Transaction System</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Realtime Payment with Receipt Generation.png" 
                    alt="Real-time Payment with Receipt - Instant Payment Processing System with Digital Receipt Generation, Real-Time Transaction Confirmation, and Automated Documentation for Government Payments" 
                    className="section-image"
                  />
                  <h4 className="highlight-red">Real-time Payment with Receipt</h4>
                  <p>Instant Payment Processing</p>
                </div>
                <div className="security-item">
                  <img 
                    src="/images/Parking fee collection USSD process.png" 
                    alt="Water Bill Payment Cycle - Digital Water Bill Management with Automated Billing, Mobile Payment Processing, and Real-Time Payment Confirmation for Municipal Water Services" 
                    className="section-image"
                  />
                  <h4 className="highlight-blue">Water Bill Payment Cycle</h4>
                  <p>Digital Water Bill Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eighth Section - Payment Solutions Gallery */}
      <section className="flow-section payment-solutions-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Comprehensive Payment Solutions</h2>
            <div className="info-block">
              <p className="section-text">
                Our platform supports multiple payment methods and revenue collection channels, 
                making it easy for citizens to pay for government services through their preferred method.
                Our comprehensive QR payment solutions feature mobile applications and rugged handheld PDAs
                designed for secure, cashless QR payments with real-time data transmission to headquarters,
                GPS-based movement restriction for unauthorized use prevention, and field-ready payment processing.
                Our Use Case 3: Taxes, Fines & Penalties showcases mobile financial services for streamlining 
                financial obligations with real-time tracking and payment of property taxes, business fines, 
                and regulatory penalties via mobile-first government financial services and data-driven governance.
                Our Traffic Fine Payment Flow demonstrates a complete five-panel digital payment cycle for 
                traffic violations via mobile app, featuring fine notification, violation confirmation, payment 
                details, payment method selection, and payment completion for civic enforcement and law enforcement 
                integration.
                Our Use Case 4: Parking Fee Collection showcases mobile payment technology for urban parking 
                management with license plate recognition, time-based billing, enforcement systems, and real-time 
                municipal revenue dashboard integration for smart city initiatives and municipal revenue collection.
                Our Parking Payment Flow demonstrates a complete five-panel digital parking transaction process 
                via mobile app, featuring vehicle check-in, active parking with QR code generation, token-based 
                validation, payment processing, and receipt generation for smart parking infrastructure and urban mobility.
                Our Parking Fee Payment Mobile Flow showcases a comprehensive six-step user journey for mobile 
                parking fee payment via feature phone application, featuring service selection, zone selection, 
                vehicle category, parking type, vehicle registration, and payment confirmation for menu-driven 
                civic services and mobile-first service delivery.
                Our comprehensive water bill payment cycle demonstrates a complete digital payment workflow
                from bill notification to payment confirmation, featuring mobile app user experience,
                multiple payment methods including cash, card, wallet, loyalty rewards, and vouchers,
                with real-time receipt generation and seamless utility bill management.
              </p>
            </div>
            <div className="payment-features">
              <div className="feature-highlight">Feature Phone Applications</div>
              <div className="feature-highlight">Menu-Driven Civic Services</div>
              <div className="feature-highlight">Mobile-First Service Delivery</div>
              <div className="feature-highlight">County Service Design</div>
              <div className="feature-highlight">Urban Mobility UX</div>
            </div>
          </div>
          <div className="image-content">
            <div className="payment-gallery">
              <div className="gallery-item">
                <img 
                  src="/images/QR Payment.png" 
                  alt="Let's Pay QR Payment Solution - Mobile Application and Rugged Handheld PDA for Secure Cashless QR Payments with Real-Time Data Transmission, GPS-Based Security, and Field-Ready Payment Processing" 
                  className="gallery-image"
                />
                <h4>QR Payment Solutions</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Market Rent Payment.png" 
                  alt="Market Rent Payment" 
                  className="gallery-image"
                />
                <h4>Market Rent Payment</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Off site license payment.png" 
                  alt="Off-site License Payment" 
                  className="gallery-image"
                />
                <h4>Off-site License Payment</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Parking Fee Collection.png" 
                  alt="Let's Pay Parking Fee Collection - Use Case 4 Mobile Payment Technology for Urban Parking Management with License Plate Recognition, Time-Based Billing, Enforcement Systems, and Real-Time Municipal Revenue Dashboard Integration for Smart City Initiatives" 
                  className="gallery-image"
                />
                <h4>Parking Fee Collection</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Parking Fee Payment Mobile Flow.png" 
                  alt="Let's Pay Parking Fee Payment Mobile Flow - Six-Step User Journey for Mobile Parking Fee Payment via Feature Phone Application with Service Selection, Zone Selection, Vehicle Category, Parking Type, Vehicle Registration, and Payment Confirmation for Menu-Driven Civic Services and Mobile-First Service Delivery" 
                  className="gallery-image"
                />
                <h4>Parking Fee Payment Mobile Flow</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Taxes Fines and Penalties.png" 
                  alt="Let's Pay Taxes Fines and Penalties - Use Case 3 Mobile Financial Services for Streamlining Financial Obligations with Real-Time Tracking and Payment of Property Taxes, Business Fines, and Regulatory Penalties via Mobile-First Government Financial Services and Data-Driven Governance" 
                  className="gallery-image"
                />
                <h4>Taxes, Fines & Penalties</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Traffic Fine Payment Flow.png" 
                  alt="Let's Pay Traffic Fine Payment Flow - Five-Panel Digital Payment Cycle for Traffic Violations via Mobile App with Fine Notification, Violation Confirmation, Payment Details, Payment Method Selection, and Payment Completion for Civic Enforcement and Law Enforcement Integration" 
                  className="gallery-image"
                />
                <h4>Traffic Fine Payment Flow</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Parking Payment Flow.png" 
                  alt="Let's Pay Parking Payment Flow - Five-Panel Digital Parking Transaction Process via Mobile App with Vehicle Check-In, Active Parking with QR Code Generation, Token-Based Validation, Payment Processing, and Receipt Generation for Smart Parking Infrastructure and Urban Mobility" 
                  className="gallery-image"
                />
                <h4>Parking Payment Flow</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Realtime Payment with Receipt Generation.png" 
                  alt="Real-time Payment with Receipt" 
                  className="gallery-image"
                />
                <h4>Real-time Payment with Receipt</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Water Bill Payment.png" 
                  alt="Let's Pay Water Bill Payment - Five-Panel Digital Payment Cycle from Bill Notification to Payment Confirmation with Mobile App User Experience, Multiple Payment Methods, Real-time Receipt Generation, and Seamless Water Utility Bill Management" 
                  className="gallery-image"
                />
                <h4>Water Bill Payment Cycle</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ninth Section - System Architecture */}
      <section className="flow-section architecture-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">System Architecture & Integration</h2>
            <div className="info-block">
              <p className="section-text">
                Our robust system architecture ensures seamless integration of a comprehensive technological 
                ecosystem including PACS, QR codes, biometrics, smart cards, payment gateways, signature pads, 
                SMS, lab machines, electronic mail, web platforms, mobile money, smart phones, digital photo 
                capabilities, barcode scanning, card payments, e-payments, claims processing, and data exchange 
                for unified health information management.
              </p>
            </div>
            <div className="architecture-features">
              <div className="feature-card">
                <div className="feature-icon">🧩</div>
                <h3 className="highlight-blue">Modular Integration</h3>
                <p>Puzzle-piece design with interconnected technological components</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔗</div>
                <h3 className="highlight-cyan">Comprehensive Ecosystem</h3>
                <p>PACS, biometrics, smart cards, payment gateways, and communication tools</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏥</div>
                <h3 className="highlight-red">Health Information Management</h3>
                <p>Unified digital backbone for healthcare and financial operations</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="architecture-gallery">
              <div className="gallery-item">
                <img 
                  src="/images/High level architecture.png" 
                  alt="High Level Architecture" 
                  className="gallery-image"
                />
                <h4>High Level Architecture</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Holistic Payment Architecture.png" 
                  alt="Holistic Payment Architecture" 
                  className="gallery-image"
                />
                <h4>Holistic Payment Architecture</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Integrations.png" 
                  alt="Let's Pay Integrations - Technological Ecosystem with PACS, QR Codes, Biometrics, Smart Cards, Payment Gateway, Signature Pads, SMS, Lab Machines, E-Mail, Web, Mobile Money, Smart Phone, Digital Photo, Barcode, Card Payment, E-Payments, Claims, and Data Exchange for Comprehensive Health Information Management" 
                  className="gallery-image"
                />
                <h4>Comprehensive Integrations</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tenth Section - Government Services */}
      <section className="flow-section services-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Government Services Management</h2>
            <div className="info-block">
              <p className="section-text">
                Comprehensive management tools for all government services including financial 
                management, asset tracking, and digital transformation initiatives. Our City County 
                Revenue Management System provides mobile-first access to government-to-citizen services 
                with unified platforms for building plans & approvals, taxes & fines, land use rentals, 
                parking fees, business permits & licensing, health service certificates, and service charges. 
                Our Business Licenses Use Case 2 demonstrates regulatory compliance for small businesses 
                with digital licensing workflows, mobile platform integration for license applications, 
                renewal reminders, fee payments, and verification scheduling for micro and small enterprises. 
                Our comprehensive Business Permit Flow showcases a five-panel digital business permit application 
                process via mobile app, featuring marketplace interface, permit form entry, license confirmation, 
                payment method selection, and payment completion for SME onboarding and county revenue automation.
                Our Business Permit Near Marketplace demonstrates a complete five-panel digital workflow for opening 
                shops in the Near Marketplace via John Bosco City County E-Wallet, featuring business information entry, 
                license details confirmation, payment method selection, and payment completion for SME empowerment 
                and digital governance. 
                Dual-focus design serving both government administrators and citizens with tailored workflows 
                and streamlined revenue collection.
              </p>
            </div>
            <div className="services-features">
              <div className="feature-highlight">Near Marketplace Operations</div>
              <div className="feature-highlight">SME Empowerment</div>
              <div className="feature-highlight">Civic Tech Platforms</div>
              <div className="feature-highlight">Digital Governance</div>
              <div className="feature-highlight">Citizen Dashboard</div>
            </div>
          </div>
          <div className="image-content">
            <div className="services-gallery">
              <div className="gallery-item">
                <img 
                  src="/images/Accounts.png" 
                  alt="Accounts Management" 
                  className="gallery-image"
                />
                <h4>Accounts Management</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Asset management.png" 
                  alt="Asset Management" 
                  className="gallery-image"
                />
                <h4>Asset Management</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Budgeting.png" 
                  alt="Let's Pay Budgeting System - Financial Planning Tool for Business Success with Cash Flow Tracking, Expense Management, and Revenue Planning" 
                  className="gallery-image"
                />
                <h4>Budgeting System</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Digitalisation.png" 
                  alt="Let's Pay Healthcare Digitalisation - Modern Digital Healthcare System with Mobile Interfaces, Integrated Health Components, and Networked Healthcare Infrastructure" 
                  className="gallery-image"
                />
                <h4>Digitalisation</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Partners.png" 
                  alt="Let's Pay City County Revenue Management System - Mobile Application for Government-to-Citizen Services with Building Plans & Approvals, Taxes Cess and Fines, Land Use Rentals, Parking Fee, House Rent, Market Fees, Business Permits & Licensing, Health Service Certificate, and Service Charges" 
                  className="gallery-image"
                />
                <h4>City County Revenue Management</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Reports.png" 
                  alt="Reports and Analytics" 
                  className="gallery-image"
                />
                <h4>Reports & Analytics</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Business Licenses.png" 
                  alt="Let's Pay Business Licenses Use Case 2 - Regulatory Compliance for Small Businesses with Digital Licensing Workflows, Mobile Platform Integration, License Application, Renewal Reminders, Fee Payments, Verification and Inspection Scheduling for Micro and Small Enterprises" 
                  className="gallery-image"
                />
                <h4>Business Licenses</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Business Permit Flow.png" 
                  alt="Let's Pay Business Permit Flow - Five-Panel Digital Business Permit Application Process via Mobile App with Marketplace Interface, Permit Form Entry, License Confirmation, Payment Method Selection, and Payment Completion for SME Onboarding and County Revenue Automation" 
                  className="gallery-image"
                />
                <h4>Business Permit Flow</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Business Permit Near Marketplace.png" 
                  alt="Let's Pay Business Permit Near Marketplace - Five-Panel Digital Workflow for Opening Shop in Near Marketplace via John Bosco City County E-Wallet with Business Information Entry, License Details, Payment Method Selection, and Payment Completion for SME Empowerment and Digital Governance" 
                  className="gallery-image"
                />
                <h4>Business Permit Near Marketplace</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eleventh Section - Fleet & Emergency Management */}
      <section className="flow-section fleet-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Fleet & Emergency Management</h2>
            <div className="info-block">
              <p className="section-text">
                Advanced fleet management and emergency response systems to ensure efficient 
                service delivery and rapid response to emergencies.
              </p>
            </div>
            <div className="fleet-features">
              <div className="feature-card">
                <div className="feature-icon">🚑</div>
                <h3 className="highlight-blue">Ambulance Fleet</h3>
                <p>Emergency medical service management</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚒</div>
                <h3 className="highlight-cyan">Fire Department</h3>
                <p>Fire emergency response and management</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3 className="highlight-red">Real-time Support</h3>
                <p>24/7 technical and operational support</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="fleet-gallery">
              <div className="gallery-item">
                <img 
                  src="/images/Ambulance fleet.png" 
                  alt="Ambulance Fleet Management" 
                  className="gallery-image"
                />
                <h4>Ambulance Fleet</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Fire trucks fleet.png" 
                  alt="Fire Trucks Fleet" 
                  className="gallery-image"
                />
                <h4>Fire Trucks Fleet</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Fire disaster management.png" 
                  alt="Fire Disaster Management" 
                  className="gallery-image"
                />
                <h4>Fire Disaster Management</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Disaster management.png" 
                  alt="Disaster Management" 
                  className="gallery-image"
                />
                <h4>Disaster Management</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Tech fleet support.png" 
                  alt="Tech Fleet Support" 
                  className="gallery-image"
                />
                <h4>Tech Fleet Support</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Systems realtime support.png" 
                  alt="Systems Real-time Support" 
                  className="gallery-image"
                />
                <h4>Systems Real-time Support</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Twelfth Section - Security & Biometrics */}
      <section className="flow-section biometrics-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Security & Biometric Solutions</h2>
            <div className="info-block">
              <p className="section-text">
                Advanced biometric authentication systems providing the most accurate method of identification 
                for precise patient identification, employee attendance tracking, and secure access control. 
                Our biometric clock-in/out systems ensure accurate attendance data and operational excellence.
              </p>
            </div>
            <div className="biometrics-features">
              <div className="feature-highlight">Patient Identification</div>
              <div className="feature-highlight">Employee Attendance Tracking</div>
              <div className="feature-highlight">Clock-in/Clock-out Systems</div>
              <div className="feature-highlight">Operational Excellence</div>
            </div>
          </div>
          <div className="image-content">
            <div className="biometrics-gallery">
              <div className="gallery-item">
                <img 
                  src="/images/Biometrics.png" 
                  alt="Let's Pay Biometric Authentication System - Patient Identification, Employee Attendance Tracking, and Secure Access Control with Fingerprint Scanning" 
                  className="gallery-image"
                />
                <h4>Biometric Security</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Universal Health Card.png" 
                  alt="Let's Pay Universal Health Card - Health Access Card Initiative with Hand Holding Sample Card, Mr. Alex Otieno Details, Digital Health Records, Patient Mobility, Healthcare Interoperability, and Civic Tech Healthcare Vision for Universal Healthcare Access" 
                  className="gallery-image"
                />
                <h4>Universal Health Card</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thirteenth Section - Development & Implementation */}
      <section className="flow-section development-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Development & Implementation</h2>
            <div className="info-block">
              <p className="section-text">
                Our comprehensive development and implementation approach ensures successful 
                project delivery through collaborative co-creation from idea/concept to market launch. 
                Our 8-stage process includes client engagement throughout, strategic planning, 
                user-centered design, development, integration, and ongoing support with detailed 
                implementation schedules and milestones.
              </p>
            </div>
            <div className="development-features">
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3 className="highlight-blue">Co-Created Development</h3>
                <p>8-stage collaborative process from concept to launch with client engagement and user-centered design</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h3 className="highlight-cyan">Project Delivery Model</h3>
                <p>Structured project delivery methodology</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3 className="highlight-red">Implementation Schedule</h3>
                <p>Detailed project timeline and milestones</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="development-gallery">
              <div className="gallery-item">
                <img 
                  src="/images/Co-Created Product Development.png" 
                  alt="Let's Pay Co-Created Product Development Framework - Collaborative 8-Stage Process from Idea/Concept through Strategy, Design, Build, Integration, and Launch with Client Engagement and User-Centered Design" 
                  className="gallery-image"
                />
                <h4>Co-Created Development</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/PROJECT DELIVERY MODEL.png" 
                  alt="Project Delivery Model" 
                  className="gallery-image"
                />
                <h4>Project Delivery Model</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Project Implementation schedule.png" 
                  alt="Project Implementation Schedule" 
                  className="gallery-image"
                />
                <h4>Implementation Schedule</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourteenth Section - Connectivity & Infrastructure */}
      <section className="flow-section connectivity-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Connectivity & Infrastructure</h2>
            <div className="info-block">
              <p className="section-text">
                Robust connectivity solutions and expert consulting services to ensure reliable 
                infrastructure and seamless communication across all government departments. Our 
                network architecture features secure private connectivity through VPN/MPLS networks, 
                encrypted data transfers, and protected user identity with IIS and SQL Server hosting 
                behind secure firewalls for enhanced security against data theft and sniffing.
              </p>
            </div>
            <div className="connectivity-features">
              <div className="feature-highlight">VPN/MPLS Private Networks</div>
              <div className="feature-highlight">Secure Firewall Protection</div>
              <div className="feature-highlight">Encrypted Data Transfers</div>
              <div className="feature-highlight">Centralized Server Architecture</div>
            </div>
          </div>
          <div className="image-content">
            <div className="connectivity-gallery">
              <div className="gallery-item">
                <img 
                  src="/images/Connectivity.png" 
                  alt="Let's Pay Network Architecture for Integrated Health Care Information Management - County Head Office with IIS and SQL Server Behind Firewall, VPN/MPLS Private Network, and Secure Facility Connectivity" 
                  className="gallery-image"
                />
                <h4>Connectivity Solutions</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Consulting specialist.png" 
                  alt="Consulting Specialist" 
                  className="gallery-image"
                />
                <h4>Consulting Specialist</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifteenth Section - Analytics & Performance */}
      <section className="flow-section analytics-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Analytics & Performance</h2>
            <p className="section-text">
              Comprehensive analytics and performance monitoring to ensure optimal system 
              performance and continuous improvement of government services.
            </p>
            <div className="analytics-features">
              <div className="feature-highlight">Performance Monitoring</div>
              <div className="feature-highlight">Efficiency Analytics</div>
              <div className="feature-highlight">Convenience Metrics</div>
              <div className="feature-highlight">Data-Driven Insights</div>
            </div>
          </div>
          <div className="image-content">
            <div className="analytics-gallery">
              <div className="gallery-item">
                <img 
                  src="/images/World of convenience and Efficiency chart.png" 
                  alt="Convenience and Efficiency Chart" 
                  className="gallery-image"
                />
                <h4>Convenience & Efficiency Chart</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountyGovernment;
