const express = require("express")
const router = express.Router();
const db = require("../database.js");

const pay = {

    DateTime: "10 agosto",
    Amount: "50",
    Type: "ahorros",
    Details: "pago virtual",

}

const apppayment = () => {
    let insert = 'INSERT INTO Transactions(Number,DateTime,Amount,Type,Details) VALUES (?,?,?,?,?)';
    db.run(insert, ["2", "10 agosto", 89,"ahorros", "pago virtual"],(err) => console.log(err))

}



router.post("/", async (req, res, next) => {
    apppayment();
    res.json({ pay });
});

module.exports = router 