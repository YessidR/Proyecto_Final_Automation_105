// Create express app
const express = require("express");
const app = express();
const enrollmentRouter = require("./routes/studentEnrollment");
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

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});

