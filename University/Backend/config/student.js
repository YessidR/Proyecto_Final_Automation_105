const { database } = require('./databaseManager');

// Insert data json into Student table
function insertStudent(data,res){
    let query = "INSERT INTO Student (first_name, last_name, phone, username, password, id_enrollment, id_code) VALUES (?,?,?,?,?,?,?)"
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

// Delete Student row
function deleteStudent(studentId, res){
    database.run(
        'DELETE FROM Student WHERE id_student = ?',
        studentId,
        function (err, result){
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"delete", changes: this.changes})
        }
    );
}

// Select row from Student table using student id
function getStudentById(studentId, res){
    let query = "SELECT * FROM Student WHERE id_student = ?"
    database.get(query, studentId, (err,data)=>{
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": studentId,
            "id" : this.lastID
        });
    });
}

module.exports = { insertStudent, deleteStudent, getStudentById };