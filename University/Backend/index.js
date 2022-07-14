// Files Imported from back.js
const {express, app} = require('./back.js')

// Recursos (ubicacion de pagina web, y archivos)
app.use(express.static(__dirname+'/'));

// // Files Imported from db.js
// const {db_name, db} = require('./db.js')

// const sql_create_career = "CREATE TABLE IF NOT EXISTS Career(id_career INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT (30) NOT NULL, id_semester INTEGER NOT NULL);"

// const sql_create_career2 = "CREATE TABLE IF NOT EXISTS XXXXX(id_career INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT (30) NOT NULL, id_semester INTEGER NOT NULL);"

// db.run(sql_create_career, err => {
//     if (err) {
//         return console.error(err.message);
//     } else {
//         console.log("Tabla carrera anexada correctamente")
//         console.log("la ruta es: " + db_name)
//         console.log("")
//     }
// })

// db.run(sql_create_career2, err => {
//     if (err) {
//         return console.error(err.message);
//     } else {
//         console.log("Tabla XXXXX anexada correctamente")
//         console.log("la ruta es: " + db_name)
//         console.log("")
//     }
// })

app.get('/back1', (req, res) => {
    res.render('index.html')
})

app.get('/back2', (req, res) => {
    res.render('back.ejs')
})