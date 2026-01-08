import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { UserRegistration } from "./UserRegistration";
import { Book } from "./Book";
import { Main } from "./Home";
import About from "./About";
import { Contact } from "./Contact";
import AddBook from "./AddBook";
import IssueBook from "./IssueBook";
import ReturnBook from "./ReturnBook";
import Transaction from "./Transaction";

export const Navbar = () => {
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">
                            <img
                                src="./src/assets/icons8-library.png"
                                alt=""></img>
                            Public Library
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Book">
                                        Books
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/About">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Contact">
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/issueBook">
                                        Issue Book
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/returnBook">
                                        Return Book
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/transaction">
                                        View Transaction
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <NavLink
                        className="btn btn-outline-success me-3"
                        to="/UserRegistration">
                        NewRegister
                    </NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route
                        path="/UserRegistration"
                        element={<UserRegistration />}
                    />
                    <Route path="/Book" element={<Book />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/AddNewBook" element={<AddBook />} />
                    <Route path="/issueBook" element={<IssueBook />} />
                    <Route path="/returnBook" element={<ReturnBook />} />
                    <Route path="/transaction" element={<Transaction />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
