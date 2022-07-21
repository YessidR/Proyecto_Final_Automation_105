const { database } = require('./databaseManager');

const getAllEnrollment = (res) => { 
    let query = "SELECT * FROM Enrollment"
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

const getEnrollmentById = (enrollmentId, res) => { 
    let query = "SELECT * FROM Enrollment WHERE id_enrollment = ?"
    database.get(query, enrollmentId, (err, data) => {
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

const updateEnrollment = ( enrollmentId, res) => {
    let query = `UPDATE Enrollment set date = COALESCE(?,date) WHERE id_enrollment = ?`;
    database.run(query,[enrollmentId], function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
}

const deleteEnrollment = (enrollmentId, res) => {
    database.run(
        'DELETE FROM Enrollment WHERE id_enrollment = ?',
        enrollmentId,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
}

const newEnrollment = (data, res) => {
    let query = "INSERT INTO Enrollment (id_student, validation_date, date, code_1, code_2, code_3, code_4, code_5) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    database.run(query, [data.id_student, data.validation_date, data.date, data.code_1, data.code_2, data.code_3, data.code_4, data.code_5], 
        function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
        }
    ) 
    return "test passed";
}

module.exports = { getAllEnrollment, getEnrollmentById, deleteEnrollment, updateEnrollment, newEnrollment }
