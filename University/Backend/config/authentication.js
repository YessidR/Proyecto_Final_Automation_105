const {database} = require('./databaseManager');

function getCredentials(data, res){
    let query = "SELECT * FROM Student WHERE username = ?"
    database.get(query, data.username, (err,data)=>{
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        });
    });
}

function getStudentByUsername(username, res){
    let query = "SELECT * FROM Student WHERE username = ?"
    database.get(query, username, (err,data)=>{
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        });
    });
}

module.exports = {getCredentials, getStudentByUsername}