const dbUtil = require("../utility/dbutil.js");

exports.getCustomerList = async (req) => {
    try {
        const query = `SELECT * FROM customer`;
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
                message: "Something went wrong while fetching customer list",
            },
        };
    }
};
exports.registerUser = async (req) => {
    try {
        let reqBody = req.body;
        const query = `INSERT INTO customer (name, address, email, age) VALUES ('${reqBody.name}', '${reqBody.address}','${reqBody.email}', ${reqBody.age})`;

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
                message: "Something went wrong while adding user",
            },
        };
    }
};
