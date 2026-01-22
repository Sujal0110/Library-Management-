const dbUtil = require("../utility/dbutil.js");
exports.getTransactionDetails = async (req) => {
    try {
        let whereCondition = "";
        if (req.query.user_id) {
            whereCondition += ` AND transaction."userid" =${req.query.user_id} `;
        }

        if (req.query.book_id) {
            whereCondition += ` AND transaction."bookid" =${req.query.book_id} `;
        }
        const query = `select transaction.id, customer.id as user_id, transaction."userid",transaction."issue_date",transaction."due_date",transaction."return_date",transaction."fine", customer.name as user_name , transaction."bookid" ,books.name as book_name from transaction 
inner join customer on customer.id = transaction."userid" 
inner join books on books.id = transaction."bookid" where 1=1 ${whereCondition}`;

        const result = await dbUtil.query(query);
        return {
            status: 200,
            data: result,
        };
    } catch (error) {
        return {
            status: 500,
            data: {
                code: 500,
                message:
                    "Something went wrong while fetching transaction details",
            },
        };
    }
};
exports.isssueBook = async (req) => {
    try {
        let reqBody = req.body;
        console.log(reqBody);
        const query = `INSERT INTO transaction (userid, bookid, issue_date, return_date, fine, due_date) VALUES (${reqBody.userId}, ${reqBody.bookId}, CURRENT_DATE, NULL, 0, CURRENT_DATE)`;

        const result = await dbUtil.query(query);
        return {
            status: 200,
            data: result,
        };
    } catch (error) {
        return {
            status: 500,
            data: {
                code: 500,
                message: "Something went wrong while adding book",
            },
        };
    }
};

// return
exports.getUsersIssuedBooks = async (req) => {
    try {
        const query = `SELECT transaction.id AS transaction_id, books.id AS book_id, books.name AS book_name 
        FROM transaction transaction JOIN books ON transaction.bookid = books.id 
        WHERE transaction.userid = ${req.query.user_id} AND transaction.return_date IS NULL`;

        const result = await dbUtil.query(query);
        return {
            status: 200,
            data: result,
        };
    } catch (error) {
        return {
            status: 500,
            data: {
                code: 500,
                message:
                    "Something went wrong while fetching transaction details",
            },
        };
    }
};
exports.returnBook = async (req) => {
    try {
        const { user_id, book_id } = req.query;
        const query = `UPDATE transaction 
        SET return_date = CURRENT_DATE, 
        fine = GREATEST(CURRENT_DATE - due_date, 0) * 5
        WHERE userid = ${user_id} AND bookid = ${book_id}`;

        const result = await dbUtil.query(query);
        console.log(result);
        return {
            status: 200,
            data: result,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            data: {
                code: 500,
                message: "Something went wrong while returning a book",
            },
        };
    }
};
