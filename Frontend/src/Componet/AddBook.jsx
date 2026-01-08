import React, { useState } from "react";
import { toast } from "react-toastify";

const AddBook = () => {
    const [bookName, setbookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [bookCatogory, setBookCatogory] = useState("");
    const [bookDesc, setBookDesc] = useState("");
    const notify = () =>
        toast("Book Added", {
            position: "top-center",
        });

    const handleBookSubmit = async (e) => {
        e.preventDefault();
        try {
            let reqBody = {
                bookName,
                authorName,
                bookCatogory,
                bookDesc,
            };
            const response = await fetch(
                "http://localhost:3000/api/books/addBook",
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

            const data = await response.json();
            console.log("Book added successfully:", data);
            notify();
        } catch (error) {
            console.log(`Error creating post: ${error.message}`);
        }
    };

    return (
        <>
            <form className="p-5" onSubmit={handleBookSubmit}>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputName" className="form-label">
                        Book Name
                    </label>
                    <input
                        className="form-control w-25"
                        id="exampleInputName"
                        aria-describedby="emailHelp"
                        onChange={(e) => {
                            setbookName(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputAuthor" className="form-label">
                        Author Name
                    </label>
                    <input
                        className="form-control w-25"
                        id="exampleInputAuthor"
                        aria-describedby="emailHelp"
                        onChange={(e) => {
                            setAuthorName(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="InputCategory" className="form-label">
                        Category
                    </label>
                    <input
                        className="form-control w-25"
                        id="InputCategory"
                        aria-describedby="emailHelp"
                        onChange={(e) => {
                            setBookCatogory(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputDesc" className="form-label">
                        Book Description
                    </label>
                    <br />
                    <textarea
                        name="desc"
                        className="form-control w-25"
                        id="exampleInputDesc"
                        onChange={(e) => {
                            setBookDesc(e.target.value);
                        }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default AddBook;
