const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaction.js");

router.get("/getTransactionDetails", async (req, res, next) => {
    try {
        const { status, data } =
            await transactionController.getTransactionDetails(req);
        return res.status(status).send(data);
    } catch (error) {
        console.log("Err", error);
        next(error);
    }
});
router.get("/getUsersIssuedBooks", async (req, res, next) => {
    try {
        const { status, data } =
            await transactionController.getUsersIssuedBooks(req);
        return res.status(status).send(data);
    } catch (error) {
        console.log("Err", error);
        next(error);
    }
});
router.post("/issue", async (req, res, next) => {
    try {
        const { status, data } = await transactionController.isssueBook(req);
        return res.status(status).send(data);
    } catch (error) {
        console.log("Err", error);
        next(error);
    }
});
router.patch("/returnBook", async (req, res, next) => {
    try {
        const { status, data } = await transactionController.returnBook(req);
        return res.status(status).send(data);
    } catch (error) {
        console.log("Err", error);
        next(error);
    }
});

module.exports = router;
