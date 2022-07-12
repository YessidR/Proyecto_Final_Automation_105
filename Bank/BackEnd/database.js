const sqlite3 = require("sqlite3").verbose();

const DB_PATH = "./databases/Bank.db";

const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    else
        console.log("Connected to the SQLite database.");
});

module.exports = db;
