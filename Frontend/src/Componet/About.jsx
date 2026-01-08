import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <section className="about-hero">
                <h1>About Our Library</h1>
                <p>
                    A smart and efficient Library Management System designed to
                    simplify book handling, member management, and daily
                    operations.
                </p>
            </section>
            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to modernize traditional libraries by
                    providing a digital solution that saves time, reduces manual
                    work, and improves the overall experience for both
                    librarians and readers.
                </p>
            </section>
            <section className="highlights">
                <h2>What We Offer</h2>

                <div className="highlight-cards">
                    <div className="card">
                        <h3>📘 Organized System</h3>
                        <p>
                            Keep all book and member data well-structured and
                            secure.
                        </p>
                    </div>

                    <div className="card">
                        <h3>⚡ Fast & Efficient</h3>
                        <p>Quick searching, issuing, and tracking of books.</p>
                    </div>

                    <div className="card">
                        <h3>🔐 Secure Data</h3>
                        <p>
                            Reliable data handling with role-based access
                            control.
                        </p>
                    </div>
                </div>
            </section>
            <section className="about-footer">
                <p>
                    This project is built to support educational institutions
                    and libraries in managing resources effectively.
                </p>
            </section>
        </div>
    );
};

export default About;
