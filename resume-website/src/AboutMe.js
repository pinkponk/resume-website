// src/AboutMe.js
import React from 'react';
import './AboutMe.css';
import profileImage from './assets/profile-image.jpg';

const AboutMe = () => {
    return (
        <section className="about-me" id="about-me">
            <h2>About Me</h2>
            <img src={profileImage} alt="Profile" />
            <p>Lorem ipsum dolor sit amet...</p>
        </section>
    );
};

export default AboutMe;