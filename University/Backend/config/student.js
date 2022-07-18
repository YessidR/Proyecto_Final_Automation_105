const { database } = require('./databaseManager');

// Insert data json into Student table
function insertStudent(data,res){
    let query = "INSERT INTO Student (first_name, last_name, phone, username, password, status, id_enrollment, id_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    database.run(query, [data.first_name, data.last_name, data.phone, data.username, data.password, data.status,data.id_enrollment, data.id_code], function (err, result) {
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

const getAllStudent = (res) => { 
    let query = "SELECT * FROM Student"
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
            "data": data,
            "id" : this.lastID
        });
    });
}

module.exports = { insertStudent, deleteStudent, getStudentById, getAllStudent};