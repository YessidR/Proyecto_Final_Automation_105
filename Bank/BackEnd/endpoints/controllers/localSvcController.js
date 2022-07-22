const db = require("../../database");

class LocalSvcController {
    transactionId = (req, res, next) => {
        const query = "SELECT * FROM UniversityServiceLocal WHERE ID = ?"
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

    transactions = (req, res, next) => {
        const query = "SELECT * FROM UniversityServiceLocal";
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
    
    transactionStudentCode = (req, res, next) => {
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
        const query = "SELECT StudentCode, DateTime, Amount, Details FROM UniversityServiceLocal WHERE StudentCode = ? ";
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
    
    transactionPost = (req, res, next) => {
        const errors = [];
    
        if (!req.body.transactionnumber)
            errors.push("No transactionnumber specified");
        if (!req.body.clientid)
            errors.push("No clientid specified");
        if (!req.body.clientname)
            errors.push("No clientname specified");
        if (!req.body.studentcode)
            errors.push("No studentcode specified");
        if (!req.body.amount)
            errors.push("No amount specified");
        if (!req.body.universityaccountid)
            errors.push("No universityaccountid specified");
        if (!req.body.tellerid)
            errors.push("No tellerid specified");
        if (errors.length) {
            res.status(400).json({error: `${errors.join(", ")}.`});
            return;
        }
    
        const data = {
            transactionnumber: req.body.transactionnumber,
            clientid: req.body.clientid,
            clientname: req.body.clientname,
            studentcode: req.body.studentcode,
            datetime: Date(),
            amount: req.body.amount,
            details : req.body.details,
            universityaccountid: req.body.universityaccountid,
            tellerid: req.body.tellerid
        };
        // console.log(getDepositAmount(data.universityaccountid));
    
        const query = `INSERT INTO UniversityServiceLocal (TransactionNumber, ClientID, ClientName, StudentCode, 
                        DateTime, Amount, Details, UniversityAccountID, TellerID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const params = [data.transactionnumber, data.clientid, data.clientname, data.studentcode, data.datetime, 
                        data.amount, data.details, data.universityaccountid, data.tellerid];
    
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
    
    transactionPatch = (req, res, next) => {
        const data = {
            studentcode: req.body.studentcode,
            datetime: req.body.datetime,
            amount: req.body.amount,
            details : req.body.details,
        };
        const query = "UPDATE UniversityServiceLocal SET StudentCode = coalesce(?, StudentCode), DateTime = coalesce(?, DateTime), Amount = coalesce(?, Amount), Details = coalesce(?, Details) WHERE ID = ?";
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
    
    transactionDelete = (req, res, next) => {
        const query = "DELETE FROM UniversityServiceLocal WHERE ID = ?";
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
    
    getDepositAmount(universityAccountId) {
        const query = `SELECT University.DepositAmount FROM University, BussinessAccount WHERE BussinessAccount.ID = ? AND
                        BussinessAccount.ID = University.ID`;
        const params = [universityAccountId];
    
        db.get(query, params, (err, row) => {
            if (err)
                return {error: err.message};
            console.log(row.DepositAmount);
            return row.DepositAmount;
        });
    } // getDepositAmount()
} // LocalSvcController

module.exports = {LocalSvcController:LocalSvcController};
