const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books.js");

router.get("/getBooksList", async (req, res, next) => {
    try {
        const { status, data } = await booksController.getBooksList(req);
        return res.status(status).send(data);
    } catch (error) {
        console.log("Err", error);
        next(error);
    }
});

router.post("/addBook", async (req, res, next) => {
    try {
        const { status, data } = await booksController.addBook(req);
        return res.status(status).send(data);
    } catch (error) {
        console.log("Err", error);
        next(error);
    }
});

router.delete("/deleteBook", async (req, res, next) => {
    try {
        const { status, data } = await booksController.deleteBook(req);
        return res.status(status).send(data);
    } catch (error) {
        console.log("Err", error);
        next(error);
    }
});

module.exports = router;
