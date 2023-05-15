// src/projects/Project1.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../assets/github-mark-white.png'; // Import the GitHub logo
import bannerImage from '../assets/project-resume-website/project-image.jpg';
import rockImage from '../assets/project-resume-website/rock.jpg';
import video0 from '../assets/project-resume-website/video0.mp4';
import video1 from '../assets/project-resume-website/video1.mp4';
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
            <h2 className={styles.title}>Resume Website</h2>
            <div className={styles['grid-container']}>
                <div className={styles['grid-item']}>
                    <p>My resume website project was an exciting and innovative journey powered by the cutting-edge capabilities of GPT-4. I sought to create a stunning website that showcased my projects and experience in a unique and engaging manner.</p>
                    <p>The development process was a dynamic collaboration between myself and GPT-4, the latest iteration of OpenAI's powerful language model. While GPT-4 provided valuable suggestions and insights throughout the project, it was essential to maintain an open dialogue to fine-tune the output and ensure the final product aligned with my vision. Though the AI didn't always get it right on the first attempt, its ability to adapt and improve over time made it an invaluable tool in the creation of my resume website.</p>
                </div>
                <div className={styles['grid-item']}>
                    <div className={styles['video-container']}>
                        <video
                            className={styles.video}
                            src={video0}
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
                    <p>One notable feature of the website is the mesmerizing AI-generated background video, which was crafted using a combination of cutting-edge technologies. I began by recording my own footage to get the general outline and subject of the video. To transform this raw material into the captivating background video, I utilized Stable Diffusion, Deforum, and ControlNet.</p>
                    <p>Stable Diffusion is a powerful technique used for synthesizing high-quality images and videos. It leverages the strengths of diffusion models while maintaining stability during the generation process. By employing Stable Diffusion, I was able to generate a visually stunning and fluid video that not only showcased my technical prowess but also added an extra layer of depth and intrigue to my resume website.</p>
                </div>
                <div className={styles['grid-item']}>
                    <div className={styles['video-container']}>
                        <video
                            className={styles.video}
                            src={video1}
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
                    <img src={rockImage} alt="Rock" className={styles['rock-image']} />
                </div>
                <div className={styles['grid-item']}>
                    <p>In conclusion, the creation of my resume website was a rewarding experience that allowed me to explore the potential of AI and cutting-edge technologies like GPT-4 and Stable Diffusion. The result is a visually stunning and engaging platform that effectively highlights my skills and expertise, demonstrating the power of collaboration between human creativity and artificial intelligence.</p>
                    <p>Note: Even this description was generated using GPT-4</p>
                </div>
                <div className={styles['grid-item']}>
                    <h3>Technologies Used:</h3>
                    <ul>
                        <li>React</li>
                        <li>Webpack</li>
                        <li>Yarn</li>
                        <li>Stable diffusion</li>
                        <li>Deforum</li>
                        <li>StableNet</li>
                        <li>GPT-4</li>
                        <li>Docker</li>
                    </ul>
                </div>
            </div>


            <div className={styles['buttons-container']}>
                <a
                    href="https://github.com/pinkponk/resume-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['github-button']}
                >
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={githubLogo} alt="GitHub logo" className={styles['github-logo']} />
                        Code
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