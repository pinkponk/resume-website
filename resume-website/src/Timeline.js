import React, { useEffect, useRef } from 'react';
import './Timeline.css';
import arc from './assets/time-arc.png';
import intmach from './assets/time-im.jpg';
import kth from './assets/time-kth.png';
import norra from './assets/time-norra.jpg';
import paper from './assets/time-paper.jpg';
import paternity from './assets/time-paternity.jpg';
import saab from './assets/time-saab.jpg';
import scania from './assets/time-scania.jpg';
import stipendium from './assets/time-stipendium.jpg';
import uiuc from './assets/time-uiuc.png';

const TimelineData = [
    {
        type: 'Paternity leave',
        date: '2023-ongoing',
        institution: '',
        image: paternity,
        details: [
            'I will start working in September 2023',
        ],
    },
    {
        type: 'Technical product manager (Data Fusion Product)',
        date: '2021-ongoing',
        institution: 'Saab Emerging Technologies AB',
        image: saab,
        details: [
            'The new software product was broken out 2021 to a new fully Saab owned company.',
            'As the Technical Product Manager for a data fusion product at a leading military company, I effectively strategized and developed a comprehensive product roadmap that aligned with our long-term vision. My primary responsibilities included:',
            '- Engaging with potential customers to gather requirements and tailor the product to their needs.',
            '- Designing and facilitating on-site proof of concept demonstrations for international customers, showcasing the product\'s capabilities and fostering trust in its effectiveness.',
            '- Collaborating with cross-functional teams to drive product development and align with customer requirements.',
            '- Continuously monitoring product performance, analyzing user feedback, and updating the product roadmap.',
            '- Establishing quality control standards and release management processes for seamless product delivery.',
            '- Prioritizing product backlog, balancing customer requirements, market trends, and resource availability.'

        ],
        skills: 'Gitlab, Scrum, AI, Product roadmap, Product backlog, Product vision'
    },
    {
        type: 'Robotics Engineer (Part-time)',
        date: '2014-ongoing',
        institution: 'Intelligent Machines Stockholm AB - Co-owner',
        image: intmach,
        details: [
            'As a versatile Robotics Engineer in a small robotics company, I contributed to numerous projects, most recently the development and release of an advanced floor marking robot for large-scale fairs. My key responsibilities included:',
            '- Participating in code development, hardware design, CAD modeling, and product testing.', ,
            '- Producing marketing materials such as demonstrations and promotional videos.',
            '- Adapting to various roles and acquiring new skills essential for a small company\'s success.',
            'Website: www.intmach.com',
        ],
        skills: 'Python, C++, ROS1, ROS2, OpenCV, Gazebo, Autodesk Inventor, 3D printing, Arduino, Raspberry Pi, Docker'
    },
    {
        type: 'Team lead (Data Fusion Product)',
        date: '2020-2021',
        institution: 'Saab AB - Cyber Security Department',
        image: saab,
        details: [
            'As a Team Lead for a military company, I managed and expanded a team of 4 to 10+ members, working on a complex data fusion product. My key responsibilities included:',
            '- Recruiting top talent to augment team capabilities and ensure a well-rounded skill set.',
            '- Participating in full-stack development and implementing novel AI models to enhance product capabilities.',
            '- Promoting the product at numerous presentations, increasing product visibility.',
            '- Providing technical guidance, fostering a collaborative team environment, and enabling professional growth.',
            '- Overseeing goals, priorities, and project roadmaps; monitoring progress and keeping stakeholders informed.',
        ],
        skills: ' Generative AI, GAN, seq2seq, LSTM, CNN, Object detection, Instance segmentation, image segmentation, kubernetes, microservices, Mongodb (nosql), Postgres (sql), ArangoDB (graph db), Milvus (ANN db), ceph (distributed storage), Prometheus, Grafana.'
    },
    {
        type: 'System developer (Data Fusion Product)',
        date: '2018-2020',
        institution: 'Saab AB - Cyber Security Department',
        image: saab,
        details: [
            'As a System Developer, I played a key role in creating a high-value military product from scratch, ultimately leading to the formation of a separate company. Working closely with my manager and a fellow developer, I tackled complex development tasks, including:',
            '- Designing and implementing microservices to ensure seamless system integration in complex operational contexts.',
            '- Developing unique AI models to optimize performance and enhance military capabilities.',
            '- Pioneering product growth into a standalone business by shaping the roadmap and building a skilled team.',
        ],
        skills: 'Python, Tensorflow, Pytorch, Javascript, docker, mongodb, kubernetes, REST, OpenAPI, Jenkins.'
    },
    {
        type: 'Software Developer (Automatic Sea Surveillance)',
        date: '2017-2018',
        institution: 'Saab AB - Data Fusion Department',
        image: saab,
        details: [
            'As a Software Developer, I focused on automatic sea surveillance, AI integration, and master\'s thesis research continuation. Key achievements included:',
            '- Developing algorithms and applications using Python, Java, and TensorFlow to enhance surveillance systems.',
            '- Pioneering AI exploration in products before its industry popularity, advocating and educating colleagues on its potential applications.',
            '- Contributing knowledge growth through insights from my master\'s thesis, promoting innovative solutions for surveillance enhancement.',
        ],
        skills: 'Python, Java, Protocol buffer, Tensorflow.'
    },
    {
        type: 'Master thesis',
        date: '2017',
        institution: 'Saab AB',
        image: saab,
        details: [
            'Studied how deep learning can be used in sea surveillance.',
            'Published the paper.',
        ],
        skills: 'Python, Tensorflow, Keras, Theano, Deep learning, CNN.'
    },

    {
        type: 'Education',
        date: '2011-2017',
        institution: 'Royal Institute of Technology, KTH Stockholm, Sweden',
        image: kth,
        details: [
            'Degree Program in Mechanical Engineering.',
            'Master’s Program in Engineering Design, Mechatronics.',
            'Sample coursework: Neural Networks and other learning systems, Dynamics and Motion Control, Mechatronics Advanced Course.',
        ],
    },
    {
        type: 'Scholarship',
        date: '2016',
        institution: 'Henrik Göranssons Sandviken Scholarship for excellent grades.',
        image: stipendium,
        details: [],
    },
    {
        type: 'Scholarship',
        date: '2016',
        institution: 'General Scholarship for excellent grades.',
        image: stipendium,
        details: [],
    },
    {
        type: 'KTH Summer job',
        date: '2016',
        institution: 'Royal Institute of Technology',
        image: kth,
        details: [
            'Designed and constructed a 3D lidar from a 2D lidar for a drone.',
            'Worked with Structural Designing, 3D Printing, Electronics, Machining.',
        ],
    },

    {
        type: 'Education',
        date: '2015-2016',
        institution: 'University of Illinois at Urbana Champaign, UIUC Champaign, USA',
        image: uiuc,
        details: [
            'Master’s Program in Engineering Design, Mechatronics.',
            'Sample coursework: Artificial intelligence, Embedded Systems, Robot Dynamics and Control.',
        ],
    },
    {
        type: 'KTH part time job',
        date: '2015-2016',
        institution: 'Royal Institute of Technology',
        image: kth,
        details: [
            'Worked as a teaching assistant in an electrical science course',
            'Worked with People, Teaching.',
        ],
    },

    {
        type: 'Bachelor thesis',
        date: '2015',
        institution: 'The Paralyzed Quadruped, A study of robotic gaits.',
        image: paper,
        details: [],
    },

    {
        type: 'Education',
        date: '2012-2013',
        institution: 'ARC Kyoto Language School Kyoto, Japan',
        image: arc,
        details: [
            'Japanese Language and Literature.',
        ],
    },
    {
        type: 'Summer job',
        date: '2013',
        institution: 'Scania AB',
        image: scania,
        details: [
            'Designed and created a calibration setup and a shakedown rig for the side air divertors of the new Scania truck.',
            'Designed numerous prototypes for fasteners of the top air diverter.',
            'Worked with CAD, Matlab Simulations, 3D Printing, FEA simulation.',
        ],
    },
    {
        type: 'Summer job',
        date: '2012',
        institution: 'Scania AB',
        image: scania,
        details: [
            'Designed and created an automatic air diverter for Scania trucks. The technology makes it possible to increase fuel efficiency.',
            'Worked with CAD, Matlab Simulations, 3D Printing.',
        ],
    },
    {
        type: 'Education',
        date: '2009-2011',
        institution: 'Norra Real, High School Stockholm, Sweden',
        image: norra,
        details: [
            'Science and Mathematics Program.',
        ],
    },
    {
        type: 'Scholarship',
        date: '2011',
        institution: 'Dialog-89',
        image: stipendium,
        details: ['scholarship for building a fully electrical motorcycle.'],
    },
];
const Timeline = () => {
    const timelineRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.5 }
        );

        const items = timelineRef.current.querySelectorAll('.timeline-item');
        items.forEach((item) => observer.observe(item));

        return () => {
            items.forEach((item) => observer.unobserve(item));
        };
    }, []);

    return (
        <section className="timeline" id="timeline" ref={timelineRef}>
            <h2>Education and Work Experience</h2>
            <div className="timeline-container">
                <div className="timeline-items">
                    {TimelineData.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <img src={item.image} alt="" />
                                <div className="timeline-text">
                                    <h3>{item.type}</h3>
                                    <h4>{item.date}</h4>
                                    <h5>{item.institution}</h5>
                                    <ul>
                                        {item.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                    <h5>{item.skills}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="timeline-line"></div>
                <div className="timeline-start-dot"></div>
                <div className="timeline-end-dot"></div>
            </div>
        </section>
    );
};

export default Timeline;