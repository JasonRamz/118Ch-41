import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className="contact page">
                <h1>Contact Us</h1>
                <br />
                <h2>Email Address</h2>

                <p>You can reach us via email at:</p>
                <br />
                <h2>Contact Form</h2>
                <form>
                    <label>Name:</label>
                    <input name="name" required />
                    <br />
                    <br/>
                    <label>Email:</label>
                    <input name="email" required />
                    <br />
                    <br/>
                    <label>Message:</label><br />
                    <textarea className='message' rows="4" required></textarea><br />
                    <button type="submit">Submit</button>
                </form>
        </div>
    );
}

export default Contact;
