import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const RevealProvider = ({ children }) => {
  useEffect(() => {
    const applyRevealClasses = () => {
      // Add reveal classes to common elements if not already present
      const sections = document.querySelectorAll('.hero-section, .flow-section');
      sections.forEach((sec, idx) => {
        const title = sec.querySelector('.section-title, .hero-title');
        const imgWrap = sec.querySelector('.image-content, .hero-visual, .image-display');
        const textWrap = sec.querySelector('.text-content, .hero-content');
        if (title && !title.classList.contains('reveal')) title.classList.add('reveal');
        if (imgWrap && !imgWrap.classList.contains('reveal-right')) imgWrap.classList.add('reveal-right');
        if (textWrap && !textWrap.classList.contains('reveal-left')) textWrap.classList.add('reveal-left');
        // Card/grid items
        sec.querySelectorAll('.feature-item, .stat-item, .tech-item, .module-item, .industry-item, .logo-item').forEach((el, i) => {
          if (!el.classList.contains('reveal')) el.classList.add(i % 2 === 0 ? 'reveal' : 'reveal-right');
        });
        // Images inside displays
        sec.querySelectorAll('img.section-image, .lottie-animation').forEach((el) => {
          if (!el.classList.contains('reveal-right')) el.classList.add('reveal-right');
        });
        // Paragraphs
        sec.querySelectorAll('p').forEach((el) => {
          if (!el.classList.contains('reveal')) el.classList.add('reveal');
        });
      });
    };

    const observeAll = () => {
      applyRevealClasses();
      const nodes = Array.from(document.querySelectorAll('.reveal, .reveal-left, .reveal-right'));
      if (!('IntersectionObserver' in window)) {
        nodes.forEach((n) => n.classList.add('in-view'));
        return null;
      }
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
      nodes.forEach((n) => obs.observe(n));
      return obs;
    };

    // Initial observe and also mark items already in view
    let obs = observeAll();
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view');
        if (obs) obs.unobserve(el);
      }
    });

    // Fallback: if something prevents IO from firing, reveal everything after a short delay
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => el.classList.add('in-view'));
    }, 1800);

    // Observe future added nodes (e.g., route changes)
    const mo = new MutationObserver(() => {
      if (obs) obs.disconnect();
      obs = observeAll();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { if (obs) obs.disconnect(); mo.disconnect(); clearTimeout(fallbackTimer); };
  }, []);
  return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RevealProvider>
      <App />
    </RevealProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
