const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve('./config/udb.db');

const database = new sqlite3.Database(dbPath, err => {
    if (err) {
        return console.log("Getting error " + err);;
    } else {
        createTables();
    }
});

// Database queries 
const careerTable = `CREATE TABLE IF NOT EXISTS Career (
    id_career   INTEGER PRIMARY KEY AUTOINCREMENT
                        NOT NULL,
    name        TEXT    NOT NULL,
    id_semester INTEGER REFERENCES Semester (id_semester) 
                        NOT NULL,
    id_subject  INTEGER REFERENCES Subject (id_subject) 
                        NOT NULL
);
`

const semesterTable = `CREATE TABLE IF NOT EXISTS Semester (
    id_semester INTEGER PRIMARY KEY AUTOINCREMENT
                        NOT NULL,
    start_date  DATE    NOT NULL,
    end_date    DATE    NOT NULL,
    number      INTEGER NOT NULL,
    id_subject  TEXT    REFERENCES Subject (id_subject) 
                        NOT NULL,
    id_student  INTEGER REFERENCES Student (id_student) 
                        NOT NULL
);
`

const subjectTable = `CREATE TABLE IF NOT EXISTS Subject (
    id_subject INTEGER PRIMARY KEY AUTOINCREMENT
                       NOT NULL,
    name       TEXT    NOT NULL,
    id_teacher INTEGER REFERENCES Teacher (id_teacher) 
                       NOT NULL,
    id_career  INTEGER REFERENCES Career (id_career) 
);
`

const teacherTable = `CREATE TABLE IF NOT EXISTS Teacher (
    id_teacher INTEGER PRIMARY KEY AUTOINCREMENT
                       NOT NULL,
    first_name TEXT    NOT NULL,
    last_name  TEXT    NOT NULL
);
`

// Deleted foreign keys from (id_enrollment and id_code)
const studentTable = `CREATE TABLE IF NOT EXISTS Student (
    id_student    INTEGER PRIMARY KEY AUTOINCREMENT
                          NOT NULL,
    first_name    TEXT    NOT NULL,
    last_name     TEXT    NOT NULL,
    phone         INTEGER NOT NULL,
    username      VARCHAR UNIQUE
                          NOT NULL,
    password      VARCHAR NOT NULL,
    status        BOOLEAN

);
`

// Edited to insert codes in this table
const enrollmentTable = `CREATE TABLE IF NOT EXISTS Enrollment (
    id   INTEGER PRIMARY KEY AUTOINCREMENT 
                         NOT NULL,
    id_student      TEXT NOT NULL
                         UNIQUE,
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
    database.serialize(function(){
        database.run(teacherTable);
        database.run(enrollmentTable);
        database.run(studentTable);
        database.run(subjectTable);
        database.run(semesterTable);
        database.run(careerTable);
    })
}

module.exports = { database };
