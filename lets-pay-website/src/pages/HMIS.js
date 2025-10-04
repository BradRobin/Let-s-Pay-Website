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
            <div className="info-block">
              <p className="intro-text">
                <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> provides comprehensive Hospital Management Information Systems that revolutionize 
                healthcare delivery through integrated technology solutions. Our HMIS platform ensures 
                seamless patient care, efficient resource management, real-time data analytics, 
                and radiology module support with diagnostic imaging workflows, MRI and X-ray equipment management, 
                system-wide integration, equipment utilization tracking, and leased asset management for optimal ROI.
              </p>
              <p className="highlight-text">
                <span className="highlight-cyan">One Citizen, One Card, One Record</span> - All Electronic Health Records (EHRs) 
                including patient demographics, progress notes, medications, vital signs, medical history, 
                immunizations, lab data, and radiology reports are available in all hospitals across the county, 
                ensuring continuity of care and improved patient outcomes.
              </p>
            </div>
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
            <div className="info-block">
              <p className="section-text">
                Our ambition is to improve health care for all of our people, but we understand 
                that we can't put a level 6 public hospital in every village. We believe that 
                citizens, in every part of the country, should have access to basic healthcare. 
                There are various strategies to do so, and one of those strategies is telemedicine.
              </p>
            </div>
            <div className="vision-features">
              <div className="scrolling-container">
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
                {/* Duplicate for seamless loop */}
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
            <div className="info-block">
              <p className="section-text">
                <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> HMIS provides comprehensive healthcare management solutions with advanced 
                features for patient care, resource management, and data analytics.
              </p>
            </div>
            <div className="hmis-features">
              <div className="scrolling-container">
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
                {/* Duplicate for seamless loop */}
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
              <div className="scrolling-container">
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
                {/* Duplicate for seamless loop */}
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
          </div>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/G2C App.png" 
                alt="Let's Pay Mobile Healthcare App - Mobile Financial Services Interface with Unified Access to Money Transfer, Payments, Household Expenses, Financial Services, P2P Payments, Shopping, Water, Fuel, Mobile Money, Transport, Banking, Community Services, and Personal Services for Healthcare Management" 
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
              <div className="scrolling-container">
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
                {/* Duplicate for seamless loop */}
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
            <h2 className="section-title">Integrated Health Care Information Management Solution</h2>
            <p className="section-text">
              Comprehensive healthcare ecosystem featuring electronic medical records, business intelligence, 
              cloud services, universal health cards, lab machine integration, queue management, biometric 
              identification, digital claims processing, speech-to-text, smart cards, and telemedicine solutions 
              with 15-minute throughput time for efficient healthcare delivery.
            </p>
            <div className="processing-features">
              <div className="processing-feature">
                <div className="feature-icon">🩺</div>
                <h4 className="highlight-blue">Electronic Medical Records</h4>
                <p>Digital patient records and medical history management</p>
              </div>
              <div className="processing-feature">
                <div className="feature-icon">📱</div>
                <h4 className="highlight-cyan">Telemedicine Solutions</h4>
                <p>Remote healthcare delivery and consultation services</p>
              </div>
              <div className="processing-feature">
                <div className="feature-icon">⏱️</div>
                <h4 className="highlight-red">15-Minute Throughput</h4>
                <p>Efficient patient processing and care delivery</p>
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
                src="/images/Integrated Health Care Information Management Solution.png" 
                alt="Let's Pay Integrated Health Care Information Management Solution - Comprehensive Healthcare Ecosystem with Electronic Medical Records, Business Intelligence, Cloud Services, Universal Health Card, Lab Machine Integration, Queue Management, Biometric Identification, Digital Claims Processing, Speech to Text, Smart Card, Telemedicine, and 15-Minute Throughput Time" 
                className="section-image"
              />
              <h3>Integrated Health Care Information Management Solution</h3>
              <p>Comprehensive Healthcare Ecosystem with Telemedicine</p>
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
              All modules of our system are integrated, eliminating data redundancy and offering faster data access. 
              Our Theater module tracks all surgeries that take place in the hospital, helping in scheduling the theatres, 
              surgery teams, records all surgery details and all checklists associated with the surgery for theatre scheduling, 
              surgical team coordination, procedure documentation, checklist automation, and MIS reporting. Our Universal Health Card 
              initiative facilitates digital health records that can be accessed from any facilities across the county, ensuring 
              healthcare is a fundamental human right with patient mobility, healthcare interoperability, and streamlined service 
              delivery for data-driven planning and public health accountability. Our radiology module 
              supports diagnostic imaging workflows with MRI and X-ray equipment management, system-wide integration, 
              equipment utilization tracking, leased asset management, and ROI optimization to streamline imaging workflows, 
              maximize equipment efficiency, and integrate radiology data seamlessly with patient records and financial systems.
            </p>
            <div className="modules-grid">
              <div className="module-card">
                <img src="/images/Outpatient.png" alt="Let's Pay Outpatient Module - Efficient Outpatient Care Management with Patient Intake, Queue Coordination, Billing, Recordkeeping, System-Wide Integration, and Faster Access to Patient Records and Billing" className="module-image" />
                <div className="module-caption">Outpatient</div>
              </div>
              <div className="module-card">
                <img src="/images/Inpatient.png" alt="Let's Pay Inpatient Module - Integrated Healthcare System with Doctor, Nurse, and Patient Care Workflow, Eliminating Data Redundancy and Offering Faster Data Access for Clinical and Administrative Efficiency" className="module-image" />
                <div className="module-caption">Inpatient</div>
              </div>
              <div className="module-card">
                <img src="/images/Medical Records.png" alt="Let's Pay Medical Records Module - Digital Patient Documentation with Terminal Digit Numbering, Discharge Notes, Medical Clinical Notes, Diagnosis Details, Medical Coding for Outpatient and Inpatient Services, and Statistical Reports Generation" className="module-image" />
                <div className="module-caption">Medical Records</div>
              </div>
              <div className="module-card">
                <img src="/images/Pharmacy.png" alt="Let's Pay Pharmacy Module - Pharmaceutical Inventory Control, Medication Management, Loss Prevention, System-Wide Integration, Faster Data Access, and Stock Reconciliation for Hospitals, Clinics, and Retail Pharmacies" className="module-image" />
                <div className="module-caption">Pharmacy</div>
              </div>
              <div className="module-card">
                <img src="/images/Pathology.png" alt="Let's Pay Pathology Module - Laboratory Operations Support with Integrated Data Access, Real-Time Test Results, Billing and Patient Records, System-Wide Integration, and Financial Oversight for Precision and Traceability" className="module-image" />
                <div className="module-caption">Pathology</div>
              </div>
              <div className="module-card">
                <img src="/images/Radiology.png" alt="Let's Pay Radiology Module - Diagnostic Imaging Workflows with MRI and X-ray Equipment Management, System-Wide Integration, Equipment Utilization Tracking, Leased Asset Management, and ROI Optimization for Healthcare Facilities" className="module-image" />
                <div className="module-caption">Radiology</div>
              </div>
              <div className="module-card">
                <img src="/images/Nursing.png" alt="Let's Pay Nursing Module - Efficient Medical Personnel Management with System-Wide Integration, Faster Data Access for Clinical Decision-Making, Quick Response and Streamlined Workflows for Patient Care Coordination" className="module-image" />
                <div className="module-caption">Nursing</div>
              </div>
              <div className="module-card">
                <img src="/images/Theater.png" alt="Let's Pay Theater Module - Surgical Operations Management with Two Surgeons in Green Scrubs, Operating Table with Patient, Overhead Surgical Light, Medical Equipment, Theatre Scheduling, Surgery Team Coordination, Procedure Documentation, Checklist Automation, and MIS Reporting for Hospital Surgical Workflows" className="module-image" />
                <div className="module-caption">Theater</div>
              </div>
              <div className="module-card">
                <img src="/images/Inventory management.png" alt="Let's Pay Inventory Management Module - Healthcare and Pharmaceutical Inventory Control with Stock Issues, Returns, Conversions, Registers, Automatic Re-ordering, Adjustments, Stock Taking, Batch Tracking, and Expiry Date Monitoring" className="module-image" />
                <div className="module-caption">Inventory Management</div>
              </div>
              <div className="module-card">
                <img src="/images/Medical engineering.png" alt="Let's Pay Medical Engineering Module - Healthcare Equipment Maintenance and Servicing with Service Call Booking Interface, Corrective Maintenance Tracking, Preventive Maintenance Scheduling by Department, and Operational Accountability for Clinical Reliability" className="module-image" />
                <div className="module-caption">Medical Engineering</div>
              </div>
              <div className="module-card">
                <img src="/images/Biometrics.png" alt="Biometrics" className="module-image" />
                <div className="module-caption">Biometrics</div>
              </div>
              <div className="module-card">
                <img src="/images/Universal Health Card.png" alt="Let's Pay Universal Health Card - Health Access Card Initiative with Hand Holding Sample Card, Mr. Alex Otieno Details, Digital Health Records, Patient Mobility, Healthcare Interoperability, and Civic Tech Healthcare Vision for Universal Healthcare Access" className="module-image" />
                <div className="module-caption">Universal Health Card</div>
              </div>
              <div className="module-card">
                <img src="/images/Cafeteria.png" alt="Let's Pay Cafeteria Management System - Automated Meal Order Processing, Billing & Payment, Food Waste Monitoring, and Inventory Management for Enhanced Customer Experience" className="module-image" />
                <div className="module-caption">Cafeteria</div>
              </div>
              <div className="module-card">
                <img src="/images/Guest house.png" alt="Let's Pay Guest House Module - Accommodation Management for Patient Families with Automated Billing, Check-in/Check-out Processes, and Hospitality Services" className="module-image" />
                <div className="module-caption">Guest House</div>
              </div>
              <div className="module-card">
                <img src="/images/Housekeeping.png" alt="Let's Pay Housekeeping Module - Healthcare Facility Maintenance with Patient Room Preparation, Floor Cleaning, Furniture Dusting, Fixture Maintenance, and Comprehensive Hygiene Management" className="module-image" />
                <div className="module-caption">Housekeeping</div>
              </div>
              <div className="module-card">
                <img src="/images/solutions for healthcare.png" alt="Solutions for Healthcare" className="module-image" />
                <div className="module-caption">Solutions for Healthcare</div>
              </div>
              <div className="module-card">
                <img src="/images/Procurement.png" alt="Let's Pay Procurement Module - Complete Purchase Cycle Automation from Purchase Requisition to Goods Receipt, Ordering Process Automation, Integration with Budgeting, Inventory, Asset Management, and Accounts Payable Modules" className="module-image" />
                <div className="module-caption">Procurement</div>
              </div>
              <div className="module-card">
                <img src="/images/Modules.png" alt="Let's Pay Modular Architecture - Eight Core Healthcare Modules Including Outpatients, Inpatients, Inventory, Procurement, Pathology, Radiology, Human Resource, and Financial Accounting with Integrated Data Access and Eliminated Redundancy" className="module-image" />
                <div className="module-caption">Modular Architecture</div>
              </div>
            </div>
            <div className="modules-features">
              <div className="feature-highlight">Universal Health Access</div>
              <div className="feature-highlight">Digital Health Records</div>
              <div className="feature-highlight">Patient Mobility</div>
              <div className="feature-highlight">Healthcare Interoperability</div>
              <div className="feature-highlight">Civic Tech Healthcare</div>
              <div className="feature-highlight">Health Equity</div>
              <div className="feature-highlight">Theater Operations</div>
              <div className="feature-highlight">Surgical Scheduling</div>
              <div className="feature-highlight">Team Coordination</div>
              <div className="feature-highlight">Procedure Documentation</div>
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
                alt="Let's Pay Happy Healthcare Customers - Institutional Trust and Customer Satisfaction Across Government, Healthcare, and Educational Organizations Including Ministry of Youth Sports Arts Recreation Zimbabwe, Amref Health Africa, Evans Sunrise Medical Centre" 
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
