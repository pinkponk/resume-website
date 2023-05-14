import React, { useEffect, useRef } from 'react';
import './Timeline.css';
import arc from './assets/time-arc.png';
import intmach from './assets/time-im.jpg';
import kth from './assets/time-kth.png';
import norra from './assets/time-norra.png';
import paper from './assets/time-paper.png';
import saab from './assets/time-saab.jpg';
import scania from './assets/time-scania.jpg';
import stipendium from './assets/time-stipendium.jpg';
import uiuc from './assets/time-uiuc.png';


const TimelineData = [
    {
        type: 'Experience',
        date: '2021-2022',
        institution: 'Saab Emerging Technologies AB Technical project manager',
        image: saab,
        details: [
            'The new software product was broken out 2021 to a new saab owned company.',
            'Understand customers needs and translate into product roadmap together with product vision',
        ],
    },
    {
        type: 'Experience',
        date: '2020-2021',
        institution: 'Saab AB Team lead',
        image: saab,
        details: [
            'I lead a fantastic development team that built a completely new Saab product',
            'Worked with: AI, kubernetes, microservices, many different databases, distributed storage and more.',
        ],
    },
    {
        type: 'Experience',
        date: '2018-2022',
        institution: 'Saab AB system developer',
        image: saab,
        details: [
            'Started up new product at the department of cyber security.',
            'Worked with full stack, system design, high performance AI features, databases.',
            'Worked with: Python, Tensorflow, Javascript, docker, mongodb, kubernetes, REST.',
        ],
    },
    {
        type: 'Experience',
        date: '2017-2018',
        institution: 'Saab AB software engineer',
        image: saab,
        details: [
            'Worked with automatic surveillance in the data fusion department.',
            'Continued master thesis research using AI and tracking.',
            'Worked with: Python, Java, Protocol buffer, Tensorflow.',
        ],
    },
    {
        type: 'Experience',
        date: '2017',
        institution: 'Saab AB Master thesis',
        image: saab,
        details: [
            'Studied how deep learning can be used in sea surveillance.',
            'Published the paper.',
            'Worked with: Python, Keras, Theano, Deep learning, CNN network.',
        ],
    },
    {
        type: 'Experience',
        date: '2014-ongoing',
        institution: 'Intelligent Machines Stockholm AB part owner',
        image: intmach,
        details: [
            'Product development in the field of robotics.',
            'Designed a commercial service robot in CAD.',
            'Webpage: www.intmach.com/starteng/home.html',
            'Worked with: ROS, CAD, C++, Matlab, CFD Simulation, Web Design.',
        ],
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
        type: 'Miscellaneous',
        date: '2016',
        institution: 'Henrik Göranssons Sandviken Scholarship for good grades.',
        image: stipendium,
        details: [],
    },
    {
        type: 'Miscellaneous',
        date: '2016',
        institution: 'General Scholarship for good grades.',
        image: stipendium,
        details: [],
    },
    {
        type: 'Experience',
        date: '2016',
        institution: 'Royal Institute of Technology, KTH Summer job',
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
        type: 'Experience',
        date: '2015-2016',
        institution: 'Royal Institute of Technology, KTH Part time',
        image: kth,
        details: [
            'Worked as a teaching assistant in an electrical science course',
            'Worked with People, Teaching.',
        ],
    },

    {
        type: 'Miscellaneous',
        date: '2015',
        institution: 'Bachelor thesis; The Paralyzed Quadruped, A study of robotic gaits.',
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
        type: 'Experience',
        date: '2013',
        institution: 'Scania AB Summer job',
        image: scania,
        details: [
            'Designed and created a calibration setup and a shakedown rig for the side air divertors of the new Scania truck.',
            'Designed numerous prototypes for fasteners of the top air diverter.',
            'Worked with CAD, Matlab Simulations, 3D Printing, FEA simulation.',
        ],
    },
    {
        type: 'Experience',
        date: '2012',
        institution: 'Scania AB Summer job',
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
        type: 'Miscellaneous',
        date: '2011',
        institution: 'Dialog-89 scholarship for building a fully electrical motorcycle.',
        image: stipendium,
        details: [],
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
                <div className="timeline-left">
                    {TimelineData.filter((_, index) => index % 2 === 0).map((item, index) => (
                        <div key={index} className="timeline-item left">
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="timeline-line">
                    <div className="timeline-start-dot"></div>
                    <div className="timeline-end-dot"></div>
                </div>
                <div className="timeline-right">
                    <span style={{ height: '100px', display: 'block' }}></span> {/* Add this line */}
                    {TimelineData.filter((_, index) => index % 2 !== 0).map((item, index) => (
                        <div key={index} className="timeline-item right">
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;