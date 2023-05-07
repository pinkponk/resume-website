// src/Menu.js
import React, { useEffect, useState } from 'react';
import './Menu.css';

const Menu = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.querySelector('.hero').offsetHeight;
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > heroHeight - 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
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
            <a href="#projects">Projects</a>
            <a href="#timeline">Timeline</a>
        </nav>
    );
};

export default Menu;