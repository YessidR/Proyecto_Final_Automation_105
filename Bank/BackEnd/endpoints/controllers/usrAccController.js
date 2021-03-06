const db = require("../../database");

const accounts = (req, res, next) => {
    const query = "SELECT * FROM PersonalAccount WHERE UserID = ?";
    const params = [req.params.userid];
   
    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        res.status(200).json({
            message: "Success",
            data: rows
        });
    });
}; // accounts

const accountId = (req, res, next) => {
    const query = "SELECT * FROM PersonalAccount WHERE ID = ?"
    const params = [req.params.id];
    
    db.get(query, params, (err, row) => {
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        res.status(200).json({
            message: "Success",
            data: row
        });
    });
}; // account

const accountNumber = (req, res, next) => {
    const errors = [];

    if (!req.body.accountnumber)
        errors.push("No accountnumber specified");
    if (errors.length) {
        res.status(400);
        res.json({error: `${errors.join(", ")}.`});
        return;
    }

    const data = {
        accountnumber: req.body.accountnumber,
    };
    const query = "SELECT * FROM PersonalAccount WHERE Number = ?";
    const params = [data.accountnumber];

    db.get(query, params, (err, row) => {
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        res.status(200).json({
            message: "Success",
            data: row
        });
    });
}; // account

const accountPost = (req, res, next) => {
    const errors = [];

    if (!req.body.number)
        errors.push("No number specified");
    if (!req.body.balance)
        errors.push("No balance specified");
    if (!req.body.currency)
        errors.push("No currency specified");
    if (!req.body.type)
        errors.push("No type specified");
    if (!req.body.status)
        errors.push("No status specified");
    if (!req.body.userid)
        errors.push("No userid specified");
    if (errors.length) {
        res.status(400).json({error: `${errors.join(", ")}.`});
        return;
    }

    const data = {
        number: req.body.number,
        balance: req.body.balance,
        currency: req.body.currency,
        type : req.body.type,
        status: req.body.status,
        userid: req.body.userid
    };
    const query = `INSERT INTO PersonalAccount (Number, Balance, Currency, Type, Status, UserID) 
                    VALUES (?, ?, ?, ?, ?, ?)`;
    const params = [data.number, data.balance, data.currency, data.type, data.status, data.userid];

    db.run(query, params, function (err, result) {
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        res.status(200).json({
            message: "Success",
            data: data,
            id : this.lastID
        });
    });
}; // accountPost

const accountPatch = (req, res, next) => {
    const data = {
        number: req.body.number,
        balance: req.body.balance,
        currency: req.body.currency,
        type : req.body.type,
        status: req.body.status,
    };
    const query = `UPDATE PersonalAccount SET Number = coalesce(?, Number), Balance = coalesce(?, Balance), 
                    Currency = coalesce(?, Currency), Type = coalesce(?, Type), Status = coalesce(?, Status) 
                    WHERE ID = ?`;
    const params = [data.number, data.balance, data.currency, data.type, data.status, req.params.id];
    
    db.run(query, params, function (err, result) {
            if (err) {
                res.status(400).json({error: res.message})
                return;
            }
            res.status(200).json({
                message: "Success",
                data: data,
                changes: this.changes
            });
    });
}; // accountPatch

const accountDelete = (req, res, next) => {
    const query = "DELETE FROM PersonalAccount WHERE ID = ?";
    const params = [req.params.id];

    db.run(query, params, function (err, result) {
            if (err) {
                res.status(400).json({error: res.message})
                return;
            }
            res.status(200).json({
                message: "Success", 
                changes: this.changes
            });
    });
}; // accountDelete

module.exports = {accounts, accountId, accountNumber, accountPost, accountPatch, accountDelete};
