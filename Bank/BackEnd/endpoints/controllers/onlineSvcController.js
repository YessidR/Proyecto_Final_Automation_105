const db = require("../../database");

const transactions = (req, res, next) => {
    const query = "SELECT * FROM UniversityServiceOnline";
    const params = [];
   
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
}; // transactions

const transactionId = (req, res, next) => {
    const query = "SELECT * FROM UniversityServiceOnline WHERE ID = ?"
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
}; // transaction

const transactionStudentCode = (req, res, next) => {
    const errors = [];

    if (!req.body.studentcode)
        errors.push("No studentcode specified");
    if (errors.length) {
        res.status(400);
        res.json({error: `${errors.join(", ")}.`});
        return;
    }

    const data = {
        studentcode: req.body.studentcode,
    };
    const query = "SELECT StudentCode, DateTime, Amount, Details FROM UniversityServiceOnline WHERE StudentCode = ? ";
    const params = [data.studentcode];

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
}; // transaction

const transactionPost = (req, res, next) => {
    const errors = [];

    if (!req.body.transactionnumber)
        errors.push("No transactionnumber specified");
    if (!req.body.studentcode)
        errors.push("No studentcode specified");
    if (!req.body.datetime)
        errors.push("No datetime specified");
    if (!req.body.amount)
        errors.push("No amount specified");
    if (!req.body.universityaccountid)
        errors.push("No universityaccountid specified");
    if (!req.body.useraccountid)
        errors.push("No useraccountid specified");
    if (errors.length) {
        res.status(400).json({error: `${errors.join(", ")}.`});
        return;
    }

    const data = {
        transactionnumber: req.body.transactionnumber,
        studentcode: req.body.studentcode,
        datetime: req.body.datetime,
        amount: req.body.amount,
        details : req.body.details,
        universityaccountid: req.body.universityaccountid,
        useraccountid: req.body.useraccountid
    };
    const query = `INSERT INTO UniversityServiceOnline (TransactionNumber, StudentCode, DateTime, Amount, Details, 
                    UniversityAccountID, UserAccountID) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [data.transactionnumber, data.studentcode, data.datetime, data.amount, data.details, data.universityaccountid, 
                    data.useraccountid];

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
}; // transactionPost

const transactionPatch = (req, res, next) => {
    const data = {
        studentcode: req.body.studentcode,
        datetime: req.body.datetime,
        amount: req.body.amount,
        details : req.body.details,
    };
    const query = "UPDATE UniversityServiceOnline SET StudentCode = coalesce(?, StudentCode), DateTime = coalesce(?, DateTime), Amount = coalesce(?, Amount), Details = coalesce(?, Details) WHERE ID = ?";
    const params = [data.studentcode, data.datetime, data.amount, data.details, req.params.id];
    
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
}; // transactionPatch

const transactionDelete = (req, res, next) => {
    const query = "DELETE FROM UniversityServiceOnline WHERE ID = ?";
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
}; // transactionDelete

function getDepositAmount(universityId) {

} // getDepositAmount()

module.exports = {transactions, transactionId, transactionStudentCode, transactionPost, transactionPatch, transactionDelete};
