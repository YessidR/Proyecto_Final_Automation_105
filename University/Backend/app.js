const http = require('http');
const express = require('express');
const app = express();
const enrollmentRouter = require("./routes/studentEnrollment");
const profileRouter = require("./routes/profile");
const subjectRouter = require("./routes/subject");
const teacherRouter = require("./routes/teacher");
const authenticationRouter = require("./routes/authentication");

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
app.use("/profile", profileRouter);
app.use("/subject", subjectRouter);
app.use("/teacher",teacherRouter);
app.use("/auth", authenticationRouter);



