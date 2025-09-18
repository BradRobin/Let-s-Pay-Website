import React from 'react';
import './CountyGovernment.css';

const CountyGovernment = () => {
  return (
    <div className="county-government">
      {/* First Section - Intro text left, image right */}
      <section className="flow-section intro-section">
        <div className="flow-container">
          <div className="text-content">
            <h1 className="section-title">Kenyan County Government Solutions</h1>
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
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/let's pay overview.png" 
                alt="Let'spay County Government Platform Overview" 
                className="section-image"
              />
              <h3>County Government Platform</h3>
              <p>Comprehensive Revenue Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Revenue Collection text left, image right */}
      <section className="flow-section revenue-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Revenue Collection Excellence</h2>
            <p className="section-text">
              An increase in revenue collection can be achieved through employing county revenue 
              instruments for tax collection, as well as exploiting and harnessing all available 
              sources of revenue in their localities, and devising a cost-effective means of 
              collecting revenues.
            </p>
            <div className="revenue-features">
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
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Realtime Payment Solution.png" 
                alt="Real-time Payment Solution for County Governments" 
                className="section-image"
              />
              <h3>Real-Time Payment Solution</h3>
              <p>Mobile Financial Services & Payment Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - ERP Modules text left, image right */}
      <section className="flow-section modules-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Comprehensive ERP Modules</h2>
            <p className="section-text">
              <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> ERP provides integrated modules for complete county government management:
            </p>
            <div className="modules-grid">
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
            <p className="section-text">
              Anytime, handy Governance Assist and Citizen Connect. G2C is a unique new way to 
              take care of all your interactions with government in one convenient place — saving 
              time, worry, and frustration to both authorities and citizens. Enabling 2-way smooth 
              and effective frictionless communication and transactions.
            </p>
            <div className="g2c-features">
              <div className="feature-highlight">One-stop Inside-Out Revenue Management</div>
              <div className="feature-highlight">Citizen-Government Communication</div>
              <div className="feature-highlight">Mobile Payment Solutions</div>
              <div className="feature-highlight">Real-time Transaction Processing</div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/G2C App.png" 
                alt="G2C App - One-stop Inside-Out Revenue Management" 
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
            <p className="section-text">
              Mobiles are everywhere; with the advent of smartphones, the proliferation has been 
              exponential. Increasingly mobile is transforming from a simple communication tool 
              into a powerful, all-pervasive enabler of payments, transactions, and accelerating 
              business growth. <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> is at the forefront of the mobility wave with its Mobile Payment platform.
            </p>
            <div className="mobile-features">
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
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Inspiring and Innovative solution.png" 
                alt="Mobile Payment Solutions" 
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
            <p className="section-text">
              <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> leverages cutting-edge technologies to deliver robust, scalable, and secure 
              county government solutions. Our comprehensive technology stack ensures optimal 
              performance, reliability, and future-proofing for all government operations.
            </p>
            <div className="tech-stack-grid">
              <div className="tech-item">
                <img src="/images/aspnet.png" alt="ASP.NET" className="tech-logo" />
                <h4 className="highlight-blue">ASP.NET</h4>
                <p>Robust web application framework</p>
              </div>
              <div className="tech-item">
                <img src="/images/javascript.png" alt="JavaScript" className="tech-logo" />
                <h4 className="highlight-cyan">JavaScript</h4>
                <p>Dynamic client-side functionality</p>
              </div>
              <div className="tech-item">
                <img src="/images/Html and css.png" alt="HTML & CSS" className="tech-logo" />
                <h4 className="highlight-red">HTML & CSS</h4>
                <p>Modern responsive web design</p>
              </div>
              <div className="tech-item">
                <img src="/images/Bootstrap.png" alt="Bootstrap" className="tech-logo" />
                <h4 className="highlight-blue">Bootstrap</h4>
                <p>Mobile-first responsive framework</p>
              </div>
              <div className="tech-item">
                <img src="/images/framework.png" alt="Framework" className="tech-logo" />
                <h4 className="highlight-cyan">Custom Framework</h4>
                <p>Tailored government solutions</p>
              </div>
              <div className="tech-item">
                <img src="/images/Database.png" alt="Database" className="tech-logo" />
                <h4 className="highlight-red">Database Systems</h4>
                <p>Secure data management</p>
              </div>
              <div className="tech-item">
                <img src="/images/microsoft sql.png" alt="Microsoft SQL" className="tech-logo" />
                <h4 className="highlight-blue">Microsoft SQL</h4>
                <p>Enterprise database solutions</p>
              </div>
              <div className="tech-item">
                <img src="/images/crystal.png" alt="Crystal Reports" className="tech-logo" />
                <h4 className="highlight-cyan">Crystal Reports</h4>
                <p>Advanced reporting capabilities</p>
              </div>
              <div className="tech-item">
                <img src="/images/fortinet.png" alt="Fortinet Security" className="tech-logo" />
                <h4 className="highlight-red">Fortinet Security</h4>
                <p>Enterprise-grade security</p>
              </div>
              <div className="tech-item">
                <img src="/images/Modules.png" alt="Modular Architecture" className="tech-logo" />
                <h4 className="highlight-blue">Modular Architecture</h4>
                <p>Scalable system design</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/solution.png" 
                alt="Technology Solutions" 
                className="section-image"
              />
              <h3>Technology Solutions</h3>
              <p>Advanced Security & Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh Section - Security & Trust text left, image right */}
      <section className="flow-section security-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Security & Trust</h2>
            <p className="section-text">
              Whenever a new tech solution makes its debut, someone tries to hack it. Despite the 
              growing popularity of mobile banking, security breaches continue to pose a significant 
              threat. Players will need to ensure their mobile platforms can provide a high level 
              of data security. Doing so is crucial for instilling and maintaining trust in the 
              entire ecosystem.
            </p>
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
            <div className="image-display">
              <img 
                src="/images/Network architecture.png" 
                alt="Network Architecture" 
                className="section-image"
              />
              <h3>Network Architecture</h3>
              <p>Secure Infrastructure Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eighth Section - Payment Solutions Gallery */}
      <section className="flow-section payment-solutions-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Comprehensive Payment Solutions</h2>
            <p className="section-text">
              Our platform supports multiple payment methods and revenue collection channels, 
              making it easy for citizens to pay for government services through their preferred method.
            </p>
            <div className="payment-features">
              <div className="feature-highlight">QR Code Payments</div>
              <div className="feature-highlight">Mobile Wallet Integration</div>
              <div className="feature-highlight">USSD Payment Processing</div>
              <div className="feature-highlight">Real-time Receipt Generation</div>
            </div>
          </div>
          <div className="image-content">
            <div className="payment-gallery">
              <div className="gallery-item">
                <img 
                  src="/images/QR Payment.png" 
                  alt="QR Payment Solution" 
                  className="gallery-image"
                />
                <h4>QR Payment</h4>
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
                  src="/images/Parking fee collection.png" 
                  alt="Parking Fee Collection" 
                  className="gallery-image"
                />
                <h4>Parking Fee Collection</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Parking fee collection USSD process.png" 
                  alt="USSD Payment Process" 
                  className="gallery-image"
                />
                <h4>USSD Payment Process</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Taxes, fines and payments.png" 
                  alt="Taxes, Fines and Payments" 
                  className="gallery-image"
                />
                <h4>Taxes, Fines & Payments</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Realtime Payment with Receipt Generation.png" 
                  alt="Real-time Payment with Receipt" 
                  className="gallery-image"
                />
                <h4>Real-time Payment with Receipt</h4>
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
            <p className="section-text">
              Our robust system architecture ensures seamless integration with existing government 
              systems while providing scalability and reliability for future growth.
            </p>
            <div className="architecture-features">
              <div className="feature-card">
                <div className="feature-icon">🏗️</div>
                <h3 className="highlight-blue">High-Level Architecture</h3>
                <p>Comprehensive system design and planning</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔗</div>
                <h3 className="highlight-cyan">System Integration</h3>
                <p>Seamless integration with existing systems</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3 className="highlight-red">Network Infrastructure</h3>
                <p>Robust and secure network architecture</p>
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
                  src="/images/Business and Systems Integration.png" 
                  alt="Business and Systems Integration" 
                  className="gallery-image"
                />
                <h4>Business & Systems Integration</h4>
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
            <p className="section-text">
              Comprehensive management tools for all government services including financial 
              management, asset tracking, and digital transformation initiatives.
            </p>
            <div className="services-features">
              <div className="feature-highlight">Financial Management</div>
              <div className="feature-highlight">Asset Tracking</div>
              <div className="feature-highlight">Budget Planning</div>
              <div className="feature-highlight">Digital Transformation</div>
              <div className="feature-highlight">Comprehensive Reporting</div>
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
                  alt="Budgeting System" 
                  className="gallery-image"
                />
                <h4>Budgeting System</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Digitalisation.png" 
                  alt="Digitalisation" 
                  className="gallery-image"
                />
                <h4>Digitalisation</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Reports.png" 
                  alt="Reports and Analytics" 
                  className="gallery-image"
                />
                <h4>Reports & Analytics</h4>
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
            <p className="section-text">
              Advanced fleet management and emergency response systems to ensure efficient 
              service delivery and rapid response to emergencies.
            </p>
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
            <p className="section-text">
              Advanced biometric security systems and health card solutions to ensure secure 
              access and identity verification for government services.
            </p>
            <div className="biometrics-features">
              <div className="feature-highlight">Biometric Authentication</div>
              <div className="feature-highlight">Universal Health Cards</div>
              <div className="feature-highlight">Secure Access Control</div>
              <div className="feature-highlight">Identity Verification</div>
            </div>
          </div>
          <div className="image-content">
            <div className="biometrics-gallery">
              <div className="gallery-item">
                <img 
                  src="/images/Biometrics.png" 
                  alt="Biometric Security System" 
                  className="gallery-image"
                />
                <h4>Biometric Security</h4>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/Universal health card.png" 
                  alt="Universal Health Card" 
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
            <p className="section-text">
              Our comprehensive development and implementation approach ensures successful 
              project delivery with co-created solutions and detailed implementation schedules.
            </p>
            <div className="development-features">
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3 className="highlight-blue">Co-Created Development</h3>
                <p>Collaborative product development approach</p>
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
                  alt="Co-Created Product Development" 
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
            <p className="section-text">
              Robust connectivity solutions and expert consulting services to ensure reliable 
              infrastructure and seamless communication across all government departments.
            </p>
            <div className="connectivity-features">
              <div className="feature-highlight">Advanced Connectivity</div>
              <div className="feature-highlight">Expert Consulting</div>
              <div className="feature-highlight">Infrastructure Support</div>
              <div className="feature-highlight">Network Optimization</div>
            </div>
          </div>
          <div className="image-content">
            <div className="connectivity-gallery">
              <div className="gallery-item">
                <img 
                  src="/images/Connectivity.png" 
                  alt="Connectivity Solutions" 
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
