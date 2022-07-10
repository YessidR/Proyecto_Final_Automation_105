// Create express app
const express = require("express");
const app = express();
const enrollmentRouter = require("./routes/student");

// Server port
const HTTP_PORT = 8000;

// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
});

app.use("/enrollment", enrollmentRouter);

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});