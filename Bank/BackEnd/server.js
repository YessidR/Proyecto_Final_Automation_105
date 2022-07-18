const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const http = require("http");

const localSvcRouter = require("./endpoints/routes/localSvcRoutes");
const onlineSvcRouter = require("./endpoints/routes/onlineSvcRoutes");
const busAccRouter = require("./endpoints/routes/busAccRoutes");
const usrAccRouter = require("./endpoints/routes/usrAccRoutes");
const tellerRouter = require("./endpoints/routes/tellerRoutes");
const universityRouter = require("./endpoints/routes/universityRoutes");
const userRouter = require("./endpoints/routes/userRoutes");

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

app.use("/localsvc", localSvcRouter);
app.use("/onlinesvc", onlineSvcRouter);
app.use("/busacc", busAccRouter);
app.use("/usracc", usrAccRouter);
app.use("/teller", tellerRouter);
app.use("/university", universityRouter);
app.use("/user", userRouter);

app.use((req, res) => {
    res.status(404);
    res.json({"Message": "404: Not found"});
});
