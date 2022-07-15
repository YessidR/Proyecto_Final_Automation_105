const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();

const DB_PATH = "./Databases/Bank.db";

let db =  new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        console.log("Creating & populating a new database.");
        createNewDb();
    }
    else if (err) {
        console.error(err.message);
        throw err;
    }
    console.log("Connected to the Bank database.");
});

function createNewDb() {
    const newDb =  new sqlite3.Database(DB_PATH, (err) => {
        if (err) {
            console.error(err.message);
            throw err;
        }

        db = newDb;

        const sqlCreateTables = fs.readFileSync("./Databases/CreateTables.sql").toString().split(";");
        const sqlPopulateTables = fs.readFileSync("./Databases/PopulateTables.sql").toString().split(";");
        
        db.serialize(() => {
            db.run("BEGIN TRANSACTION;");

            sqlCreateTables.forEach((table) => {
                if (table)
                    db.run(table + ";", (err) => {
                        if (err) {
                            console.error(err.message);
                            throw err;
                        }
                    });                
            });

            db.run("COMMIT;");
        });

        db.serialize(() => {
            db.run("BEGIN TRANSACTION;");

            sqlPopulateTables.forEach((insert) => {
                if (insert)
                    db.run(insert + ";", (err) => {
                        if (err) {
                            console.error(err.message);
                            throw err;
                        }
                    });                
            });

            db.run("COMMIT;");
        });
    });
}

module.exports = db;
