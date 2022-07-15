const { database } = require('./databaseManager');

// Insert data json into code table
function insertCode(data,res){
    let query = "INSERT INTO Code (code) VALUES (?)"
    database.run(query, [data.code], function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
        
    })
    return res;
}

// Select row from Code table using id_code
function getCodeById(codeId, res){
    let query = "SELECT * FROM Code WHERE id_code = ?"
    database.get(query, codeId, (err,data)=>{
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": codeId,
            "id" : this.lastID
        })
    });
}

module.exports = { insertCode, getCodeById };
