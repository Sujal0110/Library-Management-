import React, { useState } from "react";
import "./UserRegistration.css";
import { toast } from "react-toastify";

export const UserRegistration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const notify = () =>
        toast("User Register Successfully.", {
            position: "top-center",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let reqBody = {
                name,
                email,
                address,
                age,
            };
            const response = await fetch(
                "http://localhost:3000/api/customer/registerUser",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // Add any other necessary headers, e.g., Authorization tokens
                    },
                    body: JSON.stringify(reqBody),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            notify();
            setName("");
            setEmail("");
            setAge("");
            setAddress("");
        } catch (error) {
            console.log(`Error creating post: ${error.message}`);
        }
    };
    return (
        <>
            <div className="register-page">
                <section className="register-header">
                    <h1>New Member Registration</h1>
                    <p>Register to access library services</p>
                </section>

                <section className="register-form-section">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Age</label>
                            <input
                                type="number"
                                placeholder="Enter your age"
                                required
                                onChange={(e) => {
                                    setAge(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <textarea
                                rows="3"
                                placeholder="Enter your address"
                                required
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}></textarea>
                        </div>

                        <button type="submit" className="register-btn">
                            Register
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
};
