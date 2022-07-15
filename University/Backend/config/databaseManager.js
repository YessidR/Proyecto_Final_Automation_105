const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { Database } = require('sqlite3');
const dbPath = path.resolve('./config/udb.db');

let database = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err && err.code == "SQLITE_CANT_OPEN") {
        createDatabase();
        return;
    } else if (err) {
            console.log("Getting error " + err);
            exit(1);
    }
});

function createDatabase() {
    const newDB = new sqlite3.Database('./config/udb.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        database = newDB;
        createTables(newDB);
    });
}

/*
function readUDBScript(){
    const fs = require('fs')
    const dbScriptPath = path.resolve('./UDB script.txt');
    fs.readFile(dbScriptPath, 'utf-8', (err, data) => {
        if (err) throw err;
      
        // Converting Raw Buffer to text
        // data using tostring function.
        return data;
    })
}
*/

function createTables(db) {
    //Improvement: Use UDB Script.txt
    //Improvement Implemented: read script.txt and replaced script with scriptString. - Didn't work
    /*
    var fs = require("fs");
    fs.readFile("./UDB script.txt", function(text){
        var textByLine = text.split("\n")
    });
    */

// Function to read UDB_script - don't work yet
//readUDBScript()


    database.run( 
//Script Can Be Copy Pasted Here As Well
`
CREATE TABLE Career (
    id_career   INTEGER PRIMARY KEY AUTOINCREMENT
                        NOT NULL,
    name        TEXT    NOT NULL,
    id_semester INTEGER REFERENCES Semester (id_semester) 
                        NOT NULL,
    id_subject  INTEGER REFERENCES Subject (id_subject) 
                        NOT NULL
)
`
    );
    database.run(
`
CREATE TABLE Semester (
    id_semester INTEGER PRIMARY KEY AUTOINCREMENT
                        NOT NULL,
    start_date  DATE    NOT NULL,
    end_date    DATE    NOT NULL,
    number      INTEGER NOT NULL,
    id_subject  INTEGER REFERENCES Subject (id_subject) 
                        NOT NULL,
    id_student  INTEGER REFERENCES Student (id_student) 
                        NOT NULL
)
`
    );
    database.run(
`
CREATE TABLE Subject (
    id_subject INTEGER PRIMARY KEY AUTOINCREMENT
                       NOT NULL,
    name       TEXT    NOT NULL,
    id_teacher INTEGER REFERENCES Teacher (id_teacher) 
                       NOT NULL
)
`
    );
    database.run(
`
CREATE TABLE Teacher (
    id_teacher INTEGER PRIMARY KEY AUTOINCREMENT
                       NOT NULL,
    first_name TEXT    NOT NULL,
    last_name  TEXT    NOT NULL
)
`
    );
    database.run(
`
CREATE TABLE Student (
    id_student    INTEGER PRIMARY KEY AUTOINCREMENT
                          NOT NULL,
    first_name    TEXT    NOT NULL,
    last_name     TEXT    NOT NULL,
    phone         INTEGER NOT NULL,
    username      VARCHAR UNIQUE
                          NOT NULL,
    password      VARCHAR NOT NULL,
    id_enrollment INTEGER REFERENCES Enrollment (id_enrollment) 
                          NOT NULL,
    id_code       INTEGER REFERENCES Code (id_code) 
                          NOT NULL
)
`
    );
    database.run(
`
CREATE TABLE Code (
    id_code INTEGER PRIMARY KEY AUTOINCREMENT
                    NOT NULL,
    code    TEXT    NOT NULL
                    UNIQUE
)
`
    );
    database.run(
`
CREATE TABLE Enrollment (
    id_enrollment   INTEGER PRIMARY KEY AUTOINCREMENT
                         NOT NULL,
    validation_date DATE NOT NULL,
    date            DATE NOT NULL
);
`
    );
}

function studentEnrollment(data){
    let query = "INSERT INTO Enrollment (validation_date, date) VALUES (?, ?)"
    database.run(query, [data.validation_date, data.date], function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        });
    })
}

/*
function insertTable(tableName,values) {
    let stmt = database.prepare('INSERT INTO ' + tableName +  ' VALUES (' + values + ')');
        stmt.finalize();
}
*/
module.exports = { database, insertTable };