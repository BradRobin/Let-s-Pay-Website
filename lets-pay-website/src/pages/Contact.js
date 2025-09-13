import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      {/* First Section - Contact Information text left, placeholder map right */}
      <section className="flow-section contact-info-section">
        <div className="flow-container">
          <div className="text-content">
            <h1 className="section-title">Contact <span className="highlight-blue">Information</span></h1>
            <div className="contact-info-block">
              <div className="contact-header">
                <h2 className="highlight-cyan">Let'sPay Limited</h2>
                <p className="contact-subtitle">Get in touch with our team for inquiries, support, or partnership opportunities</p>
              </div>
              
              <div className="contact-details-grid">
                <div className="contact-detail-card">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3 className="highlight-blue">Address</h3>
                    <p>P.O. BOX 64690-0060<br />Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="contact-detail-card">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3 className="highlight-cyan">Phone</h3>
                    <p>+254 722 520 906<br />+254 720 22 66 66</p>
                  </div>
                </div>
                
                <div className="contact-detail-card">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h3 className="highlight-red">Email</h3>
                    <p>btheuri@letspayltd.com</p>
                  </div>
                </div>
                
                <div className="contact-detail-card">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-text">
                    <h3 className="highlight-blue">Website</h3>
                    <p>www.letspayltd.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">🗺️</div>
                <h3>Nairobi, Kenya</h3>
                <p>Our Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Business Hours text right, placeholder image left */}
      <section className="flow-section business-hours-section">
        <div className="flow-container">
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">⏰</div>
                <h3>Business Hours</h3>
                <p>Always Available</p>
              </div>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">Business <span className="highlight-cyan">Hours</span></h2>
            <div className="business-hours-block">
              <div className="hours-grid">
                <div className="hours-card">
                  <div className="day-period highlight-blue">Monday - Friday</div>
                  <div className="time-range">8:00 AM - 6:00 PM (EAT)</div>
                </div>
                <div className="hours-card">
                  <div className="day-period highlight-cyan">Saturday</div>
                  <div className="time-range">9:00 AM - 2:00 PM (EAT)</div>
                </div>
                <div className="hours-card">
                  <div className="day-period highlight-red">Sunday</div>
                  <div className="time-range">Closed</div>
                </div>
              </div>
              
              <div className="support-highlight">
                <div className="support-icon">🛠️</div>
                <div className="support-content">
                  <h3 className="highlight-red">24/7 Technical Support</h3>
                  <p>Our technical support team is available round the clock for critical issues and system maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Contact Form text left, placeholder image right */}
      <section className="flow-section contact-form-section">
        <div className="flow-container">
          <div className="text-content">
            <h2 className="section-title">Send us a <span className="highlight-red">Message</span></h2>
            <form className="contact-form" aria-label="Contact form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    aria-required="true"
                    aria-describedby="name-error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    aria-required="true"
                    aria-describedby="email-error"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company/Organization</label>
                  <input type="text" id="company" name="company" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" required aria-required="true">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  aria-required="true"
                  aria-describedby="message-help"
                ></textarea>
                <div id="message-help" className="form-help">Please provide details about your inquiry</div>
              </div>
              
              <button type="submit" className="submit-btn" aria-describedby="submit-help">
                Send Message
              </button>
              <div id="submit-help" className="form-help">We'll respond within 24 hours</div>
            </form>
          </div>
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">💬</div>
                <h3>Get in Touch</h3>
                <p>We're Here to Help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Support Services text right, placeholder image left */}
      <section className="flow-section support-services-section">
        <div className="flow-container">
          <div className="image-content">
            <div className="placeholder-image">
              <div className="placeholder-content">
                <div className="placeholder-icon">🛠️</div>
                <h3>Support & Services</h3>
                <p>Comprehensive Help</p>
              </div>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">Support & <span className="highlight-blue">Services</span></h2>
            <div className="support-services-grid">
              <div className="support-service-card">
                <div className="service-icon">🛠️</div>
                <div className="service-content">
                  <h3 className="highlight-blue">Technical Support</h3>
                  <p>24/7 technical support for all our solutions and services</p>
                </div>
              </div>
              <div className="support-service-card">
                <div className="service-icon">📚</div>
                <div className="service-content">
                  <h3 className="highlight-cyan">Documentation</h3>
                  <p>Comprehensive documentation and user guides for all products</p>
                </div>
              </div>
              <div className="support-service-card">
                <div className="service-icon">🎓</div>
                <div className="service-content">
                  <h3 className="highlight-red">Training</h3>
                  <p>Training programs for your team on our systems and solutions</p>
                </div>
              </div>
              <div className="support-service-card">
                <div className="service-icon">🔧</div>
                <div className="service-content">
                  <h3 className="highlight-blue">Customization</h3>
                  <p>Custom development and system integration services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
