const express = require("express");
const md5 = require("md5");
const db = require("../../database.js");

let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);

const userlogin = (req, res) => {
    
    let data = {
        username: req.body.username,
        password: md5(req.body.password)
    }

    console.log(data);

    let params = [data.username, data.password];

    const qryLogin = "SELECT count(*) FROM User WHERE Username = ? AND Password = ?";

    db.get(qryLogin, params, (err, row) => {
        if (err) {
            res.status(400);
            res.json({"Error": err.message});
        }
        res.status(200);
        res.json({
            "message": "success",
            "data": row
        });
    });
}

module.exports = userlogin;
