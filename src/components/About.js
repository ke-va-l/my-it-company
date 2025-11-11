import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2>Innovating the Future of Technology</h2>
            <p>
              At <strong>TechNova</strong>, we are a passionate team of IT visionaries dedicated to 
              delivering cutting-edge solutions that transform businesses. With expertise in 
              artificial intelligence, cloud computing, and digital transformation, we help 
              companies navigate the complex digital landscape and achieve unprecedented growth.
            </p>
            
            <motion.div className="features" variants={itemVariants}>
              <div className="feature">
                <div className="feature-icon">🚀</div>
                <div>
                  <h4>Innovation Driven</h4>
                  <p>We stay ahead of technology trends to deliver future-proof solutions</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">💡</div>
                <div>
                  <h4>Expert Team</h4>
                  <p>Seasoned professionals with 5+ years of industry experience</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <div>
                  <h4>Fast Delivery</h4>
                  <p>Agile development process ensuring timely project completion</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div className="about-visual" variants={itemVariants}>
            <div className="visual-container">
              <motion.div 
                className="floating-element element-1"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="element-icon">🤖</div>
              </motion.div>
              
              <motion.div 
                className="floating-element element-2"
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="element-icon">☁️</div>
              </motion.div>
              
              <motion.div 
                className="floating-element element-3"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="element-icon">📊</div>
              </motion.div>
              
              <div className="central-visual">
                <div className="pulsing-circle"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;