import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with our team for inquiries, support, or partnership opportunities
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-details">
              <h2>Let'sPay Limited</h2>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h3>Address</h3>
                  <p>P.O. BOX 64690-0060<br />Nairobi, Kenya</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>+254 722 520 906<br />+254 720 22 66 66</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>btheuri@letspayltd.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div className="contact-text">
                  <h3>Website</h3>
                  <p>www.letspayltd.com</p>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">8:00 AM - 6:00 PM (EAT)</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM - 2:00 PM (EAT)</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
              <div className="support-note">
                <p><strong>24/7 Support:</strong> Our technical support team is available round the clock for critical issues and system maintenance.</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company/Organization</label>
                <input type="text" id="company" name="company" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" required>
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
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        <div className="support-section">
          <h2>Support & Services</h2>
          <div className="support-grid">
            <div className="support-item">
              <div className="support-icon">🛠️</div>
              <h3>Technical Support</h3>
              <p>24/7 technical support for all our solutions and services</p>
            </div>
            <div className="support-item">
              <div className="support-icon">📚</div>
              <h3>Documentation</h3>
              <p>Comprehensive documentation and user guides for all products</p>
            </div>
            <div className="support-item">
              <div className="support-icon">🎓</div>
              <h3>Training</h3>
              <p>Training programs for your team on our systems and solutions</p>
            </div>
            <div className="support-item">
              <div className="support-icon">🔧</div>
              <h3>Customization</h3>
              <p>Custom development and system integration services</p>
            </div>
          </div>
        </div>

        <div className="partnership-section">
          <h2>Partnership Opportunities</h2>
          <div className="partnership-content">
            <p>
              We welcome partnerships with technology companies, system integrators, 
              and service providers who share our vision of digital transformation. 
              Join our global network of partners and help us deliver innovative 
              solutions to clients worldwide.
            </p>
            <div className="partnership-benefits">
              <h3>Partnership Benefits:</h3>
              <ul>
                <li>Access to our comprehensive technology portfolio</li>
                <li>Joint marketing and business development opportunities</li>
                <li>Technical training and certification programs</li>
                <li>Dedicated partner support and resources</li>
                <li>Competitive pricing and revenue sharing models</li>
              </ul>
            </div>
            <button className="partnership-btn">Become a Partner</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
