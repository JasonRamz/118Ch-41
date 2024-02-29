import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className="contact-page page">
            <div className='contact'>
                <h1>Contact Us</h1>
                <p>Thank you for reaching out to LashRoom. We value your interest and are here to assist you in any way we can.</p>
                <p>Please feel free to use the form below to send us your inquiries, comments, or feedback. We aim to respond to all messages promptly.</p>
            </div>
                

            <div className="contact-form">
                <h2>Get In Touch</h2>
                <form className='form-container'>
                    <div>
                        <label>Name:</label>
                        <input type="text" id="name" name="name"  required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" id="email" name="email"  required />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                    <div>
                        <label>Message:</label><br />
                        <textarea id="message" name="message"  rows="4" required></textarea><br />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;

