import React from 'react';
import './home.css';

function GoogleMaps() {
    return (
        <iframe
            title="Google Maps"
            width="600"
            height="450"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.174970454839!2d-117.08171318480277!3d32.716768289443276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954382e7415a5%3A0x5c24cda6a90d7641!2s500%20Terry%20A%20Francois%20Blvd%2C%20San%20Francisco%2C%20CA%2094108%2C%20USA!5e0!3m2!1sen!2suk!4v1646150630274!5m2!1sen!2suk"
        />
    );
}

function Home() {
    const goToGoogleMaps = () => {
        window.location.href = 'https://www.google.com/maps?q=500+terry+Frencine+street,+San+Diego,+CA+92173';
    };

    return (
        <div className="page">
            <main>
                <section className='welcome'>
                    <div className="welcome-img">
                    </div>
                </section>
                <section className="features">
                    <div className="feature">
                        <img src="/img/classic .jpeg" alt="Classic Lashes" />
                        <h3>Classic Lashes</h3>
                        <p>Enhance your natural lashes with our classic lash extensions.</p>
                    </div>
                    <div className="feature">
                        <img src="/img/eyelash.png" alt="Volume Lashes" />
                        <h3>Volume Lashes</h3>
                        <p>Get fuller, more dramatic lashes with our volume lash extensions.</p>
                    </div>
                    <div className="feature">
                        <img src="/img/eyelift.jpeg" alt="Lash Lift" />
                        <h3>Lash Lift</h3>
                        <p>Give your lashes a natural curl and lift with our lash lift treatment.</p>
                    </div>
                </section>
                <br />
                <h2>Special Offers</h2>
                <p>Check out our latest special offers and promotions.</p>
                <section className="special-offers">
                    <div className="offer">
                        <h3>50% Off Classic Lash Extensions</h3>
                        <p>Valid until March 31st, 2024. Don't miss out!</p>
                    </div>
                    <div className="offer">
                        <h3>Free Nail Art with Every Manicure</h3>
                        <p>Available for a limited time only. Book now!</p>
                    </div>
                </section>
                <h2>Testimonials</h2>
                <div className="testimonial-container">
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                            <p className="testimonial-author">John Doe</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p className="testimonial-text">"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
                            <p className="testimonial-author">Jane Smith</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p className="testimonial-text">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                            <p className="testimonial-author">David Johnson</p>
                        </div>
                    </div>
                </div>
                <div className="visit-us-form-container">
                    <h2>Visit Us</h2>
                    <p><strong>500 Terry Francois Street, San Francisco, CA 94158</strong></p>
                    <div>
                        <h3>Opening Hours</h3>
                        <p>Mon-Fri: 7am-10pm     \      Saturday:8am-10pm \  Sunday:8am-11pm</p>
                    </div>
                    <button className="cta-button" onClick={goToGoogleMaps}>
                        Open in Google Maps
                    </button>
                </div>
                <section className="contact">
                    <h2>Contact Us</h2>
                    <p>Get in touch with us for appointments and inquiries.</p>
                    <div className="contact-info">
                        <p><strong>Phone:</strong> 123-456-7890</p>
                        <p><strong>Email:</strong> info@lashroom.com</p>
                        <p><strong>Address:</strong> 123 Beauty Street, City, Country</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default Home;