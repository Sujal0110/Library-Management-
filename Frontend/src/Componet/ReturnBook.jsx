import React from "react";
import { useEffect, useState } from "react";
import "./ReturnBook.css";
import { toast } from "react-toastify";

const ReturnBook = () => {
    const [userData, setUserData] = useState([]);
    const [bookData, setBookData] = useState([]);
    const [userId, setUserId] = useState("");
    const [bookId, setBookId] = useState("");
    const notify = () =>
        toast.success("Book Submited", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

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
    const getBooks = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/transaction/getUsersIssuedBooks?user_id=${userId}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setBookData(data);
        } catch (error) {
            console.error("Error fetching Users:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:3000/api/transaction/returnBook?user_id=${userId}&book_id=${bookId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        // Add any other necessary headers, e.g., Authorization tokens
                    },
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            notify();
        } catch (error) {
            console.error("Error fetching Users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (userId) {
            getBooks();
        }
    }, [userId]);

    return (
        <>
            <div className="return-page">
                <section className="return-header">
                    <h1>Return Book</h1>
                    <p>Return an issued book to the library</p>
                </section>
                <section className="return-form-section">
                    <form className="return-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>User ID</label>
                            <select
                                id="userName"
                                className="form-select"
                                aria-label="Default select example"
                                value={userId}
                                onChange={(e) => {
                                    setUserId(e.target.value);
                                }}>
                                <option value="">Select User</option>
                                {userData.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Books</label>
                            <select
                                id="bookName"
                                className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setBookId(e.target.value);
                                }}>
                                <option value="">Select Book</option>
                                {bookData.map((book) => (
                                    <option
                                        key={book.transaction_id}
                                        value={book.book_id}>
                                        {book.book_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="return-btn">
                            Return Book
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default ReturnBook;
