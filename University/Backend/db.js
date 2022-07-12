// const {http, express, app, sqlite3, path} = require('./back.js')
const {sqlite3, path} = require('./back.js')

// Configuracion de base de datos
const db_name = path.join(__dirname, "db", "udb.db"); // Ubicacion de db
const db = new sqlite3.Database(db_name, err => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log("Conexion exitosa con la base de datos")
    }
})

// Crear funcion para crear tablas, y peticiones de la base de datos...

module.exports = {db_name, db}