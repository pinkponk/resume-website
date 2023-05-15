// src/Projects.js
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './Projects.css';
import projectImageWebsiteVideo from './assets/background-video.mp4';
import projectElectricMCImage from './assets/project-electric-mc/project-image.jpg';
import projectFusionImage from './assets/project-fusion/project-image.png';
import projectGandalfImage from './assets/project-gandalf/project-image.jpg';
import projectLifeCodeVideo from './assets/project-life-code/hover-media.mp4';
import projectLifeCodeImage from './assets/project-life-code/project-image.jpg';
import projectLineRobotImage from './assets/project-line-robot/project-image.jpg';
import projectMasterThesisImage from './assets/project-master/project-image.jpg';
import projectResumeWebsiteImage from './assets/project-resume-website/project-image.jpg';
import projectRobotDogImage from './assets/project-robot-dog/project-image.jpg';
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
        title: 'Fusion Tokamak Simulation',
        image: projectFusionImage,
        route: '',
        externalLink: 'https://github.com/pinkponk/Fusion-Tokamak-Simulation',
        hoverMedia: '',
    },
    {
        title: 'Robotic Dog',
        image: projectRobotDogImage,
        route: '',
        externalLink: 'https://github.com/pinkponk/Robotic-Dog',
        hoverMedia: '',
    },
    {
        title: 'Master Thesis',
        image: projectMasterThesisImage,
        route: '',
        externalLink: 'https://ieeexplore.ieee.org/abstract/document/8455776',
        hoverMedia: '',
    },
    {
        title: 'Line robot',
        image: projectLineRobotImage,
        route: '',
        externalLink: 'https://github.com/pinkponk/Line-Robot',
        hoverMedia: '',
    },
    {
        title: 'Gandalf at the door',
        image: projectGandalfImage,
        route: '',
        externalLink: 'https://github.com/pinkponk/Gandalf-at-the-gate',
        hoverMedia: '',
    },
    {
        title: 'Electric MC',
        image: projectElectricMCImage,
        route: '',
        externalLink: 'http://www.dialog-89.se/HenrikMC.html'
    }
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