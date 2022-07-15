const http = require('http');
const express = require('express');
const app = express();
<<<<<<< HEAD
const sqlite3 = require('sqlite3').verbose();
const path = require('path')

// Configurar servidor app
app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, ""));
app.use(express.urlencoded({extended:false}));

const enrollmentRouter = require("./routes/student");


const { createTables } = require('./config/databaseManager')

createTables()

// // Server port
const HTTP_PORT = 8001;

=======
const enrollmentRouter = require("./routes/studentEnrollment");
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

// Server port
const HTTP_PORT = 8000;
>>>>>>> 8c9e03b71622154686d8e3b4bd94ac6058a8c3a9
// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
});

<<<<<<< HEAD
app.use("/enrollment", enrollmentRouter); //


// console.log(`la direccion es ${path.join(__dirname)}`)
// app.use(express.static(__dirname));
// // app.use(express.static(__dirname+"../UI/html"));


// app.get('/asd'), (req, res) => {
//     res.render('../UI/html/index')
// }

// app.get('/'), (req, res) => {
//     res.render('index.html')
// }
=======
app.use(cors(corsOptions))
app.use("/enrollment", enrollmentRouter);
>>>>>>> 8c9e03b71622154686d8e3b4bd94ac6058a8c3a9


