const { database } = require('./databaseManager');

// Insert data json into Career table
function insertCareer(data,res){
    let query = "INSERT INTO Career (name, id_semester, id_subject) VALUES (?,?,?)"
    database.run(query, [data], function (err, result) {
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

const getAllCareer = (res) => { 
    let query = "SELECT * FROM Career"
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

// Update Career row with data json
function updateCareer(data, semesterId, res){
    let query = 'UPDATE Career set id_semester= coalesce(?,id_semester) WHERE id_career = ?';
    database.run(query,[data,semesterId], function (err, result) {
        res.json({
            "message": "success",
            "data": data,
            changes : this.changes
        })
    });
}

// Delete Career row()
function deleteCareer(careerId, res){
    database.run(
        'DELETE FROM Career WHERE id_career = ?',
        careerId,
        function (err, result){
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"delete", changes: this.changes})
        }
    );
}

// Select row from Career table using career id
function getCareerById(careerId, res){
    let query = "SELECT * FROM Career WHERE id_career = ?"
    database.get(query, careerId, (err,data)=>{
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": careerId,
            "id" : this.lastID
        })
    });
}

module.exports = { insertCareer,updateCareer, deleteCareer, getCareerById, getAllCareer };