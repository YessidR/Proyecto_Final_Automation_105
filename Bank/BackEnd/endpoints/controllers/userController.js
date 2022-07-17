const md5 = require("md5");
const db = require("../../database.js");

const users = (req, res, next) => {
    const query = "SELECT * FROM User";
   
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
}; // users

const userLogin = (req, res, next) => {
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
    const query = "SELECT ID FROM User WHERE Username = ? AND Password = ?";
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
}; // userLogin

const userLogin2 = (req, res, next) => {
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
    const query = "SELECT ID FROM User WHERE Username = ? AND Password = ?";

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
}; // userLogin2

const user = (req, res, next) => {
    const query = "SELECT * FROM User WHERE ID = ?"
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
}; // user

const userPost = (req, res, next) => {
    const errors = [];

    if (!req.body.name)
        errors.push("No name specified");
    if (!req.body.lastname)
        errors.push("No lastname specified");
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
        lastname: req.body.lastname,
        username: req.body.username,
        password : md5(req.body.password),
        email: req.body.email
    };
    const query = 'INSERT INTO User (Name, Lastname, Username, Password, Email) VALUES (?, ?, ?, ?, ?)';
    const params = [data.name, data.lastname, data.username, data.password, data.email];

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
}; // userPost

const userPatch = (req, res, next) => {
    const data = {
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        password : req.body.password ? md5(req.body.password) : null,
        email: req.body.email
    };
    const query = "UPDATE User SET Name = coalesce(?, Name), Lastname = coalesce(?, Lastname), Username = coalesce(?, Username), Password = coalesce(?, Password), Email = coalesce(?, Email) WHERE ID = ?";
    const params = [data.name, data.lastname, data.username, data.password, data.email, req.params.id];
    
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
}; // userPatch

const userDelete = (req, res, next) => {
    const query = "DELETE FROM User WHERE ID = ?";
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
}; // userDelete

module.exports = {users, userLogin, userLogin2, user, userPost, userPatch, userDelete};
