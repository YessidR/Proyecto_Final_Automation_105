const sqlite3 = require('sqlite3').verbose(); // consulta en bd (verbose permite ver errores en db)
const path = require('path') // Genera proporciona enlaces

// Configuracion de base de datos
const DBSOURCE = path.resolve('./udb.db'); // Ubicacion de db
const database = new sqlite3.Database(DBSOURCE, err => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log("Connected to database")
    }
})

module.exports = {DBSOURCE, database}