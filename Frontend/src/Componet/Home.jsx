import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

export const Main = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1>Library Management System</h1>
                <p>
                    Manage books, members, and issue records efficiently with
                    our smart library system.
                </p>
                <div className="hero-buttons">
                    <NavLink className="btn btn-primary m-1" to={"/Book"}>
                        Explore Books
                    </NavLink>

                    <NavLink
                        to={"/UserRegistration"}
                        className="btn btn-outline-secondary m-1">
                        Get Started
                    </NavLink>
                </div>
            </section>

            <section className="features">
                <h2>Our Features</h2>

                <div className="feature-cards">
                    <div className="card">
                        <h3>📚 Book Management</h3>
                        <p>Add, update, delete, and search books easily.</p>
                    </div>

                    <div className="card">
                        <h3>👨‍🎓 Member Management</h3>
                        <p>Maintain records of students and members.</p>
                    </div>

                    <div className="card">
                        <h3>🔄 Issue & Return</h3>
                        <p>Track book issue and return dates accurately.</p>
                    </div>
                </div>
            </section>

            <section className="info">
                <h2>Why Choose Our Library?</h2>
                <p>
                    Our system helps libraries manage daily operations
                    efficiently, reduce paperwork, and improve user experience.
                </p>
            </section>
        </div>
    );
};
