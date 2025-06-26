import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'HTML/CSS', level: 90, icon: '🌐' },
      { name: 'TypeScript', level: 75, icon: '📘' }
    ],
    backend: [
      { name: 'Node.js', level: 80, icon: '🟢' },
      { name: 'Express.js', level: 85, icon: '🚀' },
      { name: 'MongoDB', level: 75, icon: '🍃' },
      { name: 'PostgreSQL', level: 70, icon: '🐘' }
    ],
    tools: [
      { name: 'Git', level: 85, icon: '📝' },
      { name: 'Docker', level: 65, icon: '🐳' },
      { name: 'AWS', level: 60, icon: '☁️' },
      { name: 'Figma', level: 70, icon: '🎨' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Technologies</h2>
          <p>My technical expertise and tools I work with</p>
        </motion.div>

        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div key={category} className="skills-category" variants={itemVariants}>
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
