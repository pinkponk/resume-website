import React from 'react';
import { Link } from 'react-router-dom';

const Project1 = () => {
    return (
        <div className="project-detail">
            <h1>Project 3</h1>
            <p>Description of Project 3...</p>
            <h3>Technologies Used:</h3>
            <ul>
                <li>React</li>
                <li>Webpack</li>
                <li>Yarn</li>
            </ul>
            <a href="https://link-to-project.com" target="_blank" rel="noopener noreferrer">
                Visit Project
            </a>
            <a href="https://github.com/user/project1" target="_blank" rel="noopener noreferrer">
                View Source Code
            </a>
            <Link to="/projects">Back to Projects</Link>
        </div>
    );
};

export default Project1;