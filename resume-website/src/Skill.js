// src/Skill.js
import React from 'react';
import './Skill.css';

const Skill = ({ skillName, skillLevel }) => {
    return (
        <div className="skill">
            <span className="skill-name">{skillName}</span>
            <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skillLevel}%` }}></div>
            </div>
        </div>
    );
};

export default Skill;