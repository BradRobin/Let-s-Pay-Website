import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      {/* Privacy Policy Header */}
      <section className="privacy-hero-section">
        <div className="flow-container">
          <div className="text-content">
            <h1 className="section-title">Privacy <span className="highlight-blue">Policy</span></h1>
            <div className="info-block">
              <p className="privacy-subtitle">
                Last updated: December 4, 2024
              </p>
              <p className="intro-text">
                <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> Limited is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="privacy-content-section">
        <div className="flow-container">
          <div className="privacy-content">
            
            {/* Introduction */}
            <div className="privacy-section">
              <h2 className="section-title-sm">1. Introduction</h2>
              <div className="info-block">
                <p>
                  At <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> Limited, we understand the importance of privacy and are committed to maintaining the confidentiality of your personal information. This Privacy Policy outlines our data handling practices in compliance with applicable privacy laws including the Kenya Data Protection Act, 2019, EU GDPR, and other relevant regulations.
                </p>
              </div>
            </div>

            {/* Information Collection */}
            <div className="privacy-section">
              <h2 className="section-title-sm">2. Information We Collect</h2>
              <div className="info-block">
                <h3 className="highlight-blue">2.1 Personal Information</h3>
                <p>We may collect the following types of personal information:</p>
                <ul className="privacy-list">
                  <li>Contact information (name, email address, phone number, physical address)</li>
                  <li>Business information (company name, job title, department)</li>
                  <li>Account credentials (username, password when registering)</li>
                  <li>Payment information (processed securely through certified payment processors)</li>
                  <li>Technical information (IP address, browser type, device information)</li>
                  <li>Usage data (pages visited, time spent, interactions with our platform)</li>
                </ul>

                <h3 className="highlight-blue">2.2 Business Data</h3>
                <p>In the course of providing our financial management services, we may process:</p>
                <ul className="privacy-list">
                  <li>Government and institutional financial transactions</li>
                  <li>Revenue collection data</li>
                  <li>Financial reporting information</li>
                  <li>Transaction logs and audit trails</li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="privacy-section">
              <h2 className="section-title-sm">3. How We Use Your Information</h2>
              <div className="info-block">
                <p>We use your personal information for the following purposes:</p>
                <ul className="privacy-list">
                  <li>Providing and maintaining our financial management platform services</li>
                  <li>Processing payments and managing financial transactions</li>
                  <li>Communicating with you about our services and updates</li>
                  <li>Providing customer support and technical assistance</li>
                  <li>Complying with legal obligations and regulatory requirements</li>
                  <li>Improving our services and developing new features</li>
                  <li>Preventing fraud and ensuring platform security</li>
                  <li>Generating reports and analytics for our clients</li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="privacy-section">
              <h2 className="section-title-sm">4. Information Sharing and Disclosure</h2>
              <div className="info-block">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
                
                <h3 className="highlight-blue">4.1 Service Partners</h3>
                <ul className="privacy-list">
                  <li>Certified payment processors for secure transaction handling</li>
                  <li>Cloud service providers for secure data storage</li>
                  <li>IT service providers for platform maintenance and support</li>
                </ul>

                <h3 className="highlight-blue">4.2 Legal Requirements</h3>
                <ul className="privacy-list">
                  <li>When required by law or legal process</li>
                  <li>To comply with government regulations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>In response to valid subpoenas or court orders</li>
                </ul>

                <h3 className="highlight-blue">4.3 Client Organizations</h3>
                <p>We may share relevant information with client organizations (government departments, financial institutions) as necessary to provide our services, under strict contractual agreements and data protection measures.</p>
              </div>
            </div>

            {/* Data Security */}
            <div className="privacy-section">
              <h2 className="section-title-sm">5. Data Security</h2>
              <div className="info-block">
                <p>We implement comprehensive security measures to protect your information:</p>
                
                <div className="security-grid">
                  <div className="security-item">
                    <div className="security-icon">🔐</div>
                    <h4>Encryption</h4>
                    <p>Data encrypted in transit and at rest using industry-standard protocols</p>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">🛡️</div>
                    <h4>Access Controls</h4>
                    <p>Role-based access controls and multi-factor authentication</p>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">🔍</div>
                    <h4>Monitoring</h4>
                    <p>Continuous security monitoring and threat detection</p>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">📋</div>
                    <h4>Compliance</h4>
                    <p>Regular audits and compliance with international standards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="privacy-section">
              <h2 className="section-title-sm">6. Data Retention</h2>
              <div className="info-block">
                <p>We retain personal information for the period necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law:</p>
                <ul className="privacy-list">
                  <li>Account information: Retained for the duration of service provision plus 7 years</li>
                  <li>Transaction data: Retained for regulatory compliance periods (typically 7-10 years)</li>
                  <li>Technical logs: Retained for 2 years for security and troubleshooting purposes</li>
                  <li>Marketing communications: Until you opt out or request deletion</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="privacy-section">
              <h2 className="section-title-sm">7. Your Rights and Choices</h2>
              <div className="info-block">
                <p>Depending on applicable law, you may have the following rights regarding your personal information:</p>
                
                <div className="rights-grid">
                  <div className="right-item">
                    <h4 className="highlight-blue">Access</h4>
                    <p>Request copies of your personal information and understand how it's used</p>
                  </div>
                  <div className="right-item">
                    <h4 className="highlight-cyan">Correction</h4>
                    <p>Request correction of inaccurate or incomplete information</p>
                  </div>
                  <div className="right-item">
                    <h4 className="highlight-red">Deletion</h4>
                    <p>Request deletion of your personal information under certain circumstances</p>
                  </div>
                  <div className="right-item">
                    <h4 className="highlight-blue">Portability</h4>
                    <p>Request transfer of your data to another service provider</p>
                  </div>
                  <div className="right-item">
                    <h4 className="highlight-cyan">Restriction</h4>
                    <p>Request limitation of processing your personal information</p>
                  </div>
                  <div className="right-item">
                    <h4 className="highlight-red">Objection</h4>
                    <p>Object to processing of your information for certain purposes</p>
                  </div>
                </div>

                <p>To exercise these rights, please contact us using the information provided in Section 8.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="privacy-section">
              <h2 className="section-title-sm">8. Contact Information</h2>
              <div className="info-block">
                <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
                
                <div className="contact-info">
                  <div className="contact-item">
                    <h4 className="highlight-blue">Company</h4>
                    <p><span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span> Limited</p>
                  </div>
                  
                  <div className="contact-item">
                    <h4 className="highlight-cyan">Address</h4>
                    <p>P.O. BOX 64690-0060<br />Nairobi, Kenya</p>
                  </div>
                  
                  <div className="contact-item">
                    <h4 className="highlight-red">Phone</h4>
                    <p>+254 722 520 906<br />+254 720 22 66 66</p>
                  </div>
                  
                  <div className="contact-item">
                    <h4 className="highlight-blue">Email</h4>
                    <p>btheuri@letspayltd.com</p>
                  </div>

                  <div className="contact-item">
                    <h4 className="highlight-cyan">Data Protection Officer</h4>
                    <p>Email: privacy@letspayltd.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="privacy-section">
              <h2 className="section-title-sm">9. Updates to This Privacy Policy</h2>
              <div className="info-block">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
                  We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. 
                  Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Compliance and Legal */}
            <div className="privacy-section">
              <h2 className="section-title-sm">10. Compliance and Legal Basis</h2>
              <div className="info-block">
                <p>This Privacy Policy complies with:</p>
                <ul className="privacy-list">
                  <li>Kenya Data Protection Act, 2019</li>
                  <li>European Union General Data Protection Regulation (GDPR)</li>
                  <li>International financial service regulations</li>
                  <li>Industry best practices for data security</li>
                </ul>
                
                <p>Our legal basis for processing personal information includes:</p>
                <ul className="privacy-list">
                  <li>Contract performance (providing agreed services)</li>
                  <li>Legal compliance (regulatory and tax obligations)</li>
                  <li>Legitimate interest (business operations and improvement)</li>
                  <li>Consent (when applicable for marketing communications)</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
