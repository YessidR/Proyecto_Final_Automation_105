// Create express app
const express = require("express");
const app = express();
const enrollmentRouter = require("./routes/studentEnrollment");
<<<<<<< HEAD
const profileRouter = require("./routes/profile");
=======
const authenticationRouter = require("./routes/authentication");
>>>>>>> 26e05c47d0a187fcb0b08b935c8a5d0329ba72d5
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
const bodyParser = require('body-parser');

// Server port
const HTTP_PORT = 8000;
// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
});

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/enrollment", enrollmentRouter);
<<<<<<< HEAD
app.use("/profile", profileRouter);
=======
app.use("/auth", authenticationRouter)
>>>>>>> 26e05c47d0a187fcb0b08b935c8a5d0329ba72d5

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});


