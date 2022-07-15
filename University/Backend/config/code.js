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

const getAllCode = (res) => { 
    let query = "SELECT * FROM Code"
    database.all(query, (err, data) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data": data
        })
      });
}

// Select row from Teacher table using id_teacher
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

// Delete Code row()
function deleteCode(codeId, res){
    database.run(
        'DELETE FROM Code WHERE id_code = ?',
        codeId,
        function (err, result){
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"delete", changes: this.changes})
        }
    );
}

module.exports = { insertCode, getCodeById, deleteCode, getAllCode};