const sqlite = require('sqlite3').verbose();
const DBSOURCE = "./udb";
const database = new sqlite.Database(DBSOURCE, (err) => {
    if(err) {
        console.log(err.message);
        throw err
    } else {
        console.log("Connected to database");
    }
});

module.exports = database;