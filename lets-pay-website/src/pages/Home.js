import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import './Home.css';

// Animated counter that starts when scrolled into view
const AnimatedCounter = ({ to, duration = 1800 }) => {
  const [value, setValue] = useState(0);
  const nodeRef = React.useRef(null);
  const hasStartedRef = React.useRef(false);

  useEffect(() => {
    if (!nodeRef.current) return;
    const el = nodeRef.current;
    let rafId = 0;
    let observer;

    const startAnimation = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      const start = performance.now();
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = easeOutCubic(progress);
        setValue(Math.floor(eased * to));
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setValue(to);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    // If IntersectionObserver isn't supported, start immediately
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation();
              if (observer && el) observer.unobserve(el);
            }
          });
        },
        {
          threshold: 0.1,
          root: null,
          rootMargin: '0px 0px -15% 0px',
        }
      );
      observer.observe(el);
    } else {
      // Fallback
      startAnimation();
    }

    return () => {
      if (observer && el) observer.unobserve(el);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [to, duration]);

  return <span ref={nodeRef}>{value}</span>;
};

const Home = () => {
  const [tickAnimation, setTickAnimation] = useState(null);
  const [passwordAnimation, setPasswordAnimation] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Load animations dynamically from public directory
    fetch('/animations/Tick Animation.json')
      .then(response => response.json())
      .then(data => setTickAnimation(data))
      .catch(error => console.error('Error loading tick animation:', error));

    fetch('/animations/Password Authentication.json')
      .then(response => response.json())
      .then(data => setPasswordAnimation(data))
      .catch(error => console.error('Error loading password animation:', error));
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="home">
      {/* Hero Section - New Design */}
      <section className="hero-section reveal">
        <div className="hero-background">
          <div className="hero-grid"></div>
          <div className="hero-globe"></div>
        </div>
        <div className="hero-waves"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-line-1">Secure Payments.</span>
              <span className="hero-line-2"><span className="hero-global-word">Global</span> Reach.</span>
              <span className="hero-line-3">Mobile First.</span>
            </h1>
            <p className="hero-description">
              Powering transactions across continents with Tier One banking infrastructure and next-gen mobile technology.
            </p>
          </div>
          <div className="hero-bottom">
            <div className="hero-visual">
              <div className="logo-display">
                <img 
                  src="/images/letspay_logo-removebg-preview.png?v=2" 
                  alt="Let'spay Official Transparent Logo" 
                  className="home-logo-image"
                />
              </div>
            </div>
            <div className="hero-cta">
              <Link to="/about" className="cta-button cta-explore" aria-label="Explore">
                <span className="cta-text">Explore</span>
              </Link>
              <Link to="/contact" className="cta-button cta-contact" aria-label="Contact">
                <span className="cta-text">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Why Let'spay - Top Down Layout */}
      <section className="flow-section why-letspay-section reveal">
        <div className="flow-container">
          <h2 className="section-title">Why <span className="brand-name"><span className="brand-let">Let</span><span className="brand-apostrophe">'</span><span className="brand-s">s</span><span className="brand-pay">pay</span></span>?</h2>
          <div className="image-content">
            <div className="image-display">
              <div className="lottie-container">
                {passwordAnimation && (
                  <Lottie 
                    animationData={passwordAnimation}
                    loop={true}
                    autoplay={true}
                    className="lottie-animation"
                  />
                )}
              </div>
              <h3>Secure. Seamless. Convenient.</h3>
              <button className="info-toggle-btn" onClick={togglePopup}>
                <span className="toggle-text">Learn More</span>
                <span className="toggle-icon">▼</span>
              </button>
            </div>
          </div>
          <div className="text-content">
            <div className="why-letspay-content">
              <p className="why-letspay-intro">
                <span className="highlight-cyan">1000+ man-years of experience</span> across payment and enterprise domains
              </p>
              <p className="why-letspay-text">
                A pool of human minds with deep-rooted knowledge across multiple industry verticals. 
                Work with you end-to-end. Stay till the end to ensure you get the objectives fulfilled. 
                Hands-on approach. Secure Robust Platform. The platform is already used in Banks for Payment.
              </p>
              <div className="why-letspay-features">
                <div className="feature-item">
                  <h4>Proven Track Record</h4>
                  <p>Successfully implemented solutions across multiple industries</p>
                </div>
                <div className="feature-item">
                  <h4>End-to-End Support</h4>
                  <p>Complete implementation and ongoing maintenance</p>
                </div>
                <div className="feature-item">
                  <h4>Bank-Grade Security</h4>
                  <p>Platform already trusted by financial institutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <h3 className="popup-title">About Let'sPay Platform</h3>
            <div className="popup-body">
              <p>
                Let'sPay is a Web & Mobility based platform, targeted towards facilitating Government Departments to collect and manage revenue payments more seamlessly & conveniently. This is a holistic platform, which facilitate the collection of payments using Cash, Debit and credit Cards & Mobile Wallets and direct bank deposit from consumers and also supports other ERP modules like Human Resource Management, Electronic Document Management, Case Management, Fleet Management, Licenses, Property & Land Rates.
              </p>
              <p>
                Let'sPay is a real time system, with secure audit trials, automatic reports and self reconciling without human intervention. It is the most secure and customized system in Kenya. It is a tier one banking core system currently used by banks, financial institutions, insurances, governments across all the continents of the world. It has been used in Kenya with great success.
              </p>
            </div>
            <div className="popup-footer">
              <Link to="/why-us" className="popup-learn-more-btn" onClick={closePopup}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Third Section - Holistic Platform - Top Down Layout */}
      <section className="flow-section platform-section reveal">
        <div className="flow-container">
          <h2 className="section-title">Holistic Platform</h2>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/Holistic Payment Architecture.png" 
                alt="Holistic Payment Architecture" 
                className="section-image"
              />
            </div>
          </div>
          <div className="text-content">
            <div className="platform-content">
              <p className="intro-text">
                A comprehensive solution that integrates all aspects of financial management into a single, 
                unified platform designed for modern enterprises.
              </p>
              <div className="platform-features">
                <div className="feature-item">
                  <h4>Integrated Architecture</h4>
                  <p>Seamless integration across all financial modules</p>
                </div>
                <div className="feature-item">
                  <h4>Real-time Processing</h4>
                  <p>Instant transaction processing and reporting</p>
                </div>
                <div className="feature-item">
                  <h4>Scalable Infrastructure</h4>
                  <p>Built to grow with your business needs</p>
        </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Our Experience - Top Down Layout */}
      <section className="flow-section experience-section reveal">
        <div className="flow-container">
            <h2 className="section-title">Our Experience</h2>
            <div className="image-content">
              <div className="image-display">
                <img 
                src="/images/Team.png" 
                alt="Our Experience" 
                  className="section-image"
                />
            </div>
          </div>
          <div className="text-content">
            <div className="experience-content">
              <p className="intro-text">
                Decades of combined experience in financial technology, enterprise solutions, 
                and payment processing across diverse industry verticals.
              </p>
            <div className="experience-stats">
              <div className="stat-item">
                  <h3><AnimatedCounter to={935} duration={1800} /></h3>
                  <p>Letspay’s team brings together over 935 years of combined experience—earned across government, enterprise, and fintech innovation.</p>
              </div>
              <div className="stat-item">
                  <h3><AnimatedCounter to={50} duration={1400} />+</h3>
                  <p>Successful implementations</p>
              </div>
                <div className="stat-item">
                  <h3><AnimatedCounter to={15} duration={1200} />+</h3>
                  <p>Years in the industry</p>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Technology Features - Top Down Layout */}
      <section className="flow-section technology-section reveal">
        <div className="flow-container">
          <h2 className="section-title">Technology Features</h2>
            <div className="image-content">
              <div className="image-display">
                <img 
                src="/images/smart devices.png" 
                alt="Technology Features" 
                  className="section-image"
                />
              </div>
            </div>
            <div className="text-content">
            <div className="technology-content">
              <p className="intro-text">
                Cutting-edge technology stack built on modern frameworks and best practices 
                to deliver robust, scalable, and secure financial solutions.
              </p>
              <div className="tech-stack">
                <div className="tech-item">
                  <h4>Modern Frameworks</h4>
                  <p>React, Node.js, and cloud-native architecture</p>
                </div>
                <div className="tech-item">
                  <h4>Security First</h4>
                  <p>Bank-grade encryption and security protocols</p>
                </div>
                <div className="tech-item">
                  <h4>API Integration</h4>
                  <p>Seamless integration with existing systems</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sixth Section - ERP Solutions - Top Down Layout */}
      <section className="flow-section erp-section reveal">
        <div className="flow-container">
          <h2 className="section-title">ERP Solutions</h2>
          <div className="image-content">
              <div className="image-display">
                <img 
                src="/images/Integrated platform.png" 
                alt="ERP Solutions" 
                  className="section-image"
                />
            </div>
          </div>
          <div className="text-content">
            <div className="erp-content">
              <p className="intro-text">
                Comprehensive Enterprise Resource Planning solutions that streamline operations, 
                improve efficiency, and provide real-time insights into your business performance.
              </p>
              <div className="erp-modules">
                <div className="module-item">
                  <h4>Financial Management</h4>
                  <p>Complete accounting and financial reporting</p>
                </div>
                <div className="module-item">
                  <h4>Inventory Control</h4>
                  <p>Real-time inventory tracking and management</p>
                </div>
                <div className="module-item">
                  <h4>Human Resources</h4>
                  <p>Employee management and payroll processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh Section - Industry Solutions - Top Down Layout */}
      <section className="flow-section industry-section reveal">
        <div className="flow-container">
          <h2 className="section-title">Industry Solutions</h2>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/solutions for healthcare.png" 
                alt="Industry Solutions" 
                className="section-image"
              />
            </div>
          </div>
          <div className="text-content">
            <div className="industry-content">
              <p className="intro-text">
                Specialized solutions tailored to meet the unique requirements of different industries, 
                from healthcare to government, retail to manufacturing.
              </p>
              <div className="industry-grid">
                <div className="industry-item">
                  <h4>Healthcare</h4>
                  <p>Patient management and billing systems</p>
                </div>
                <div className="industry-item">
                  <h4>Government</h4>
                  <p>Citizen services and revenue management</p>
                </div>
                <div className="industry-item">
                  <h4>Retail</h4>
                  <p>Point of sale and inventory management</p>
                </div>
                <div className="industry-item">
                  <h4>Manufacturing</h4>
                  <p>Production planning and quality control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eighth Section - Client Success - Top Down Layout */}
      <section className="flow-section clients-section reveal">
        <div className="flow-container">
          <h2 className="section-title">Client Success</h2>
          <div className="image-content">
            <div className="image-display">
              {tickAnimation ? (
                <Lottie 
                  animationData={tickAnimation}
                  loop={true}
                  autoplay={true}
                  className="lottie-animation"
                />
              ) : (
              <img 
                src="/images/Happy customers.png" 
                  alt="Client Success" 
                className="section-image"
              />
              )}
            </div>
          </div>
          <div className="text-content">
            <div className="clients-content">
              <p className="intro-text">
                Trusted by organizations worldwide to deliver innovative solutions that drive growth, 
                improve efficiency, and enhance customer satisfaction.
              </p>
            <div className="client-logos">
                <div className="logo-item">
                  <img src="/images/embu county government logo.png" alt="Embu County Government" />
                </div>
                <div className="logo-item">
                  <img src="/images/evans medical centre logo.png" alt="Evans Medical Centre" />
                </div>
                <div className="logo-item">
                  <img src="/images/kenyatta university logo.png" alt="Kenyatta University" />
                </div>
                <div className="logo-item">
                  <img src="/images/kiambu county government logo.png" alt="Kiambu County Government" />
                </div>
                <div className="logo-item">
                  <img src="/images/narok county government logo.png" alt="Narok County Government" />
                </div>
                <div className="logo-item">
                  <img src="/images/who logo.png" alt="WHO" />
                </div>
                </div>
                </div>
                </div>
                </div>
      </section>

      {/* Ninth Section - Contact - Top Down Layout */}
      <section className="flow-section contact-section reveal">
        <div className="flow-container">
          <h2 className="section-title">Get Started Today</h2>
          <div className="image-content">
            <div className="image-display">
              <img 
                src="/images/let's pay overview.png" 
                alt="Get Started Today" 
                className="section-image"
                  />
                </div>
                </div>
          <div className="text-content">
            <div className="contact-content">
              <p className="intro-text">
                Ready to transform your business with our innovative solutions? 
                Contact us today to discuss your requirements and discover how we can help you achieve your goals.
              </p>
              <div className="contact-actions">
                <button className="cta-button primary">
                  <span className="cta-text">Schedule a Demo</span>
                </button>
                <button className="cta-button secondary">
                  <span className="cta-text">Contact Sales</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;