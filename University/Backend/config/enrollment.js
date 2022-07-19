const { database } = require('./databaseManager');

const insertEnrollment = (data, res) => {
    let query = "INSERT INTO Enrollment (validation_date, date) VALUES (?, ?)"
    database.run(query, [data.validation_date, data.date], function (err, result) {
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

const updateEnrollment = (data, enrollmentId, res) => {
    let query = `UPDATE Enrollment set date = COALESCE(?,date) WHERE id_enrollment = ?`;
    database.run(query,[data, enrollmentId], function (err, result) {
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
    let query = "INSERT INTO Enrollment (id_enrollment, validation_date, date, code_1, code_2, code_3, code_4, code_5) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    database.run(query, [data.id_enrollment, data.validation_date, data.date, data.code_1, data.code_2, data.code_3, data.code_4, data.code_5], function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
    }) 
}

module.exports = { insertEnrollment, getAllEnrollment, getEnrollmentById, deleteEnrollment, updateEnrollment, newEnrollment }
