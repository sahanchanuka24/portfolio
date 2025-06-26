import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'JAVA',
    'Express.js', 'Spring Boot', 'SQL'
  ];

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
          <h2>Technologies I Work With</h2>
        </motion.div>
        <div className="skills-grid-enhanced">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-tag-enhanced"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 24px 4px rgba(37,99,235,0.25)",
                background: "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)",
                color: "#fff"
              }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.05 }}
              viewport={{ once: true }}
              tabIndex={0}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
