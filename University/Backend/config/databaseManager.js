let sqlite3 = require('sqlite3');
let db= new sqlite3.Database('./udb.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err && err.code == "SQLITE_CANT_OPEN") {
        createDatabase();
        return;
        } else if (err) {
            console.log("Getting error " + err);
            exit(1);
    }
    runQueries(db);
});

function createDatabase() {
    const newdb = new sqlite3.Database('udb.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        createTables(newdb);
    });
}

function createTables(db) {
    //Improvement: Use UDB Script.txt
    db.exec(
`
CREATE TABLE Career (
    id_career   INTEGER PRIMARY KEY AUTOINCREMENT
                        NOT NULL,
    name        TEXT    NOT NULL,
    id_semester INTEGER REFERENCES Semester (id_semester) 
                        NOT NULL,
    id_subject  INTEGER REFERENCES Subject (id_subject) 
                        NOT NULL
);


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
);


CREATE TABLE Subject (
    id_subject INTEGER PRIMARY KEY AUTOINCREMENT
                       NOT NULL,
    name       TEXT    NOT NULL,
    id_teacher INTEGER REFERENCES Teacher (id_teacher) 
                       NOT NULL
);

CREATE TABLE Teacher (
    id_teacher INTEGER PRIMARY KEY AUTOINCREMENT
                       NOT NULL,
    first_name TEXT    NOT NULL,
    last_name  TEXT    NOT NULL
);


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
);

CREATE TABLE Code (
    id_code INTEGER PRIMARY KEY AUTOINCREMENT
                    NOT NULL,
    code    TEXT    NOT NULL
                    UNIQUE
);

CREATE TABLE Enrollment (
    id_enrollment   INTEGER PRIMARY KEY AUTOINCREMENT
                         NOT NULL,
    validation_date DATE NOT NULL,
    date            DATE NOT NULL
);
        `, ()  => {
            storeEnrollmentJSON(db);
    });
}

// RECEIVE AND INSERT ENROLLMENT.JSON INTO DB
function storeEnrollmentJSON(db){
    db.serialize(function() {
/*
        let jsonEnrollment = require('./enrollment.json');
        let objEnrollment= JSON.stringify(jsonEnrollment);
*/
        let stmt = db.prepare('INSERT INTO Enrollment VALUES(json(?))');
        for (let i=0; i<10; i++) {
            stmt.run(JSON.stringify({ a: i }));
        }
        stmt.finalize();
        runQueries(db);
    })   
}

function runQueries(db) {
    db.all(`SELECT * FROM Enrollment`, (err, rows) => {
        rows.forEach(row => {
            console.log(row.id_enrollment + "\t" + row.validation_date + "\t" + row.date);
        });
    });
}

//Standard for tables:  ID = Partition
/*
function showTable(db) {
    let select="SELECT * FROM "; //todas las base de datos - leer de una table
    let table="Student "; // Table
    let where="WHERE id_student= ";
    let id_table="";
    let string=(select + table + where + id_table);   
}
*/

//receive data and return query


//when I get info from front, jugar con las combinaciones para enviar la petiticion

