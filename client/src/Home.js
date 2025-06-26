import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(37, 99, 235, 0.4)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const nameVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sahanchanuka24', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sahan-chanuka-a46816246/', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
    { name: 'Email', url: 'mailto:sahanchanuka90@gmail.com', icon: '📧' }
  ];

  return (
    <section id="home" className="home-section">
      <motion.div 
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="home-content"
          variants={itemVariants}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div className="home-text">
            <motion.h1 variants={itemVariants}>
              Hi, I'm{' '}
              <motion.span 
                className="name-highlight"
                variants={nameVariants}
                whileHover={{
                  scale: 1.1,
                  color: "#1e40af",
                  transition: { duration: 0.2 }
                }}
              >
                Sahan Chanuka
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p variants={itemVariants}>
              I build exceptional digital experiences that combine beautiful design with powerful functionality. 
              Passionate about creating innovative solutions using modern technologies.
            </motion.p>
            
            <motion.div className="home-buttons" variants={itemVariants}>
              <motion.a 
                href="#projects" 
                className="home-button primary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="home-button secondary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="social-links" variants={itemVariants}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1 }}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
