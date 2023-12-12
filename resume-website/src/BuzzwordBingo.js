// src/BuzzwordBingo.js
import React from 'react';
import './BuzzwordBingo.css';
import SkillGrid from './SkillGrid';


const BuzzwordBingo = () => {
    const skillGroups = [
        {
            name: 'Programming',
            color: '#FE938C',
            skills: [
                { name: 'Python', strong: true, description: 'I have use Python since 2011 and it is the language I have written the most code in. Everything from ROS, Tensorflow to a flora of microservices.' },
                { name: 'Rust', strong: true, description: 'Proficient in Rust programming since I decided to write Life Code (See projects) with it. It is a lovely language and I prefer it much more to C++.' },
                { name: 'Linux', strong: true, description: 'I always use Linux when doing anything with programming. I have used mostly Ubuntu since its 12.04 release but I have dabbled with other Linux based OS such as PopOS, Kali Linux, Fedora.' },
                { name: 'Git', strong: true, description: 'I always use git as version control when I code and have done since University.' },
                { name: 'Docker', strong: true, description: 'I have used Docker for a long time, I have used it with Docker swarm, running on AI gpu machines, Kubernetes, Docker compose, on Robot computer. I even use docker together with Vscode dev container extension.' },
                { name: 'Kubernetes', strong: true, description: 'Proficient in orchestrating containers with Kubernetes. I have run kubernetes on own servers, having 100+ pods running. I have used it together with Ceph, MetalLb, Istio.' },
                { name: 'Tensorflow', strong: true, description: 'I have used Tensorflow since it first came out. I have written both low level AI models but also high level Ai models. I have gotten my share of segfault/NaNs and developed original models using both TF1.0 and TF2.0.' },
                { name: 'Pytorch', strong: true, description: 'I have used Pytorch to make some models but not as much as I have with Tensorflow' },
                { name: 'Bevy', strong: true, description: 'Life Code (see projects) is written with Bevy and I have been part of the Bevy journey since v0.6. I have had long discord conversations with the developers and have even contributed to the Code.' },
                { name: 'Javascript', strong: false, description: 'Familiar with Javascript programming. I have done some frontend work and this website but I am not a hardcore frontend developer.' },
                { name: 'Web assembly', strong: false, description: 'Experience with Web assembly due to how Life Code runs in the browser. I compile my Rust code to Wasm' },
                { name: 'OpenAPI', strong: false, description: 'I have used OpenAPI for API documentation for most of my Python services together with the Swagger GUI and FastAPI' },
                { name: 'FastAPI', strong: false, description: 'I have used FastAPI for many Python services and I am experienced in developing web applications with FastAPI' },
                { name: 'Poetry', strong: false, description: 'Poetry is my choice of poison when it comes to Python dependency management' },
                { name: 'C++', strong: false, description: 'Experience with C++ programming. I have written Robot code using C++ and ROS.' },
                { name: 'Simulink', strong: false, description: 'Familiar with Simulink for modeling and simulation. Spend countless of nights in the Robotics lab starring at complicated Simulink simulations.' },
                { name: 'Vim', strong: false, description: 'I use vim as opposed to nano or emcas when I need to edit files fast or have a SSH connection. #Sorry emacs lovers.' },
                { name: 'Matlab', strong: false, description: 'Did a lot of Matlab in my university days och summer job but I have not used it since then.' },
                { name: 'C', strong: false, description: 'I have done my share of C programming on micro-controllers but today I would prefer using Rust if performance is important.' },
                { name: 'Java', strong: false, description: 'I used Java at my first Job but it was also the first object oriented language I learnt.' },
                { name: 'Webpack', strong: false, description: 'Experience using Webpack for bundling. I use for example for this website' },
                { name: 'Anaconda', strong: false, description: 'Before I used Poetry+venv I used Anaconda.' },
                { name: 'Vscode', strong: false, description: 'Experience using Visual Studio Code. I use Vscode for all other languages except Python.' },
                { name: 'Pycharm', strong: false, description: 'I use Pycharm IDE for all my Python needs.' },
                { name: 'Build pipelines', strong: false, description: 'Experience with build pipelines, I have made pipelines using both Jenkins, Tekton and Gitlab.' },
                { name: 'Jupyter', strong: false, description: 'I use Jupyter notebooks when I need to prototype something or experiment with especially AI models and Datasets.' },
                { name: 'Bash', strong: false, description: 'Experience with Bash scripting' },
                { name: 'Streamlit', strong: false, description: 'I have used Streamlit for making web apps for my AI models.' },
                { name: 'Devcontainers', strong: false, description: 'I use devcontainers for all my development.' },
            ],
        },
        {
            name: 'Artificial Intelligence',
            color: '#E6B89C',
            skills: [
                { name: 'GMM', strong: true, description: 'I love the concept of Gaussian Mixture Models and have even made a 3D version once.' },
                { name: 'Unsuper learning', strong: true, description: 'Proficient in unsupervised learning techniques. I have made many AI models which together with different clustering algorithms.' },
                { name: 'Seq2Seq', strong: true, description: 'Experienced in sequence-to-sequence models. I have written complicated low level LSTM seq2seq models.' },
                { name: 'Object detection', strong: true, description: 'Skilled in object detection algorithms. I have used for example, Detectron, Faster R-CNN, YOLO and more. I have mostly used it on satellite images.' },
                { name: 'Anomaly detection', strong: true, description: 'I have developed my own anomaly detection techniques. It is a complicated subject and it can be achieved in many different ways.' },
                { name: 'Transformer', strong: false, description: 'Familiar with Transformer models. I have for exampled run early versions of GPT and trained NLP using transformers.' },
                { name: 'LSTM', strong: false, description: 'Experience using LSTM networks. Today I would use a transformer instead.' },
                { name: 'RL', strong: false, description: 'Familiar with Reinforcement Learning. I trained PPO models on a game I made.' },
                { name: 'GAN', strong: false, description: 'Experience with Generative Adversarial Networks. For better or worse I have dabbled with GAN, it is a love/hate relationship. I love its multimodal attributes but hate the fragility of the training. I have used GAN for, image generation, anomaly detection and path prediction. If I would do image generation again I would probably used diffusion methods instead.' },
                { name: 'VAE', strong: false, description: 'Familiar with Variational Autoencoders' },
                { name: 'NLP', strong: false, description: 'Experience with Natural Language Processing techniques and algorithms.' },
                { name: 'LLM', strong: true, description: 'Well versed in using Large Language Models.' },
                { name: 'GPT', strong: false, description: 'OpenAI is my LLM provider of choice.' },
                { name: 'Dall-E 3', strong: false, description: 'I have used Dall-E 3 to generate plenty of images.' },
                { name: 'Whisper', strong: false, description: 'Transcriping audio to text using Whisper.' },
                { name: 'Midjourney', strong: false, description: 'Used when needing more stylized images.' },
                { name: 'ControlNet', strong: false, description: 'Used with stable diffusion for controlling the diffusion process.' },
                { name: 'Stable diffusion', strong: false, description: 'Used for image/video generation locally together with ControlNet and Deforum.' },
                // { name: 'Deforum', strong: false, description: 'Used for image/video generation locally together with ControlNet and Stable diffusion.' },
                { name: 'Huggingface', strong: false, description: 'I use Huggingface for all my NLP needs.' },
                { name: 'RAG', strong: false, description: 'I have used RAG for question answering.' },
                { name: 'COT', strong: false, description: 'I have used COT when running AI agents.' },
                { name: 'Langchain', strong: false, description: 'I have used Langchain for my AI agent development.' },
                { name: 'Function calling', strong: false, description: 'I have used function calling for my AI agent development.' },

            ],
        },
        {
            name: 'Robotics',
            color: '#EAD2AC',
            skills: [
                { name: 'ROS1', strong: true, description: 'I have made many robots using ROS1.' },
                { name: 'ROS2', strong: true, description: 'Proficient in ROS2. I have recently used it together with C++ even though I prefer Python when it comes to ROS.' },
                { name: 'Inventor', strong: true, description: 'Experienced in using Autodesk Inventor. I have made CAD models with Inventor since 2011.' },
                { name: 'Control Theory', strong: true, description: 'Skilled in Control Theory for robotics. I have controlled everything from robotics arms and robotics dogs (no not Spot but I would love to get my hands on one!) to simple PID controllers.' },
                { name: 'Blender', strong: false, description: 'I have used Blender for 3D modeling, animation and video editing. I have done all the models and animation for Life Code (see projects) in Blender.' },
                { name: '3D Printing', strong: true, description: 'I have both a FDM and a Resin printer (Anycubic Photon 3m max) at home. I got my first 3d printer 8 years ago.' },
                { name: 'Solid Edge', strong: false, description: 'Familiar with Solid Edge for CAD, I used it in the university.' },
                { name: 'Embedded', strong: false, description: 'Experience with embedded systems.' },
                { name: 'Gazebo', strong: false, description: 'I have setup full robot simulation together with Lidar, bumper, motors with Gazebo. I run it within a container.' },
                { name: 'Webots', strong: false, description: 'Experience with Webots for robot simulation' },
                { name: 'Raspberry Pi', strong: false, description: 'Experience with Raspberry Pi for embedded systems. The goto hobby project computer. I have used it for everything from tweeting pictures of my ecosystem and Halloween projects to submerged sensors.' },
            ],
        },
    ];


    const SkillLegend = () => {
        return (
            <div className="skill-legend">
                <div className="legend-item">
                    <div className="legend-group">
                        <span className="legend-star">⭐</span> Strong Skills
                    </div>
                </div>
                <div className="legend-item">
                    {skillGroups.map((group) => (
                        <div key={group.name} className="legend-group">
                            <div className="legend-color" style={{ backgroundColor: group.color }}></div>
                            {group.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section className="buzzword-bingo" id="buzzword-bingo">
            <h2>Buzzword Bingo</h2>
            <div className="buzzword-bingo-content">
                <div className="buzzword-bingo-text">
                    <p>
                        I have experience with both software and hardware development and that comes with a wide range of technologies and tools. So I thought why not present in a more enjoyable way. Hover for more context.
                    </p>
                    <SkillGrid skillGroups={skillGroups} />
                    <SkillLegend />
                </div>
            </div>
        </section>
    );
};


export default BuzzwordBingo;