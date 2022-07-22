const mysql = require('mysql');
require("dotenv").config();

const database = mysql.createConnection({  
    host: process.env.DBHOST,  
    user: process.env.DBUSER,  
    password: process.env.DBPASSWORD, 
    database: process.env.DATABASE
    //insecureAuth : true
});

database.connect(function(err) {  
    if (err) throw err;  
    console.log("Connected!");  
    database.query("CREATE DATABASE IF NOT EXISTS udb", function (err, result) {  
        if (err) throw err;  
        console.log("Database created");  
        createTables();
    });  
});  
// Database queries 
const careerTable = `CREATE TABLE IF NOT EXISTS Career (
    id_career   INTEGER PRIMARY KEY AUTO_INCREMENT
                        NOT NULL,
    name        TEXT    NOT NULL,
    id_semester INTEGER NOT NULL,
    id_subject  INTEGER NOT NULL
);
`

const semesterTable = `CREATE TABLE IF NOT EXISTS Semester (
    id_semester INTEGER PRIMARY KEY AUTO_INCREMENT
                        NOT NULL,
    start_date  DATE    NOT NULL,
    end_date    DATE    NOT NULL,
    number      INTEGER NOT NULL,
    id_subject  TEXT    NOT NULL,
    id_student  INTEGER NOT NULL
);
`

const subjectTable = `CREATE TABLE IF NOT EXISTS Subject (
    id_subject INTEGER PRIMARY KEY AUTO_INCREMENT
                       NOT NULL,
    name       TEXT    NOT NULL,
    id_teacher INTEGER NOT NULL,
    id_career  INTEGER NOT NULL
);
`

const teacherTable = `CREATE TABLE IF NOT EXISTS Teacher (
    id_teacher INTEGER PRIMARY KEY AUTO_INCREMENT
                       NOT NULL,
    first_name TEXT    NOT NULL,
    last_name  TEXT    NOT NULL
);
`

// Deleted foreign keys from (id_enrollment and id_code)
const studentTable = `CREATE TABLE IF NOT EXISTS Student (
    id_student    INTEGER PRIMARY KEY AUTO_INCREMENT
                          NOT NULL,
    first_name    TEXT    NOT NULL,
    last_name     TEXT    NOT NULL,
    phone         INTEGER NOT NULL,
    username      VARCHAR(255) UNIQUE
                          NOT NULL,
    password      VARCHAR(255) NOT NULL,
    status        BOOLEAN NOT NULL
);
`

// Edited to insert codes in this table
const enrollmentTable = `CREATE TABLE IF NOT EXISTS Enrollment (
    id   INTEGER PRIMARY KEY AUTO_INCREMENT 
                         NOT NULL,
    id_student      INTEGER UNIQUE
                         NOT NULL,
    validation_date DATE NOT NULL,
    date            DATE NOT NULL,
    code_1          TEXT NOT NULL,
    code_2          TEXT NOT NULL,
    code_3          TEXT NOT NULL,
    code_4          TEXT NOT NULL,
    code_5          TEXT NOT NULL
);
`
const createTables = () => {
    database.query(careerTable, function (err, result) {
        if (err) throw err;
        console.log("careerTable created");
    });
    database.query(semesterTable, function (err, result) {
        if (err) throw err;
        console.log("semesterTable created");
    });
    database.query(subjectTable, function (err, result) {
        if (err) throw err;
        console.log("subjectTable created");
    });
    database.query(teacherTable, function (err, result) {
        if (err) throw err;
        console.log("teacherTable created");
    });
    database.query(studentTable, function (err, result) {
        if (err) throw err;
        console.log("studentTable created");
    });
    database.query(enrollmentTable, function (err, result) {
        if (err) throw err;
        console.log("enrollmentTable created");
    });
}

module.exports = { database };
