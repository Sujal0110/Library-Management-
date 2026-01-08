import { useEffect, useState } from "react";
import "./Transaction.css";
import { toast } from "react-toastify";

const Transaction = () => {
    const [transactionData, setTransactionData] = useState([]);
    const [userFilter, setUserFileter] = useState("");
    const [bookFilter, setBookFilter] = useState("");

    const [bookData, setBookData] = useState([]);
    const [userData, setUserData] = useState([]);
    const notify = () =>
        toast.error("Data Not Found!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const fetchTransactionData = async () => {
        try {
            let conditionStr = "";
            if (userFilter) {
                conditionStr += `user_id=${userFilter}&&`;
            }

            if (bookFilter) {
                conditionStr += `book_id=${bookFilter}`;
            }
            const response = await fetch(
                `http://localhost:3000/api/transaction/getTransactionDetails?${conditionStr}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if ((userFilter || bookFilter) && data.length === 0) {
                notify();
            }
            setTransactionData(data);
        } catch (error) {
            console.error("Error fetching transaction list:", error);
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
        fetchTransactionData();
    }, [bookFilter, userFilter]);

    return (
        <>
            <div className="transactions-page">
                <section className="transactions-header">
                    <h1>Book Transactions</h1>
                    <p>Track issued and returned books</p>
                </section>
                <section className="transaction-filters">
                    <h3>Filters</h3>

                    <div className="filter-controls">
                        <select
                            value={bookFilter}
                            onChange={(e) => setBookFilter(e.target.value)}>
                            <option value="">Select Book</option>
                            {bookData.map((book) => (
                                <option key={book.id} value={book.id}>
                                    {book.name}
                                </option>
                            ))}
                        </select>

                        <select
                            value={userFilter}
                            onChange={(e) => setUserFileter(e.target.value)}>
                            <option value="">Select User</option>
                            {userData.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>

                <section className="transactions-table-section">
                    <table className="transactions-table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Book Name</th>
                                <th>Issue Date</th>
                                <th>Return Date</th>
                                <th>Fine</th>
                            </tr>
                        </thead>

                        <tbody>
                            {transactionData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.user_name}</td>
                                    <td>{item.book_name}</td>
                                    <td>{item.issue_date}</td>
                                    <td>
                                        {item.return_date
                                            ? item.return_date
                                            : "Not Returned"}
                                    </td>
                                    <td>{item.fine}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    );
};

export default Transaction;
