import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const services = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by cutting-edge AI and ML algorithms for automation, prediction, and data analysis.',
      features: ['Predictive Analytics', 'Computer Vision', 'Natural Language Processing', 'Deep Learning']
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest frameworks and technologies.',
      features: ['React/Next.js', 'Node.js', 'Responsive Design', 'PWA']
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      features: ['React Native', 'Flutter', 'iOS & Android', 'Cross-Platform']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud.',
      features: ['AWS/Azure/GCP', 'DevOps', 'Microservices', 'Serverless']
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data privacy.',
      features: ['Penetration Testing', 'Security Audit', 'Threat Protection', 'VPN Setup']
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Big Data', 'Dashboarding', 'Real-time Analytics', 'Predictive Modeling']
    }
  ];

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="section section-dark">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive IT solutions to drive your business forward in the digital age
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="service-icon"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                    >
                      <span className="feature-check">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="service-actions">
                <motion.button 
                  className="service-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;