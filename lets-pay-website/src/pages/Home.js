import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import LearnMoreButton from '../components/LearnMoreButton';
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
  const [passwordAnimation, setPasswordAnimation] = useState(null);

  useEffect(() => {
    // Load animations dynamically from public directory
    fetch('/animations/Password Authentication.json')
      .then(response => response.json())
      .then(data => setPasswordAnimation(data))
      .catch(error => console.error('Error loading password animation:', error));
  }, []);


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
            <div className="hero-logo">
              <img 
                src="/images/letspay_logo-removebg-preview.png?v=2" 
                alt="Let'spay Official Transparent Logo" 
                className="home-logo-image"
              />
              <p className="hero-tagline">Bringing Your Future Today.</p>
            </div>
            <h1 className="hero-title">
              <span className="hero-line-1">Secure Financial Gateways.</span>
              <span className="hero-line-2"><span className="hero-world-class">World-class</span> Technology.</span>
              <span className="hero-line-3">Mobile Apps - Multiple Devices.</span>
            </h1>
            <p className="hero-description">
              POWERING TRANSACTIONS ACROSS CONTINENTS WITH NEXT-GEN MOBILE TECHNOLOGY AND TIER 1 BANKING-CORE SECURE TECHNOLOGY!
            </p>
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
                          <h2>Secure. Seamless Technology.</h2>
              <LearnMoreButton
                title="Why Let's Pay"
                description="Let'sPay is a Web & Mobility based platform, targeted towards facilitating Government Departments to collect and manage revenue payments more seamlessly & conveniently. This is a holistic platform, which facilitate the collection of payments using Cash, Debit and credit Cards & Mobile Wallets and direct bank deposit from consumers and also supports other ERP modules like Human Resource Management, Electronic Document Management, Case Management, Fleet Management, Licenses, Property & Land Rates. It's a real time system, with secure audit trials, automatic reports and self reconciling without human intervention. It is the most secure and customized system in Kenya."
                ctaText="Discover More"
                ctaLink="/why-us"
              />
            </div>
          </div>
          <div className="text-content">
            <div className="why-letspay-content">
              <p className="why-letspay-intro">
                <span className="highlight-cyan">1000+ man-years of experience</span> across payment and enterprise domains
              </p>
              <div className="info-block">
                <p className="why-letspay-text">
                  A pool of human minds with deep-rooted knowledge across multiple industry verticals. 
                  Work with you end-to-end. Stay till the end to ensure you get the objectives fulfilled. 
                  Hands-on approach. Secure Robust Platform. The platform is already used in Banks for Payment.
                </p>
              </div>
              <div className="why-letspay-features">
                <div className="scrolling-container">
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
                  {/* Duplicate for seamless loop */}
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
        </div>
      </section>


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
              <div className="info-block">
                <p className="intro-text">
                  A comprehensive solution that integrates all aspects of financial management into a single, 
                  unified platform designed for modern enterprises.
                </p>
              </div>
              <div className="platform-features">
                <div className="scrolling-container">
                  <div className="feature-item">
                    <h4>Integrated Architecture</h4>
                    <p>Seamless integration across all financial modules</p>
                  </div>
                  <div className="feature-item">
                    <h4>Real-time Processing</h4>
                    <p>Instant transaction processing and reporting</p>
                  </div>
                  <div className="feature-item">
                    <h4>Scalable Solutions</h4>
                    <p>Built to grow with your business needs</p>
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="feature-item">
                    <h4>Integrated Architecture</h4>
                    <p>Seamless integration across all financial modules</p>
                  </div>
                  <div className="feature-item">
                    <h4>Real-time Processing</h4>
                    <p>Instant transaction processing and reporting</p>
                  </div>
                  <div className="feature-item">
                    <h4>Scalable Solutions</h4>
                    <p>Built to grow with your business needs</p>
                  </div>
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
              <div className="info-block">
                <p className="intro-text">
                  Decades of combined experience in financial technology, enterprise solutions, 
                  and payment processing across diverse industry verticals.
                </p>
              </div>
            <div className="experience-stats">
              <div className="scrolling-container">
                <div className="stat-item">
                    <h3><AnimatedCounter to={935} duration={1800} /></h3>
                    <p>Letspay's team brings together over 935 years of combined experience—earned across government, enterprise, and fintech innovation.</p>
                </div>
                <div className="stat-item">
                    <h3><AnimatedCounter to={50} duration={1400} />+</h3>
                    <p>Successful implementations</p>
                </div>
                <div className="stat-item">
                    <h3><AnimatedCounter to={15} duration={1200} />+</h3>
                    <p>Years in the industry</p>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="stat-item">
                    <h3><AnimatedCounter to={935} duration={1800} /></h3>
                    <p>Letspay's team brings together over 935 years of combined experience—earned across government, enterprise, and fintech innovation.</p>
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
        </div>
      </section>

      {/* Fifth Section - Technology Features - Top Down Layout */}
      <section className="flow-section technology-section reveal">
        <div className="flow-container">
          <h2 className="section-title">Technology Features</h2>
            <div className="image-content">
              <div className="image-display">
              <img 
                src="/images/technology for better life.png" 
                alt="Let's Pay Technology for Better Life - Computing Infrastructure with Circuit-Style Graphics, Digital Empowerment, Community Engagement, Integrations, Business Intelligence, Cloud Computing, and Telemedicine for Government Modernization and Digital Transformation" 
                className="section-image"
              />
              </div>
            </div>
            <div className="text-content">
            <div className="technology-content">
              <div className="info-block">
                <p className="intro-text">
                  We are passionate about the technology that is driving the modern world. We develop solutions using cutting-edge technologies and offer excellent service. 
                  Technology for better life - our computing infrastructure with circuit-style graphics enables digital empowerment and community engagement through 
                  seamless system integration, data-driven decision-making, scalable cloud infrastructure, and remote healthcare access for government modernization, 
                  enterprise digital transformation, and health tech partnerships.
                </p>
              </div>
              <div className="tech-stack">
                <div className="scrolling-container">
                  <div className="tech-item">
                    <h4>Integrations</h4>
                    <p>Seamless system integration with flowchart and circuit board connectivity</p>
                  </div>
                  <div className="tech-item">
                    <h4>Business Intelligence</h4>
                    <p>Data-driven decision-making with smart analytics and network diagrams</p>
                  </div>
                  <div className="tech-item">
                    <h4>Cloud Computing</h4>
                    <p>Scalable cloud infrastructure with flexible and scalable cloud-based solutions</p>
                  </div>
                  <div className="tech-item">
                    <h4>Telemedicine</h4>
                    <p>Remote healthcare access with digital health solutions and telemonitoring</p>
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="tech-item">
                    <h4>Integrations</h4>
                    <p>Seamless system integration with flowchart and circuit board connectivity</p>
                  </div>
                  <div className="tech-item">
                    <h4>Business Intelligence</h4>
                    <p>Data-driven decision-making with smart analytics and network diagrams</p>
                  </div>
                  <div className="tech-item">
                    <h4>Cloud Computing</h4>
                    <p>Scalable cloud infrastructure with flexible and scalable cloud-based solutions</p>
                  </div>
                  <div className="tech-item">
                    <h4>Telemedicine</h4>
                    <p>Remote healthcare access with digital health solutions and telemonitoring</p>
                  </div>
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
              <div className="info-block">
                <p className="intro-text">
                  Comprehensive Enterprise Resource Planning solutions that streamline operations, 
                  improve efficiency, and provide real-time insights into your business performance.
                </p>
              </div>
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
              <div className="info-block">
                <p className="intro-text">
                  Specialized solutions tailored to meet the unique requirements of different industries, 
                  from healthcare to government, retail to manufacturing.
                </p>
              </div>
              <div className="industry-grid">
                <div className="scrolling-container">
                  <div className="industry-item">
                    <h4>Health Management Solution</h4>
                    <p>End to end management and billing system</p>
                  </div>
                  <div className="industry-item">
                    <h4>Government</h4>
                    <p>Citizen services and revenue management</p>
                  </div>
                  <div className="industry-item">
                    <h4>Retail</h4>
                    <p>Secure Management Platform</p>
                  </div>
                  <div className="industry-item">
                    <h4>Manufacturing</h4>
                    <p>Production planning and quality control</p>
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="industry-item">
                    <h4>Health Management Solution</h4>
                    <p>End to end management and billing system</p>
                  </div>
                  <div className="industry-item">
                    <h4>Government</h4>
                    <p>Citizen services and revenue management</p>
                  </div>
                  <div className="industry-item">
                    <h4>Retail</h4>
                    <p>Secure Management Platform</p>
                  </div>
                  <div className="industry-item">
                    <h4>Manufacturing</h4>
                    <p>Production planning and quality control</p>
                  </div>
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
              <img 
                src="/images/Happy customers.png" 
                alt="Let's Pay Happy Customers - Institutional Trust and Customer Satisfaction Across Government, Healthcare, and Educational Organizations Including Ministry of Youth Sports Arts Recreation Zimbabwe, Amref Health Africa, Evans Sunrise Medical Centre" 
                className="section-image"
              />
            </div>
          </div>
          <div className="text-content">
            <div className="clients-content">
              <div className="info-block">
                <p className="intro-text">
                  Trusted by organizations worldwide including government ministries, healthcare institutions, 
                  and educational organizations to deliver innovative solutions that drive growth, improve 
                  efficiency, and enhance customer satisfaction across diverse sectors.
                </p>
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
                src="/images/Partners.png" 
                alt="Let's Pay Technology and Security Partners Network - HUAWEI, ZTE, SENTER, Lanner Telecommunications & Networking, FORTINET, HIKVISION, PERSIST SECURITY Cybersecurity & Surveillance, 19 Labs, Peninlog Healthcare & Tech Innovation, handheld, INFINIDAT Rugged Devices & Data Infrastructure" 
                className="section-image"
              />
                </div>
                </div>
          <div className="text-content">
            <div className="contact-content">
              <div className="info-block">
                <p className="intro-text">
                  Ready to transform your business with our innovative solutions backed by industry-leading technology partners?
                  Our robust network of technology and security partners including HUAWEI, ZTE, FORTINET, HIKVISION, and others 
                  ensures interoperability with global tech standards, security-first architecture, and smart partnerships 
                  for healthcare, finance, and infrastructure sectors.
                </p>
              </div>
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