// src/Start.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Start.css';
import backgroundImage from './assets/background-video.mp4';
import profileImage from './assets/profile-image.jpg';

const Start = () => {
    const [overlayVisible, setOverlayVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOverlayVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="hero">
            <video src={backgroundImage} autoPlay loop muted className={overlayVisible ? 'blurred' : ''} />
            <div className={`overlay ${overlayVisible ? 'visible' : ''}`}>
                <img src={profileImage} alt="Profile" />
                <h1>Your Name</h1>
                <h2>Your Title</h2>
                <Link to="/contact" className="contact-btn">Contact Me</Link>
            </div>
        </section>
    );
};

export default Start;