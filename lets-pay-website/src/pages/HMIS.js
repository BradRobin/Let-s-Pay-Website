import React from 'react';
import './HMIS.css';

const HMIS = () => {
  return (
    <div className="hmis">
      {/* First Section - Intro text left, image right */}
      <section className="flow-section intro-section">
        <div className="flow-container">
          <div className="text-content">
            <h1 className="section-title">Hospital Management Information Systems (HMIS)</h1>
            <p className="intro-text">
              <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> provides comprehensive Hospital Management Information Systems that revolutionize 
              healthcare delivery through integrated technology solutions. Our HMIS platform ensures 
              seamless patient care, efficient resource management, and real-time data analytics 
              for better healthcare outcomes.
            </p>
            <p className="highlight-text">
              <span className="highlight-cyan">One Citizen, One Card, One Record</span> - All Medical Records 
              are available in all hospitals across the county, ensuring continuity of care and 
              improved patient outcomes.
            </p>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Team.png" 
                alt="Let'spay HMIS Team" 
                className="section-image"
              />
              <h3>HMIS Team</h3>
              <p>Healthcare Technology Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Healthcare Vision text left, image right */}
      <section className="flow-section vision-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Our Healthcare Vision</h2>
            <p className="section-text">
              Our ambition is to improve health care for all of our people, but we understand 
              that we can't put a level 6 public hospital in every village. We believe that 
              citizens, in every part of the country, should have access to basic healthcare. 
              There are various strategies to do so, and one of those strategies is telemedicine.
            </p>
            <div className="vision-features">
              <div className="vision-feature">
                <div className="feature-icon">🏥</div>
                <h4 className="highlight-blue">Universal Healthcare Access</h4>
                <p>Ensuring healthcare reaches every citizen</p>
              </div>
              <div className="vision-feature">
                <div className="feature-icon">📱</div>
                <h4 className="highlight-cyan">Telemedicine Solutions</h4>
                <p>Remote healthcare delivery through technology</p>
              </div>
              <div className="vision-feature">
                <div className="feature-icon">🌐</div>
                <h4 className="highlight-red">Connected Healthcare</h4>
                <p>Integrated healthcare across all levels</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Inspiring and Innovative solution.png" 
                alt="Healthcare Innovation Solutions" 
                className="section-image"
              />
              <h3>Healthcare Innovation</h3>
              <p>Inspiring & Innovative Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - HMIS Features text left, image right */}
      <section className="flow-section features-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">HMIS Core Features</h2>
            <p className="section-text">
              <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> HMIS provides comprehensive healthcare management solutions with advanced 
              features for patient care, resource management, and data analytics.
            </p>
            <div className="hmis-features">
              <div className="feature-card">
                <div className="feature-icon">👤</div>
                <h3 className="highlight-blue">Patient Management</h3>
                <p>Complete patient records, medical history, and treatment tracking</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💳</div>
                <h3 className="highlight-cyan">One Citizen, One Card</h3>
                <p>Unified patient identification across all healthcare facilities</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3 className="highlight-red">Real-Time Analytics</h3>
                <p>Advanced reporting and data analytics for better decision making</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3 className="highlight-blue">Secure & Transparent</h3>
                <p>Robust security with complete audit trails and compliance</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/solution.png" 
                alt="HMIS Technology Solutions" 
                className="section-image"
              />
              <h3>Technology Solutions</h3>
              <p>AI & Business Intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Mobile Healthcare text left, image right */}
      <section className="flow-section mobile-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Mobile Healthcare Solutions</h2>
            <p className="section-text">
              <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> Mobile application enables multi-model (card, internet/mobile) cross-border 
              healthcare services. This comprises Mobile Wallet, mPOS, Mobile Banking, and Gift 
              Voucher, enabling simplified P2P, P2G, G2G, and B2G mobile payments for healthcare services.
            </p>
            <div className="mobile-features">
              <div className="mobile-feature">
                <div className="feature-icon">📱</div>
                <h4 className="highlight-blue">Mobile Wallet</h4>
                <p>Secure mobile payment for healthcare services</p>
              </div>
              <div className="mobile-feature">
                <div className="feature-icon">💳</div>
                <h4 className="highlight-cyan">mPOS Integration</h4>
                <p>Mobile point of sale for healthcare facilities</p>
              </div>
              <div className="mobile-feature">
                <div className="feature-icon">🏦</div>
                <h4 className="highlight-red">Mobile Banking</h4>
                <p>Complete banking solutions for healthcare payments</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/G2C App.png" 
                alt="Mobile Healthcare App" 
                className="section-image"
              />
              <h3>Mobile Healthcare App</h3>
              <p>One-stop Healthcare Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Rugged Handheld Solutions text left, image right */}
      <section className="flow-section handheld-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Rugged Handheld PDA Solutions</h2>
            <p className="section-text">
              Advanced rugged handheld devices designed specifically for healthcare environments, 
              enabling real-time data collection, patient management, and seamless integration 
              with our HMIS platform.
            </p>
            <div className="handheld-specs">
              <div className="spec-item">
                <div className="spec-icon">📱</div>
                <h4 className="highlight-blue">Android 8.1 System</h4>
                <p>Latest Android operating system for optimal performance</p>
              </div>
              <div className="spec-item">
                <div className="spec-icon">📺</div>
                <h4 className="highlight-cyan">5.5-inch Captive Touch Screen</h4>
                <p>High-resolution display for clear data visualization</p>
              </div>
              <div className="spec-item">
                <div className="spec-icon">📶</div>
                <h4 className="highlight-red">Bluetooth 4.0/WiFi/3G/4G/GPS</h4>
                <p>Comprehensive connectivity options</p>
              </div>
              <div className="spec-item">
                <div className="spec-icon">📊</div>
                <h4 className="highlight-blue">1D/2D Barcode Scanner</h4>
                <p>LF/HF/UHF RFID scanning capabilities</p>
              </div>
              <div className="spec-item">
                <div className="spec-icon">🔋</div>
                <h4 className="highlight-cyan">4800mAh Battery</h4>
                <p>Over 10 hours of continuous operation</p>
              </div>
              <div className="spec-item">
                <div className="spec-icon">💳</div>
                <h4 className="highlight-red">QR Code Payment</h4>
                <p>Mobile Application enables easy cashless QR Payment</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Realtime Payment Solution.png" 
                alt="Rugged Handheld PDA for Healthcare" 
                className="section-image"
              />
              <h3>Rugged Handheld PDA</h3>
              <p>Real-Time Healthcare Data Collection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sixth Section - Real-Time Processing text left, image right */}
      <section className="flow-section processing-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Real-Time Processing & Security</h2>
            <p className="section-text">
              All payment transactions are transmitted to the Headquarters in real time. GPS 
              restricts the gadget's movement to unauthorized areas, ensuring secure and 
              compliant healthcare operations.
            </p>
            <div className="processing-features">
              <div className="processing-feature">
                <div className="feature-icon">⚡</div>
                <h4 className="highlight-blue">Real-Time Transmission</h4>
                <p>Instant data transmission to headquarters</p>
              </div>
              <div className="processing-feature">
                <div className="feature-icon">📍</div>
                <h4 className="highlight-cyan">GPS Location Tracking</h4>
                <p>Restricted movement to authorized areas only</p>
              </div>
              <div className="processing-feature">
                <div className="feature-icon">🔒</div>
                <h4 className="highlight-red">Secure Operations</h4>
                <p>Comprehensive security and compliance monitoring</p>
              </div>
            </div>
            <div className="highlight-box">
              <h4 className="highlight-blue">REAL TIME OFF-SITE PAYMENT OF LICENSES</h4>
              <p>The receipt & the license issued shall have a QR code for verification and tracking.</p>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Integrated platform.png" 
                alt="Real-Time Processing Platform" 
                className="section-image"
              />
              <h3>Integrated Platform</h3>
              <p>Real-Time Healthcare Processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Modules Section - Image grid */}
      <section className="flow-section modules-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Hospital Modules</h2>
            <p className="section-text">
              Comprehensive modules covering end-to-end hospital operations and clinical workflows.
            </p>
            <div className="modules-grid">
              <div className="module-card">
                <img src="/images/Outpatient.png" alt="Outpatient" className="module-image" />
                <div className="module-caption">Outpatient</div>
              </div>
              <div className="module-card">
                <img src="/images/inpatient.png" alt="Inpatient" className="module-image" />
                <div className="module-caption">Inpatient</div>
              </div>
              <div className="module-card">
                <img src="/images/Medical records.png" alt="Medical Records" className="module-image" />
                <div className="module-caption">Medical Records</div>
              </div>
              <div className="module-card">
                <img src="/images/Pharmacy.png" alt="Pharmacy" className="module-image" />
                <div className="module-caption">Pharmacy</div>
              </div>
              <div className="module-card">
                <img src="/images/Pathology.png" alt="Pathology" className="module-image" />
                <div className="module-caption">Pathology</div>
              </div>
              <div className="module-card">
                <img src="/images/Radiology.png" alt="Radiology" className="module-image" />
                <div className="module-caption">Radiology</div>
              </div>
              <div className="module-card">
                <img src="/images/Nursing.png" alt="Nursing" className="module-image" />
                <div className="module-caption">Nursing</div>
              </div>
              <div className="module-card">
                <img src="/images/Theatre.png" alt="Theatre" className="module-image" />
                <div className="module-caption">Theatre</div>
              </div>
              <div className="module-card">
                <img src="/images/Inventory management.png" alt="Inventory Management" className="module-image" />
                <div className="module-caption">Inventory Management</div>
              </div>
              <div className="module-card">
                <img src="/images/Medical engineering.png" alt="Medical Engineering" className="module-image" />
                <div className="module-caption">Medical Engineering</div>
              </div>
              <div className="module-card">
                <img src="/images/Biometrics.png" alt="Biometrics" className="module-image" />
                <div className="module-caption">Biometrics</div>
              </div>
              <div className="module-card">
                <img src="/images/Universal health card.png" alt="Universal Health Card" className="module-image" />
                <div className="module-caption">Universal Health Card</div>
              </div>
              <div className="module-card">
                <img src="/images/Cafeteria.png" alt="Cafeteria" className="module-image" />
                <div className="module-caption">Cafeteria</div>
              </div>
              <div className="module-card">
                <img src="/images/Guest house.png" alt="Guest House" className="module-image" />
                <div className="module-caption">Guest House</div>
              </div>
              <div className="module-card">
                <img src="/images/solutions for healthcare.png" alt="Solutions for Healthcare" className="module-image" />
                <div className="module-caption">Solutions for Healthcare</div>
              </div>
              <div className="module-card">
                <img src="/images/Modules.png" alt="Modular Architecture" className="module-image" />
                <div className="module-caption">Modular Architecture</div>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/solutions for healthcare.png" 
                alt="Comprehensive Healthcare Solutions" 
                className="section-image"
              />
              <h3>Comprehensive Modules</h3>
              <p>Integrated clinical and administrative systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh Section - Healthcare Benefits text left, image right */}
      <section className="flow-section benefits-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Healthcare Benefits</h2>
            <p className="section-text">
              <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> HMIS provides comprehensive & emerging technology-based products for the Health domain, 
              offering software solutions to address end-to-end business requirements and meet the 
              needs of healthcare customers.
            </p>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🏥</div>
                <h4 className="highlight-blue">Comprehensive Healthcare</h4>
                <p>End-to-end healthcare management solutions</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💡</div>
                <h4 className="highlight-cyan">Emerging Technology</h4>
                <p>Latest technology-based healthcare products</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📊</div>
                <h4 className="highlight-red">1000+ Man Years Experience</h4>
                <p>Extensive experience in healthcare technology</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🔧</div>
                <h4 className="highlight-blue">Custom Solutions</h4>
                <p>Tailored solutions for specific healthcare needs</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Happy customers.png" 
                alt="Happy Healthcare Customers" 
                className="section-image"
              />
              <h3>Happy Healthcare Customers</h3>
              <p>24/7 Healthcare Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HMIS;
