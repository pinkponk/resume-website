// src/projects/Project1.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../assets/github-mark-white.png'; // Import the GitHub logo
import bannerImage from '../assets/project-life-code/banner.jpg';
import videoDev from '../assets/project-life-code/dev.mp4';
import videoFoxRabbits from '../assets/project-life-code/fox_rabbits.mp4';
import videoGrass from '../assets/project-life-code/grass.mp4';
import videoInvest from '../assets/project-life-code/invest.mp4';
import videoYoutube from '../assets/project-life-code/main_intro_no_sound.mp4';
import youtubeLogo from '../assets/youtube-icon.png'; // Import the YouTube logo
import styles from './ProjectDetail.module.css';

const Project1 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles['project-detail']}>
            <div
                className={styles.banner}
                style={{ backgroundImage: `url(${bannerImage})` }}
                alt="Banner"
            />
            <h2 className={styles.title}>Life Code</h2>
            <div className={styles['grid-container']}>
                <div className={styles['grid-item']}>
                    <h3>What is it?</h3>
                    <p>Life Code is an upcoming game that allows players to create species in a sandbox-like world while maintaining a balanced ecosystem. Players can write real code in programming languages like Python and JavaScript to describe their species' behavior in the world. The game is designed to run in a browser, making it easily accessible to everyone.</p>
                    <p>The game is inspired by coding games like Battlesnake and Sebastian Lague's video about balancing ecosystems. Players will need to consider the relationships between predators and prey, as well as the impact of their species on the environment, such as how they affect plant life.</p>
                </div>

                <div className={styles['grid-item']}>
                    <div className={styles['video-container']}>
                        <video
                            className={styles.video}
                            src={videoFoxRabbits}
                            muted
                            playsInline
                            autoPlay
                            preload="metadata"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className={styles['grid-item']}>
                    <div className={styles['video-container']}>
                        <video
                            className={styles.video}
                            src={videoDev}
                            loop
                            muted
                            playsInline
                            autoPlay
                            preload="metadata"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className={styles['grid-item']}>
                    <h3>Development</h3>
                    <p>Challenges faced include learning Rust and Bevy, creating 3D models and animations, marketing, and implementing game mechanics that involve running user-written code in the browser. The game is designed to run in the browser for easy accessibility and sharing.</p>
                    <p>Technologies used include Rust, Bevy, WASM, Blender for creating 3D models, and JavaScript and Python for writing creature behavior code. The game's UI is designed using a tool called Figma, while the artwork is generated using artificial intelligence tools like DALLE-2 and stable diffusion.</p>
                </div>
                <div className={styles['grid-item']}>
                    <p>The game involves various mechanics like plant growth based on soil and weather conditions, creatures performing actions like attacking, eating, mating, and sleeping, and players writing code to control the creatures' behavior.</p>
                    <p>Overall, the development process has been a learning experience, with challenges in designing and implementing game mechanics, creating 3D models, and optimizing performance. I plan to continue working on the game and I'm currently seeking investment.</p>
                </div>
                <div className={styles['grid-item']}>
                    <div className={styles['video-container']}>
                        <video
                            className={styles.video}
                            src={videoInvest}
                            muted
                            playsInline
                            controls
                            preload="metadata"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className={styles['grid-item']}>
                    <div className={styles['video-container']}>
                        <video
                            className={styles.video}
                            src={videoYoutube}
                            loop
                            muted
                            playsInline
                            autoPlay
                            preload="metadata"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className={styles['grid-item']}>
                    <h3>Youtube</h3>
                    <p>I have started I Youtube channel where people can follow the development journey. Click the link down below and subscribe!</p>
                </div>
                <div className={styles['grid-item']}>
                    <h3>Public code</h3>
                    <p>The game itself is not open sourced but a portion of the rendering code is! I had problem rendering the amount of grass and objects I wanted and spent a lot of time in order to get it working. I open sourced it in case other people were interested. You can check it out with the github link below.</p>
                </div>
                <div className={styles['grid-item']}>
                    <div className={styles['video-container']}>
                        <video
                            className={styles.video}
                            src={videoGrass}
                            loop
                            muted
                            playsInline
                            autoPlay
                            preload="metadata"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className={styles['grid-item']}>
                    <h3>Technologies Used:</h3>
                    <ul>
                        <li>React</li>
                        <li>Webpack</li>
                        <li>Yarn</li>
                        <li>Stable diffusion</li>
                        <li>Rust</li>
                        <li>Bevy</li>
                        <li>Blender</li>
                        <li>Figma</li>
                        <li>WASM</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>


            <div className={styles['buttons-container']}>
                <a
                    href="https://github.com/pinkponk/bevy_efficient_forest_rendering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['github-button']}
                >
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={githubLogo} alt="GitHub logo" className={styles['github-logo']} />
                        Grass rendering
                    </span>
                </a>
                <a
                    href="https://www.youtube.com/channel/UCqzbiRaNXJa50J4kvJvKpAg" // Replace with your YouTube channel URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['youtube-button']}
                >
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={youtubeLogo} alt="YouTube logo" className={styles['youtube-logo']} />
                        Life Code YouTube
                    </span>
                </a>
                <span className={styles['link-container']}>
                    <Link to="/#projects" className={`${styles['back-to-projects']}`}>
                        Back to home
                    </Link>
                </span>

            </div>

        </div>
    );
};

export default Project1;