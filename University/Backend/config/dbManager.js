// const {db_name, db} = require('./db.js')
const {DBSOURCE, database} = require('./database,js')

const sql_create_career = "CREATE TABLE IF NOT EXISTS Career(id_career INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT (30) NOT NULL, id_semester INTEGER NOT NULL);"

const sql_create_career2 = "CREATE TABLE IF NOT EXISTS XXXXX(id_career INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT (30) NOT NULL, id_semester INTEGER NOT NULL);"

// const sql_create_table_xxxxx (
//     id_career   INTEGER PRIMARY KEY AUTOINCREMENT
//                         NOT NULL,
//     name        TEXT    NOT NULL,
//     id_semester INTEGER REFERENCES Semester (id_semester) 
//                         NOT NULL,
//     id_subject  INTEGER REFERENCES Subject (id_subject) 
//                         NOT NULL
// );



// database.run(sql_create_career, err => {
//     if (err) {
//         return console.error(err.message);
//     } else {
//         console.log("Tabla carrera anexada correctamente")
//         console.log("la ruta es: " + DBSOURCE)
//         console.log("")
//     }
// })

// database.run(sql_create_career2, err => {
//     if (err) {
//         return console.error(err.message);
//     } else {
//         console.log("Tabla XXXXX anexada correctamente")
//         console.log("la ruta es: " + DBSOURCE)
//         console.log("")
//     }
// })