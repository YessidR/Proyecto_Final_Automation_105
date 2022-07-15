const express = require("express")
const router= express.Router();
const db = require("../../database.js");
const login={
    user:"",
    password:"",
        
}
    
// let insert = 'INSERT INTO User (Name, LastName, User, Password, Email, Phone, Address) VALUES (?,?,?,?,?,?,?)'



router.post("/", (req, res, next) => {

    
    res.json({login});
});

module.exports= router