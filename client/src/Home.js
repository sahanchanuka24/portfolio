import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Hi, I'm <span className="name-highlight">Sahan Chanuka</span></h1>
        <h2>Aspiring Software Engineer</h2>
        <p>
          Passionate about building modern web apps using the MERN stack. I enjoy turning ideas into real-world solutions and learning every day.
        </p>
        <a href="#projects" className="home-button">Explore Projects</a>
      </div>
    </div>
  );
};

export default Home;
