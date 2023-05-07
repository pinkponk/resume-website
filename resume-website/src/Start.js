// src/Start.js
import React from 'react';
import './Start.css';
import backgroundImage from './assets/background-video.mp4';

const Start = () => {
    return (
        <section className="hero" id="start">
            <div className="video-container">
                <video src={backgroundImage} autoPlay loop muted />
            </div>
            <h1>Welcome to my resume website</h1>
        </section>
    );
};

export default Start;