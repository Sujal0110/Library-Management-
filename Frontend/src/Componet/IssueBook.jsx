import React, { useState, useEffect } from "react";
import "./IssueBook.css";
import { toast } from "react-toastify";

const IssueBook = () => {
    const [bookData, setBookData] = useState([]);
    const [userData, setUserData] = useState([]);

    const [bookId, setBookId] = useState("");
    const [userId, setUserId] = useState("");

    const notify = () =>
        toast("Book issued Successfully.", {
            position: "top-center",
        });

    const fetchBooks = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/books/getBooksList"
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            setBookData(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/customer/getCustomerList"
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            setUserData(data);
        } catch (error) {
            console.error("Error fetching Users:", error);
        }
    };

    useEffect(() => {
        fetchBooks();
        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!bookId || !userId) {
            alert("Please select both Book and User");
            return;
        }

        const response = await fetch(
            "http://localhost:3000/api/transaction/issue",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    bookId,
                    userId,
                }),
            }
        );

        if (response.ok) {
            notify();
        }
    };

    return (
        <>
            <div className="issue-page">
                <section className="issue-header">
                    <h1>Issue Book</h1>
                    <p>Issue a book to a student or member</p>
                </section>

                <section className="issue-form-section">
                    <form className="issue-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Book Name</label>
                            <select
                                id="bookName"
                                className="form-select"
                                value={bookId}
                                aria-label="Default select example"
                                onChange={(e) => setBookId(e.target.value)}>
                                <option value="">Select Book</option>
                                {bookData.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Issued To</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}>
                                <option value="">Select User</option>
                                {userData.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="issue-btn">
                            Issue Book
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default IssueBook;
