import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TechStack.css';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const techCategories = {
    frontend: {
      title: 'Frontend',
      technologies: [
        { name: 'React.js', icon: '⚛️', color: '#61DAFB', level: 'Expert' },
        { name: 'Flutter', icon: '📱', color: '#02569B', level: 'Advanced' },
        { name: 'Next.js', icon: '▲', color: '#000000', level: 'Expert' },
        { name: 'TypeScript', icon: '📘', color: '#3178C6', level: 'Advanced' },
        { name: 'Vue.js', icon: '🟢', color: '#4FC08D', level: 'Proficient' },
        { name: 'Angular', icon: '🅰️', color: '#DD0031', level: 'Proficient' }
      ]
    },
    backend: {
      title: 'Backend',
      technologies: [
        { name: 'Node.js', icon: '🟢', color: '#339933', level: 'Expert' },
        { name: 'Python/Django', icon: '🐍', color: '#092E20', level: 'Advanced' },
        { name: 'Spring Boot', icon: '🌱', color: '#6DB33F', level: 'Advanced' },
        { name: 'Express.js', icon: '🚂', color: '#000000', level: 'Expert' },
        { name: 'FastAPI', icon: '⚡', color: '#009688', level: 'Proficient' },
        { name: 'PHP/Laravel', icon: '🐘', color: '#FF2D20', level: 'Proficient' }
      ]
    },
    database: {
      title: 'Database',
      technologies: [
        { name: 'PostgreSQL', icon: '🐘', color: '#336791', level: 'Expert' },
        { name: 'MongoDB', icon: '🍃', color: '#47A248', level: 'Advanced' },
        { name: 'MySQL', icon: '🐬', color: '#4479A1', level: 'Advanced' },
        { name: 'Firebase', icon: '🔥', color: '#FFCA28', level: 'Expert' },
        { name: 'Redis', icon: '🔴', color: '#DC382D', level: 'Proficient' },
        { name: 'Oracle', icon: '🏢', color: '#F80000', level: 'Proficient' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', icon: '☁️', color: '#FF9900', level: 'Advanced' },
        { name: 'Docker', icon: '🐳', color: '#2496ED', level: 'Expert' },
        { name: 'Kubernetes', icon: '⚓', color: '#326CE5', level: 'Proficient' },
        { name: 'GitHub Actions', icon: '⚡', color: '#2088FF', level: 'Advanced' }
      ]
    }
  };

  const allTechnologies = Object.values(techCategories).flatMap(category => category.technologies);

  const categories = [
    { key: 'all', label: 'All Tech', count: allTechnologies.length, icon: '💻' },
    ...Object.entries(techCategories).map(([key, category]) => ({
      key,
      label: category.title,
      count: category.technologies.length,
      icon: category.title === 'Frontend' ? '🌐' : 
             category.title === 'Backend' ? '⚙️' : 
             category.title === 'Database' ? '🗄️' : '☁️'
    }))
  ];

  const displayedTechs = activeCategory === 'all' 
    ? allTechnologies 
    : techCategories[activeCategory]?.technologies || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return '#00E676';
      case 'Advanced': return '#0066FF';
      case 'Proficient': return '#FFD600';
      default: return '#94A3B8';
    }
  };

  return (
    <section id="tech" className="section section-light">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Technology Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cutting-edge technologies powering our innovative solutions
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div 
          className="tech-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>
              <span className="category-count">{category.count}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div 
          ref={ref}
          className="tech-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          key={activeCategory}
        >
          {displayedTechs.map((tech, index) => (
            <motion.div 
              key={tech.name}
              className="tech-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 }
              }}
              style={{ '--tech-color': tech.color }}
            >
              <div className="tech-header">
                <motion.div 
                  className="tech-icon"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {tech.icon}
                </motion.div>
                <div className="tech-info">
                  <h4>{tech.name}</h4>
                  <div className="tech-level">
                    <span 
                      className="level-badge"
                      style={{ '--level-color': getLevelColor(tech.level) }}
                    >
                      {tech.level}
                    </span>
                  </div>
                </div>
              </div>
              <div className="tech-glow"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stats */}
        <motion.div 
          className="tech-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { number: '50+', label: 'Technologies', icon: '💻' },
            { number: '100%', label: 'Quality Focus', icon: '⭐' },
            { number: '24/7', label: 'Support', icon: '🛠️' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="stat"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;