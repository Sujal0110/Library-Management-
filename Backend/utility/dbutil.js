const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "library",
    password: "postgres",
    port: 5432, // Default PostgreSQL port
    max: 10, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
});

// Optional: Handle pool errors
pool.on("error", (err, client) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1); // Terminate the process if a critical error occurs
});

exports.query = async function (query) {
    const client = await pool.connect(); // Acquire a client from the pool
    try {
        const res = await client.query(query);
        return res.rows;
    } finally {
        client.release(); // Release the client back to the pool
    }
};
