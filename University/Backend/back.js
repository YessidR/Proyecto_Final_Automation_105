const http = require('http'); // Realiza gestion de archivos web
const express = require('express'); // Genera app
const app = express(); // Instancia de paquete express
const sqlite3 = require('sqlite3').verbose(); // consulta en bd (verbose permite ver errores en db)
const path = require('path') // Genera proporciona enlaces

// Configurar servidor app
app.engine('html', require('ejs').renderFile); // Visualiza documentos html (Cannot find module 'html')
app.set("view engine", "html"); // Establece el motor de plantilla, con archivos ejs (embedded ejs)
app.set("views", path.join(__dirname, "")); // Permite gestionar las rutas de los diferentes recursos
app.use(express.urlencoded({extended:false}));  // Permite recuperar valores publicados en request
app.listen(5000); // Puerto del servidor 
console.log("Servidor corriendo en puerto 5000"); //

module.exports = {http, express, app, sqlite3, path}