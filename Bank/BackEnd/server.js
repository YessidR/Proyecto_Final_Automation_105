const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const http = require("http");

const userRouter = require("./endpoints/routes/userRoutes");
const paymentenrollement = require("./endpoints/routes/payment");

const app = express();
const server = http.createServer(app);
const HTTP_PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
 }
app.use(cors(corsOptions));

server.listen(HTTP_PORT, () => {
    console.log("Server running on port", HTTP_PORT);
});

app.get("/", (req, res, next) => {
    res.status(200);
    res.json({"Message": "200: OK"});
});

app.use("/user", userRouter);

app.use("/paymentenrollement", paymentenrollement);

app.use((req, res) => {
    res.status(404);
    res.json({"Message": "404: Not found"});
});
