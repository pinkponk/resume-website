// src/AboutMe.js
import React from 'react';
import './AboutMe.css';
import profileImage from './assets/profile-image.jpg';

const AboutMe = () => {
    const skillsGroups = [
        {
            title: 'Programming',
            strong: ['Python', 'Rust', 'Linux', 'Git', 'Docker', 'Kubernetes', 'Tensorflow', 'Pytorch', 'Bevy'],
            others: ['Javascript', 'Web assembly', 'OpenAPI', 'FastAPI', 'Poetry', 'C++', 'Simulink', 'Vim', 'Matlab', 'C', 'Java', 'Webpack', 'Anaconda', 'Vscode', 'Pycharm'],
        },
        {
            title: 'Artificial Intelligence',
            strong: ['Gaussian mixture models', 'unsupervised learning', 'seq2Seq', 'object detection', 'anomaly detection'],
            others: ['Transformer', 'LSTM', 'reinforcement learning', 'GAN', 'Variational autoencoders'],
        },
        {
            title: 'Robotics',
            strong: ['ROS1', 'ROS2', 'Autodesk Inventor', 'Control Theory'],
            others: ['Blender', '3D Printing', 'Solid Edge', 'Embedded Systems', 'Gazebo', 'Webots'],
        },
    ];

    return (
        <section className="about-me" id="about-me">
            <h2>About Me</h2>
            <div className="about-me-content">
                <img src={profileImage} alt="Profile" />
                <div className="about-me-text">
                    <p>Lorem ipsum dolor sit amet...</p>
                    <div className="skills">
                        {skillsGroups.map((group, index) => (
                            <div key={index} className="skills-group">
                                <h4>{group.title}</h4>
                                <ul>
                                    {group.strong.map((skill, index) => (
                                        <li key={index} className="strong">{skill}</li>
                                    ))}
                                    {group.others.map((skill, index) => (
                                        <li key={index} className="others">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;