// src/Menu.js
import React, { useEffect, useState } from 'react';
import './Menu.css';

const Menu = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(true);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`menu ${visible ? 'visible' : ''}`}>
            <a href="#start">Start</a>
            <a href="#about-me">About Me</a>
            <a href="#buzzword-bingo">Buzzword Bingo</a>
            <a href="#projects">Projects</a>
            <a href="#timeline">Timeline</a>
        </nav>
    );
};

export default Menu;