// src/SkillGrid.js
import React, { useEffect, useState } from 'react';
import './SkillGrid.css';

const SkillGrid = ({ skillGroups }) => {
    const [skills, setSkills] = useState([]);
    const [selected, setSelected] = useState([]);
    const [win, setWin] = useState(false);
    const [gridSize, setGridSize] = useState(0);
    const [hasWon, setHasWon] = useState(false);
    const [tooltip, setTooltip] = useState({ visible: false, content: "", x: 0, y: 0 });

    const handleMouseEnter = (e, description) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const screenWidth = window.innerWidth;

        let offsetX = 0;
        if (screenWidth <= 768 && rect.x + rect.width / 2 < screenWidth / 2) { // Left side of the screen
            offsetX = 0.25 * screenWidth;
        } else if (screenWidth <= 768 && rect.x + rect.width / 2 >= screenWidth / 2) { // Right side of the screen
            offsetX = -0.25 * screenWidth;
        }

        setTooltip({
            visible: true,
            content: description,
            x: rect.x + rect.width / 2 + offsetX,
            y: rect.y + rect.height + 10,
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ visible: false, content: "", x: 0, y: 0 });
    };

    useEffect(() => {
        let concatSkills = [];
        skillGroups.forEach((group) => {
            concatSkills = concatSkills.concat(group.skills.map((skill) => ({ ...skill, category: group.name })));
        });

        // concatSkills.sort(() => Math.random() - 0.5);
        setSkills(concatSkills);

        // Calculate the grid size dynamically
        const calculatedGridSize = Math.floor(Math.sqrt(concatSkills.length));
        setGridSize(calculatedGridSize);
    }, [skillGroups]);

    useEffect(() => {
        const checkWin = () => {
            for (let row = 0; row < gridSize; row++) {
                let rowSelected = true;
                for (let col = 0; col < gridSize; col++) {
                    if (!selected.includes(row * gridSize + col)) {
                        rowSelected = false;
                        break;
                    }
                }
                if (rowSelected) return true;
            }
            for (let col = 0; col < gridSize; col++) {
                let colSelected = true;
                for (let row = 0; row < gridSize; row++) {
                    if (!selected.includes(row * gridSize + col)) {
                        colSelected = false;
                        break;
                    }
                }
                if (colSelected) return true;
            }
            return false;
        };

        if (!hasWon) {
            const win = checkWin();
            if (win) {
                setWin(true);
                setHasWon(true);
            }
        }
    }, [selected, gridSize, hasWon]);

    const handleClick = (index) => {
        setSelected((prevSelected) => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter((i) => i !== index);
            } else {
                return [...prevSelected, index];
            }
        });
    };

    const getBackgroundColor = (skill) => {
        const group = skillGroups.find((group) => group.name === skill.category);
        return group.color;
    };

    return (
        <>
            <div className={`skill-grid${win ? ' blurred' : ''}`}>
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className={`skill${selected.includes(index) ? " selected" : ""}`}
                        onClick={() => handleClick(index)}
                        onMouseEnter={(e) => handleMouseEnter(e, skill.description)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            backgroundColor: getBackgroundColor(skill),
                            width: `calc(${100 / gridSize}% - 4px)`,
                        }}
                    >
                        <span className={`skill-name`}>{skill.strong ? "⭐ " : ""}{skill.name}</span>
                        {tooltip.visible && (
                            <div
                                className="skill-tooltip"
                                style={{ left: tooltip.x, top: tooltip.y }}
                            >
                                {tooltip.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {win && (
                <div className="win-message">
                    You win!
                    <button className="close-button" onClick={() => setWin(false)}>
                        Close
                    </button>
                </div>
            )}
        </>
    );
};

export default SkillGrid;