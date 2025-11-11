import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: 'MoncWare Web App – Shipment Tracking SaaS',
      category: 'web',
      description: 'Developed a powerful SaaS-based shipment tracking solution with real-time logistics monitoring and multi-carrier integration.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Google Maps API', 'AWS Cloud'],
      features: [
        'Real-time shipment visualization',
        'HubSpot CRM integration',
        'Secure payment gateways',
        'Multi-tracking system'
      ],
      image: '🚚',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Solar Energy Management System',
      category: 'mobile',
      description: 'An end-to-end solar project tracking and energy monitoring app for managing installations.',
      technologies: ['Flutter', 'Firebase', 'REST APIs', 'PostgreSQL', 'AWS EC2'],
      features: [
        'Barcode scanners & e-signature',
        'Real-time data synchronization',
        'Analytics dashboards',
        'Google Play Store'
      ],
      image: '☀️',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Flatmates AI – 1st Place, MATHack 2.0',
      category: 'ai',
      description: 'AI-powered roommate recommendation platform using machine learning and behavioral analytics.',
      technologies: ['Flutter', 'Python', 'TensorFlow', 'Flask API', 'Firebase'],
      features: [
        'NLP for user profile analysis',
        'TensorFlow models for clustering',
        'Chat and preference learning',
        'Winner among 10,000+ participants'
      ],
      image: '🤖',
      status: 'Award Winning'
    },
    {
      id: 4,
      title: 'Car Management System',
      category: 'mobile',
      description: 'Smart vehicle management system with OCR-based number plate scanning.',
      technologies: ['Flutter', 'Python', 'OpenCV', 'Firebase', 'MySQL'],
      features: [
        'OCR-based number plate scanning',
        'Vehicle entry records',
        'Task management',
        'Admin dashboards'
      ],
      image: '🚗',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Medical Appointment App',
      category: 'mobile',
      description: 'Cross-platform mobile app for hospitals enabling appointment booking.',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'REST API'],
      features: [
        'Doctor-patient scheduling',
        'Availability calendar',
        'In-app notifications',
        'Profile management'
      ],
      image: '🏥',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Smart Resume Analyzer',
      category: 'ai',
      description: 'AI-driven system for automatic resume analysis and ranking.',
      technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'Streamlit'],
      features: [
        'NLP for keyword extraction',
        'Candidate classification',
        'Automated ranking system',
        'Analytics dashboard'
      ],
      image: '📄',
      status: 'Completed'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ai', label: 'AI/ML Solutions' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="portfolio" className="section section-dark">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Projects & Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing our innovative solutions that drive business transformation
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          ref={ref}
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          key={activeFilter}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-header">
                <div className="project-image">
                  {project.image}
                </div>
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-actions">
                <motion.button 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio CTA */}
        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Have a Project in Mind?</h3>
          <p>Let's build something amazing together</p>
          <motion.a 
            href="#contact" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;