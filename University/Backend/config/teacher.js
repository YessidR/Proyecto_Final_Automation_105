const { database } = require('./databaseManager');

// Insert data json into Teacher table
function insertTeacher(data,res){
    let query = "INSERT INTO Teacher (first_name, last_name) VALUES (?,?)"
    database.run(query, [data], function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        });
        
    })
    return res;
}

// Delete Teacher row
function deleteTeacher(teacherId, res){
    database.run(
        'DELETE FROM Teacher WHERE id_teacher = ?',
        teacherId,
        function (err, result){
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"delete", changes: this.changes})
        }
    );
}

// Select row from Teacher table using id_teacher
function getTeacherById(teacherId, res){
    let query = "SELECT * FROM Teacher WHERE id_teacher = ?"
    database.get(query, teacherId, (err,data)=>{
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": teacherId,
            "id" : this.lastID
        });
    });
}

module.exports = { insertTeacher, deleteTeacher, getTeacherById };