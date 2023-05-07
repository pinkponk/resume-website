// src/EmailForm.js
import React from 'react';
import './EmailForm.css';

const EmailForm = () => {
    return (
        <section id="contact-form" className="email-form">
            <h2>Contact Me</h2>
            <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" required />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default EmailForm;