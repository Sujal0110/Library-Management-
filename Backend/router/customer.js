const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.js");

router.get("/getCustomerList", async (req, res, next) => {
    try {
        const { status, data } = await customerController.getCustomerList(req);
        return res.status(status).send(data);
    } catch (error) {
        console.log("Err", error);
        next(error);
    }
});

router.post("/registerUser", async (req, res, next) => {
    try {
        const { status, data } = await customerController.registerUser(req);
        return res.status(status).send(data);
    } catch (error) {
        console.log("Err", error);
        next(error);
    }
});

module.exports = router;
