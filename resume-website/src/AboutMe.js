// src/AboutMe.js
import React from 'react';
import './AboutMe.css';
import profileImage from './assets/profile-image.jpg';


const AboutMe = () => {
    const skillGroups = [
        {
            name: 'Programming',
            color: '#FE938C',
            skills: [
                { name: 'Python', strong: true, description: 'Strong expertise in Python programming' },
                { name: 'Rust', strong: true, description: 'Proficient in Rust programming' },
                { name: 'Linux', strong: true, description: 'Extensive experience with Linux systems' },
                { name: 'Git', strong: true, description: 'Skilled in using Git version control' },
                { name: 'Docker', strong: true, description: 'Experienced in containerizing applications with Docker' },
                { name: 'Kubernetes', strong: true, description: 'Proficient in orchestrating containers with Kubernetes' },
                { name: 'Tensorflow', strong: true, description: 'Skilled in using Tensorflow for machine learning' },
                { name: 'Pytorch', strong: true, description: 'Proficient in Pytorch for machine learning' },
                { name: 'Bevy', strong: true, description: 'Experienced in using Bevy game engine' },
                { name: 'Javascript', strong: false, description: 'Familiar with Javascript programming' },
                { name: 'Web assembly', strong: false, description: 'Experience with Web assembly' },
                { name: 'OpenAPI', strong: false, description: 'Familiar with OpenAPI for API documentation' },
                { name: 'FastAPI', strong: false, description: 'Experience in developing web applications with FastAPI' },
                { name: 'Poetry', strong: false, description: 'Familiar with Poetry for Python dependency management' },
                { name: 'C++', strong: false, description: 'Experience with C++ programming' },
                { name: 'Simulink', strong: false, description: 'Familiar with Simulink for modeling and simulation' },
                { name: 'Vim', strong: false, description: 'Experience using Vim text editor' },
                { name: 'Matlab', strong: false, description: 'Familiar with Matlab programming' },
                { name: 'C', strong: false, description: 'Experience with C programming' },
                { name: 'Java', strong: false, description: 'Familiar with Java programming' },
                { name: 'Webpack', strong: false, description: 'Experience using Webpack for bundling' },
                { name: 'Anaconda', strong: false, description: 'Familiar with Anaconda for Python environment management' },
                { name: 'Vscode', strong: false, description: 'Experience using Visual Studio Code' },
                { name: 'Pycharm', strong: false, description: 'Familiar with Pycharm IDE' },
                { name: 'Build pipelines', strong: false, description: 'Experience with build pipelines' },
                { name: 'Jupyter', strong: false, description: 'Familiar with Jupyter notebooks' },
                { name: 'Bash', strong: false, description: 'Experience with Bash scripting' },
            ],
        },
        {
            name: 'Artificial Intelligence',
            color: '#E6B89C',
            skills: [
                { name: 'GMM', strong: true, description: 'Strong expertise in Gaussian Mixture Models' },
                { name: 'Unsuper learning', strong: true, description: 'Proficient in unsupervised learning techniques' },
                { name: 'Seq2Seq', strong: true, description: 'Experienced in sequence-to-sequence models' },
                { name: 'Object detection', strong: true, description: 'Skilled in object detection algorithms' },
                { name: 'Anomaly detection', strong: true, description: 'Proficient in anomaly detection techniques' },
                { name: 'Transformer', strong: false, description: 'Familiar with Transformer models' },
                { name: 'LSTM', strong: false, description: 'Experience using LSTM networks' },
                { name: 'RL', strong: false, description: 'Familiar with Reinforcement Learning' },
                { name: 'GAN', strong: false, description: 'Experience with Generative Adversarial Networks' },
                { name: 'VAE', strong: false, description: 'Familiar with Variational Autoencoders' },
                { name: 'NLP', strong: false, description: 'Experience with Natural Language Processing techniques and algorithms' },

            ],
        },
        {
            name: 'Robotics',
            color: '#EAD2AC',
            skills: [
                { name: 'ROS1', strong: true, description: 'Strong expertise in Robot Operating System 1' },
                { name: 'ROS2', strong: true, description: 'Proficient in Robot Operating System 2' },
                { name: 'Inventor', strong: true, description: 'Experienced in using Autodesk Inventor' },
                { name: 'Control Theory', strong: true, description: 'Skilled in Control Theory for robotics' },
                { name: 'Blender', strong: false, description: 'Familiar with Blender for 3D modeling' },
                { name: '3D Printing', strong: false, description: 'I have both a FDM and a Resin printer at home. I got my first 3d printer 8 years ago.' },
                { name: 'Solid Edge', strong: false, description: 'Familiar with Solid Edge for CAD' },
                { name: 'Embedded', strong: false, description: 'Experience with embedded systems' },
                { name: 'Gazebo', strong: false, description: 'Familiar with Gazebo for robot simulation' },
                { name: 'Webots', strong: false, description: 'Experience with Webots for robot simulation' },
                { name: 'Raspberry Pi', strong: false, description: 'Experience with Raspberry Pi for embedded systems' },
            ],
        },
    ];


    const SkillLegend = () => {
        return (
            <div className="skill-legend">
                <div className="legend-item">
                    <div className="legend-group">
                        <span className="legend-star">⭐</span> Strong Skills
                    </div>
                </div>
                <div className="legend-item">
                    {skillGroups.map((group) => (
                        <div key={group.name} className="legend-group">
                            <div className="legend-color" style={{ backgroundColor: group.color }}></div>
                            {group.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section className="about-me" id="about-me">
            <h2>About Me</h2>
            <div className="about-me-content">
                <img src={profileImage} alt="Profile" />
                <div className="about-me-text">
                    <p>
                        As a passionate advocate for the role technology plays in shaping our society, I am dedicated to contributing my skills and knowledge to the development of innovative solutions for the world of tomorrow. My educational background, including a degree in Mechanical Engineering and a Master's in Mechatronics (Robotics-ish) from the Royal Institute of Technology (KTH) in Stockholm, has provided me with a strong foundation in various disciplines such as neural networks, dynamics and motion control, artificial intelligence, and embedded systems.
                    </p>
                    <p>
                        Over the years, I have had the opportunity to work on numerous projects involving product development, robotics, AI research, and more. My professional experience includes roles at Saab AB, where I worked on automatic surveillance, cyber security, and deep learning for sea surveillance, as well as part-time work for Intelligent Machines Stockholm AB in the field of robotics.
                    </p>
                    <p>
                        Aside from my professional pursuits, I am a fervent traveler, having lived in Japan for a year and continuously seeking new destinations to explore. My curiosity for new experiences also extends to my love of learning, as well as my penchant for playing board games with friends. On a personal note, I am married and a proud father to a one-year-old daughter.
                    </p>
                    <p>
                        With a strong track record of projects under my belt, I am excited to continue pushing the boundaries of technology and innovation in order to make a meaningful impact on the world around us. My diverse skill set, combined with my passion for learning and personal growth, positions me as a valuable contributor to any team or project. As an engineer, husband, and father, I am driven by my commitment to creating a better future for my family and for society as a whole. I invite you to explore my work, skills, and experiences further, and I look forward to the possibility of working together to shape the world of tomorrow.
                    </p>
                </div>
            </div>
        </section>
    );
};


export default AboutMe;