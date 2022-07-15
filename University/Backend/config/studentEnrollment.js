const { database } = require('./databaseManager');

const getStudentEnrollmentById = (studentId, res) => { 
    let query = "SELECT * FROM Semester WHERE id_semester = ?"
    database.get(query, studentId, (err, data) => {
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

const getAllStudentEnrollment = (res) => { 
    let query = "SELECT * FROM Semester"
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

const insertStudentEnrollment = (data, res) => {
    let query = "INSERT INTO Semester (start_date, end_date, number, id_subject, id_student) VALUES (?, ?, ?, ?, ?)";
    database.run(query, [data.start_date, data.end_date, data.number, data.id_subject, data.id_student], function (err, result) {
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
}

const deleteStudent = (studentId, res) => {
    database.run(
        'DELETE FROM Semester WHERE id_semester = ?',
        studentId,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
}

module.exports = { getAllStudentEnrollment, getStudentEnrollmentById, insertStudentEnrollment, deleteStudent }