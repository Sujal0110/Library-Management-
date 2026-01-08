import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "./Book.css";

export const Book = () => {
    const [tableData, setTableData] = useState([]);
    const notify = () =>
        toast("Delete successful", {
            position: "top-center",
        });

    const handleDelete = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/books/deleteBook?id=${id}`,
                {
                    method: "DELETE", // Specify the HTTP method
                    // Optional headers:
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            notify();
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    const fetchBooks = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/books/getBooksList"
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            setTableData(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <>
            <div className="books-page">
                <section className="books-header">
                    <h1>All Books</h1>
                    <p>View and manage all available books in the library</p>
                </section>
                <section className="books-table-section d-flex flex-column align-items-center">
                    <table className="books-table">
                        <thead>
                            <tr>
                                <th>Book ID</th>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tableData.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.categorie}</td>
                                    <td>{book.description}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            aria-label="Close"
                                            onClick={() =>
                                                handleDelete(book.id)
                                            }></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <NavLink
                        className="btn btn-outline-success m-3 w-25"
                        to={"/AddNewBook"}>
                        Add new book
                    </NavLink>{" "}
                </section>
            </div>
        </>
    );
};
