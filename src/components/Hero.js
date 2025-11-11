import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const techCardVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-background">
        <motion.div 
          className="floating-orb orb-1"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="floating-orb orb-2"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.div 
              className="hero-badge"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="pulse-dot"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              🚀 Premium IT Solutions
            </motion.div>
            
            <motion.h1 className="hero-title" variants={itemVariants}>
              Transforming Businesses With{' '}
              <motion.span 
                className="gradient-text"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Cutting-Edge
              </motion.span>{' '}
              Technology Solutions
            </motion.h1>
            
            <motion.p className="hero-description" variants={itemVariants}>
              We deliver innovative digital solutions that drive growth, efficiency, 
              and competitive advantage. From AI-powered applications to scalable 
              cloud infrastructure, we bring your vision to life with precision and excellence.
            </motion.p>
            
            <motion.div className="hero-actions" variants={itemVariants}>
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 102, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
              
              <motion.a 
                href="#portfolio" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Our Work</span>
              </motion.a>
            </motion.div>

            <motion.div className="hero-stats" variants={itemVariants}>
              {[
                { number: '50+', label: 'Projects Delivered' },
                { number: '25+', label: 'Happy Clients' },
                { number: '99%', label: 'Success Rate' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="stat"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.h3 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, type: "spring" }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Visual Content */}
          <motion.div 
            className="hero-visual"
            variants={itemVariants}
          >
            <div className="tech-showcase">
              {[
                { 
                  icon: '🤖', 
                  title: 'AI & ML', 
                  description: 'Intelligent Automation',
                  color: '#FF6B6B',
                  delay: 0.2
                },
                { 
                  icon: '☁️', 
                  title: 'Cloud', 
                  description: 'Scalable Infrastructure',
                  color: '#00D4FF',
                  delay: 0.4
                },
                { 
                  icon: '📱', 
                  title: 'Mobile', 
                  description: 'Native Apps',
                  color: '#0066FF',
                  delay: 0.6
                },
                { 
                  icon: '🔒', 
                  title: 'Security', 
                  description: 'Enterprise Grade',
                  color: '#00E676',
                  delay: 0.8
                }
              ].map((tech, index) => (
                <motion.div 
                  key={tech.title}
                  className="tech-card"
                  variants={techCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: tech.delay }}
                  style={{ '--tech-color': tech.color }}
                >
                  <div className="tech-card-inner">
                    <div className="tech-card-glow"></div>
                    <motion.div 
                      className="tech-icon"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tech.icon}
                    </motion.div>
                    <div className="tech-content">
                      <h4>{tech.title}</h4>
                      <p>{tech.description}</p>
                    </div>
                    <motion.div 
                      className="tech-sparkle"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Only line, no text */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div 
          className="scroll-line"
          animate={{ height: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;