const md5 = require("md5");
const db = require("../../database.js");

const universities = (req, res, next) => {
    const query = "SELECT * FROM University";
   
    db.all(query, (err, rows) => {
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        res.status(200).json({
            message: "Success",
            data: rows
        });
    });
}; // universities

const universityLogin = (req, res, next) => {
    const errors = [];

    if (!req.body.username)
        errors.push("No username specified");
    if (!req.body.password)
        errors.push("No password specified");
    if (errors.length) {
        res.status(400);
        res.json({error: `${errors.join(", ")}.`});
        return;
    }

    const data = {
        username: req.body.username,
        password : md5(req.body.password)
    };
    const query = "SELECT ID FROM University WHERE Username = ? AND Password = ?";
    const params = [data.username, data.password];

    db.get(query, params, (err, row) => {
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        res.status(200).json({
            message: "Success",
            id: row
        });
    });
}; // universityLogin

const universityLogin2 = (req, res, next) => {
    const errors = [];

    if (!req.params.username)
        errors.push("No username specified");
    if (!req.params.password)
        errors.push("No password specified");
    if (errors.length) {
        res.status(400).json({error: `${errors.join(", ")}.`});
        return;
    }

    const data = {
        Universityname: req.params.username,
        password: md5(req.params.password)
    };
    const params = [data.username, data.password];
    const query = "SELECT ID FROM University WHERE Username = ? AND Password = ?";

    db.get(query, params, (err, row) => {
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        res.status(200).json({
            message: "Success",
            id: row
        });
    });
}; // universityLogin2

const university = (req, res, next) => {
    const query = "SELECT * FROM University WHERE ID = ?"
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
}; // University

const universityPost = (req, res, next) => {
    const errors = [];

    if (!req.body.name)
        errors.push("No name specified");
    if (!req.body.depositamount)
        errors.push("No depositamount specified");
    if (!req.body.username)
        errors.push("No username specified");
    if (!req.body.password)
        errors.push("No password specified");
    if (!req.body.email)
        errors.push("No email specified");
    if (errors.length) {
        res.status(400).json({error: `${errors.join(", ")}.`});
        return;
    }

    const data = {
        name: req.body.name,
        depositamount: req.body.depositamount,
        Universityname: req.body.username,
        password : md5(req.body.password),
        email: req.body.email
    };
    const query = 'INSERT INTO University (Name, DepositAmount, Username, Password, Email) VALUES (?, ?, ?, ?, ?)';
    const params = [data.name, data.depositamount, data.username, data.password, data.email];

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
}; // universityPost

const universityPatch = (req, res, next) => {
    const data = {
        name: req.body.name,
        depositamount: req.body.depositamount,
        Universityname: req.body.username,
        password : req.body.password ? md5(req.body.password) : null,
        email: req.body.email
    };
    const query = "UPDATE University SET Name = coalesce(?, Name), DepositAmount = coalesce(?, DepositAmount), Username = coalesce(?, Universityname), Password = coalesce(?, Password), Email = coalesce(?, Email) WHERE ID = ?";
    const params = [data.name, data.depositamount, data.username, data.password, data.email, req.params.id];
    
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
}; // universityPatch

const universityDelete = (req, res, next) => {
    const query = "DELETE FROM University WHERE ID = ?";
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
}; // UniversityDelete

module.exports = {universities, universityLogin, universityLogin2, university, universityPost, universityPatch, universityDelete};
