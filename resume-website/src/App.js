// src/App.js
import React, { useState } from 'react';
import './App.css';
import backgroundImage from './assets/background-video.mp4';
import profileImage from './assets/profile-image.jpg';
import { default as projectImage1, default as projectImage2, default as projectImage3 } from './assets/project-image-1.jpg';

const projects = [
  {
    title: 'Project 1',
    image: projectImage1,
  },
  {
    title: 'Project 2',
    image: projectImage2,
  },
  {
    title: 'Project 3',
    image: projectImage3,
  },
];

const App = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (filter) => {
    setFilteredProjects(
      projects.filter(project => project.title.toLowerCase().includes(filter.toLowerCase()))
    );
  };

  return (
    <>
      <section className="hero">
        <video src={backgroundImage} autoPlay loop muted />
        <h1>Welcome to my resume website</h1>
      </section>

      <section className="about-me">
        <h2>About Me</h2>
        <img src={profileImage} alt="Profile" />
        <p>Lorem ipsum dolor sit amet...</p>
      </section>

      <section className="projects">
        <h2>My Projects</h2>
        <input type="text" placeholder="Filter projects..." onChange={e => handleFilter(e.target.value)} />
        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-thumb" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline">
        <h2>Education and Work Experience</h2>
        {/* Add your timeline here */}
      </section>
    </>
  );
};

export default App;