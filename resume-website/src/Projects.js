// src/Projects.js
import React, { useState } from 'react';
import './Projects.css';
import projectImage1 from './assets/project-image-1.jpg';
import projectImage2 from './assets/project-image-2.jpg';
import projectImage3 from './assets/project-image-3.jpg';

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

const Projects = () => {
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const handleFilter = (filter) => {
        setFilteredProjects(
            projects.filter(project => project.title.toLowerCase().includes(filter.toLowerCase()))
        );
    };

    return (
        <section className="projects" id="projects">
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
    );
};

export default Projects;