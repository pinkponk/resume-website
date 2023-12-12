// src/Start.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Start.css';
import backgroundImage from './assets/background-video.mp4';
import profileImage from './assets/profile-image.jpg';

/* global Calendly */


const Start = () => {
    const [overlayVisible, setOverlayVisible] = useState(false);

    const [videoBlurred, setVideoBlurred] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setOverlayVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVideoBlurred(true);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            if (!overlayVisible) {
                setOverlayVisible(true);
                setVideoBlurred(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener
                ('scroll', handleScroll);
        };
    }, [overlayVisible]);

    // Calendly popup handler
    const openCalendlyPopup = () => {
        Calendly.initPopupWidget({ url: 'https://calendly.com/henrik-djurestal/30min' });
        return false;
    };


    return (
        <section className="hero">
            <video src={backgroundImage} autoPlay playsInline loop muted className={videoBlurred ? 'blurred' : ''} />
            <div className={`overlay ${overlayVisible ? 'visible' : ''}`}>
                <img src={profileImage} alt="Profile" />
                <h1>Henrik Djurestål</h1>
                <h2>Father to a daughter, robots, and AI programs</h2>
                <Link to="/contact" className="contact-btn">Contact Me</Link>
                {/* Added the button for Calendly */}
                <button className="contact-btn" onClick={openCalendlyPopup}>
                    Or Meet Me!
                </button>
            </div>
        </section>
    );
};

export default Start;