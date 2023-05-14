// src/Projects.js
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './Projects.css';
import projectImageWebsiteVideo from './assets/background-video.mp4';
import projectLifeCodeVideo from './assets/project-life-code/intro.mp4';
import projectLifeCodeImage from './assets/project-life-code/project-image.png';
import projectResumeWebsiteImage from './assets/project-resume-website/project-image.png';
import projectImage3 from './assets/project3/project-image.jpg';
import projectImage3Video from './assets/project3/project-video.mp4';

const projects = [
    {
        title: 'Resume website',
        image: projectResumeWebsiteImage,
        route: '/projects/resume-website',
        externalLink: '',
        hoverMedia: projectImageWebsiteVideo,
    },
    {
        title: 'Life Code',
        image: projectLifeCodeImage,
        route: '/projects/life-code',
        externalLink: '',
        hoverMedia: projectLifeCodeVideo,
    },
    {
        title: 'Project 3',
        image: projectImage3,
        route: '/projects/project-3',
        externalLink: '',
        hoverMedia: projectImage3Video,
    },
];

const Projects = () => {
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const handleFilter = (filter) => {
        setFilteredProjects(
            projects.filter((project) =>
                project.title.toLowerCase().includes(filter.toLowerCase())
            )
        );
    };

    const renderProject = (project, index) => {
        const ProjectLink = project.externalLink ? 'a' : Link;
        const linkProps = project.externalLink
            ? { href: project.externalLink, target: '_blank', rel: 'noopener noreferrer' }
            : { to: project.route };

        return (
            <InView key={index} triggerOnce>
                {({ inView, ref }) => (
                    <ProjectLink {...linkProps} ref={ref}>
                        <div
                            className={`project-thumb ${inView ? 'visible' : ''} ${!project.hoverMedia ? 'no-hover-media' : ''
                                }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={project.image} alt={project.title} />
                            {project.hoverMedia && (
                                <video
                                    src={project.hoverMedia}
                                    loop
                                    muted
                                    playsInline
                                    className="hover-media"
                                />
                            )}
                            <h3>{project.title}</h3>
                        </div>
                    </ProjectLink>
                )}
            </InView>
        );
    };

    const handleMouseEnter = (e) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
            video.play();
        }
    };

    const handleMouseLeave = (e) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
            video.pause();
        }
    };

    return (
        <section className="projects" id="projects">
            <h2>My Projects</h2>
            <input
                type="text"
                placeholder="Filter projects..."
                onChange={(e) => handleFilter(e.target.value)}
            />
            <div className="project-grid">
                {filteredProjects.map((project, index) =>
                    renderProject(project, index)
                )}
            </div>
        </section>
    );
};

export default Projects;