const dbUtil = require("../utility/dbutil.js");

exports.getBooksList = async (req) => {
    try {
        const query = `SELECT * FROM books`;
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
                message: "Something went wrong while fetching books list",
            },
        };
    }
};
exports.addBook = async (req) => {
    try {
        let reqBody = req.body;
        const query = `INSERT INTO books (name, author, categorie, description) VALUES ('${reqBody.bookName}', '${reqBody.authorName}','${reqBody.bookCatogory}','${reqBody.bookDesc}')`;

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
exports.deleteBook = async (req) => {
    try {
        const query = `DELETE FROM books WHERE id = ${req.query.id}`;

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
                message: "Something went wrong while removing book",
            },
        };
    }
};
