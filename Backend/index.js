const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.text());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

const customerRoute = require("./router/customer.js");
app.use("/api/customer", customerRoute);

const booksRoute = require("./router/book.js");
app.use("/api/books", booksRoute);

const transactionRoute = require("./router/transaction.js");
app.use("/api/transaction", transactionRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
