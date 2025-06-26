const express = require('express');
const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ message: 'Portfolio server is running!' });
});

// Contact form endpoint
router.post('/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Here you can add email sending logic or database storage
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    });
  }
});

// Projects endpoint
router.get('/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Node.js",
      technologies: ["React", "Node.js", "Express", "CSS"],
      image: "/images/portfolio.jpg",
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/images/ecommerce.jpg",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://yourecommerce.com"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/images/taskapp.jpg",
      github: "https://github.com/yourusername/taskapp",
      live: "https://yourtaskapp.com"
    }
  ];
  
  res.json(projects);
});

// Skills endpoint
router.get('/skills', (req, res) => {
  const skills = {
    frontend: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
    backend: ["Node.js", "Express", "MongoDB", "SQL", "PostgreSQL"],
    tools: ["Git", "VS Code", "Postman", "Figma", "Docker"],
    other: ["REST APIs", "Responsive Design", "Agile Development", "JWT Authentication"]
  };
  
  res.json(skills);
});

// About endpoint
router.get('/about', (req, res) => {
  const about = {
    name: "Your Name",
    title: "Full Stack Developer",
    description: "Passionate developer with experience in building modern web applications. I love creating user-friendly interfaces and robust backend systems.",
    experience: "3+ years",
    education: "Bachelor's in Computer Science",
    location: "Your City, Country",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  };
  
  res.json(about);
});

module.exports = router; 