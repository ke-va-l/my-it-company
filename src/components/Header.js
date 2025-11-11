import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <nav className="navbar">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="logo-icon">🚀</div>
            <div className="logo-text">
              <span className="logo-main">Homex</span>
              <span className="logo-sub">Technologies</span>
            </div>
          </motion.div>
          
          <div className="nav-desktop">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="header-actions">
            <motion.a 
              href="#contact" 
              className="btn btn-primary header-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          <motion.div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="mobile-menu-header">
                <div className="logo">
                  <div className="logo-icon">🚀</div>
                  <div className="logo-text">
                    <span className="logo-main">Homex</span>
                    <span className="logo-sub">Technologies</span>
                  </div>
                </div>
                <button 
                  className="close-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ✕
                </button>
              </div>
              
              <div className="mobile-nav">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              <div className="mobile-cta">
                <a href="#contact" className="btn btn-primary">Get Started</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;