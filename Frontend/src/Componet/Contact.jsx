import React from "react";
import "./Contact.css";

export const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-header">
                <h1>Contact Us</h1>
                <p>We’re here to help you with any questions or support</p>
            </section>

            <section className="contact-content">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>
                        If you have any queries related to books, membership, or
                        library services, feel free to contact us.
                    </p>

                    <ul>
                        <li>📍 Address: City Library, Main Road, India</li>
                        <li>📞 Phone: +91 98765 43210</li>
                        <li>📧 Email: library@lms.com</li>
                        <li>⏰ Working Hours: Mon - Sat (9 AM - 6 PM)</li>
                    </ul>
                </div>

                <div className="contact-form">
                    <h2>Send a Message</h2>

                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};
