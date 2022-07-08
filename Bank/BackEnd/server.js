const express = require("express");
const http = require("http");
const db = require("./database.js");
// const tellers = require("./api/v1/tellers");

const app = express();
const server = http.createServer(app);
const HTTP_PORT = 4444;

server.listen(HTTP_PORT, () => {
    console.log("Server running on port", HTTP_PORT);
});

app.get("/", (req, res) => {
    res.status(200);
    res.json({"Message": "200: OK"});
});

// app.use("/tellers", tellers);

app.use((req, res) => {
    res.status(404);
    res.json({"Message": "404: Not found"});
});
