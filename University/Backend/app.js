// Create express app
const express = require("express");
const app = express();
const enrollmentRouter = require("./routes/student");
<<<<<<< HEAD
// const createDBQuery = require('./config/databaseManager') // (Yessid - Presenta error la conexion a db)
=======
>>>>>>> eede30d89b1fee4301b3b5004f9b05bae92c449e
// Server port
const HTTP_PORT = 8000;
// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
});

<<<<<<< HEAD
// // Create Enrollment DB // (Yessid - Presenta error la conexion a db)
// db.run(createDBQuery, err => {
// 	if (err) {
// 		return console.error(err.message);
// 	}else{
// 		console.log("Table Enrollment created successfully")
//         console.log("The route is: " + db_name)
//         console.log("")
// 	}
// })

=======
>>>>>>> eede30d89b1fee4301b3b5004f9b05bae92c449e
app.use("/enrollment", enrollmentRouter);

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
