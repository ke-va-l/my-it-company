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
        { name: 'React.js', level: 95, icon: '⚛️', color: '#61DAFB' },
        { name: 'Flutter', level: 90, icon: '📱', color: '#02569B' },
        { name: 'Next.js', level: 88, icon: '▲', color: '#000000' },
        { name: 'TypeScript', level: 85, icon: '📘', color: '#3178C6' }
      ]
    },
    backend: {
      title: 'Backend',
      technologies: [
        { name: 'Node.js', level: 92, icon: '🟢', color: '#339933' },
        { name: 'Python/Django', level: 88, icon: '🐍', color: '#092E20' },
        { name: 'Spring Boot', level: 85, icon: '🌱', color: '#6DB33F' },
        { name: 'Express.js', level: 90, icon: '🚂', color: '#000000' }
      ]
    },
    database: {
      title: 'Database',
      technologies: [
        { name: 'PostgreSQL', level: 90, icon: '🐘', color: '#336791' },
        { name: 'MongoDB', level: 88, icon: '🍃', color: '#47A248' },
        { name: 'MySQL', level: 85, icon: '🐬', color: '#4479A1' },
        { name: 'Firebase', level: 87, icon: '🔥', color: '#FFCA28' }
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
      icon: category.title === 'Frontend' ? '🌐' : category.title === 'Backend' ? '⚙️' : '🗄️'
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
                <div className="tech-icon">
                  {tech.icon}
                </div>
                <div className="tech-info">
                  <h4>{tech.name}</h4>
                  <div className="tech-level">
                    <div className="level-bar">
                      <motion.div 
                        className="level-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                    <motion.span 
                      className="level-percent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {tech.level}%
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;