const express = require("express");
const http = require("http");
const db = require("./database.js");
const paymentenrollement = require("./endpoints/routes/payment")
const login = require("./endpoints/routes/user")
const userlogin = require("./endpoints/routes/userlogin");

const app = express();
const server = http.createServer(app);
const HTTP_PORT = 8000;

server.listen(HTTP_PORT, () => {
    console.log("Server running on port", HTTP_PORT);
});

app.get("/", (req, res, next) => {
    res.status(200);
    res.json({"Message": "200: OK"});
});

app.use("/login", login)

app.use("/paymentenrollement", paymentenrollement)

app.use("/userlogin", userlogin);

app.use((req, res) => {
    res.status(404);
    res.json({"Message": "404: Not found"});
});
