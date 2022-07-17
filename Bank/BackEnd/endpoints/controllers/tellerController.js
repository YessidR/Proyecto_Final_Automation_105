const md5 = require("md5");
const db = require("../../database");

const tellers = (req, res, next) => {
    const query = "SELECT * FROM Teller";
   
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
}; // tellers

const tellerLogin = (req, res, next) => {
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
    const query = "SELECT ID FROM Teller WHERE Username = ? AND Password = ?";
    const params = [data.username, data.password];
    
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
}; // tellerLogin

const tellerLogin2 = (req, res, next) => {
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
        username: req.params.username,
        password: md5(req.params.password)
    };
    const params = [data.username, data.password];
    const query = "SELECT ID FROM Teller WHERE Username = ? AND Password = ?";

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
}; // tellerLogin2

const teller = (req, res, next) => {
    const query = "SELECT * FROM Teller WHERE ID = ?"
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
}; // teller

const tellerPost = (req, res, next) => {
    const errors = [];

    if (!req.body.name)
        errors.push("No name specified");
    if (!req.body.lastname)
        errors.push("No lastname specified");
    if (!req.body.username)
        errors.push("No username specified");
    if (!req.body.password)
        errors.push("No password specified");
    if (errors.length) {
        res.status(400).json({error: `${errors.join(", ")}.`});
        return;
    }

    const data = {
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        password : md5(req.body.password),
    };
    const query = 'INSERT INTO Teller (Name, Lastname, Username, Password) VALUES (?, ?, ?, ?)';
    const params = [data.name, data.lastname, data.username, data.password];
    
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
}; // tellerPost

const tellerPatch = (req, res, next) => {
    const data = {
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        password : req.body.password ? md5(req.body.password) : null,
    };
    const query = "UPDATE Teller SET Name = coalesce(?, Name), Lastname = coalesce(?, Lastname), Username = coalesce(?, Username), Password = coalesce(?, Password) WHERE ID = ?";
    const params = [data.name, data.lastname, data.username, data.password, req.params.id];
    console.log(params)
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
}; // tellerPatch

const tellerDelete = (req, res, next) => {
    const query = "DELETE FROM Teller WHERE ID = ?";
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
}; // tellerDelete

module.exports = {tellers, tellerLogin, tellerLogin2, teller, tellerPost, tellerPatch, tellerDelete};

