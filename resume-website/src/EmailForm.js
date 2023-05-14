// src/EmailForm.js
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import './EmailForm.css';

const EmailForm = () => {
    const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_6wb2prf', 'template_ss3u4y3', formValues, 'WRQrgKpCdhF5XB_KV')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        setFormValues({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact-form" className="email-form">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formValues.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default EmailForm;