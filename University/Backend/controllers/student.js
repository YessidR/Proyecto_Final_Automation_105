const { database } = require('../config/databaseManager');

const studentEnrollment  = async (req, res, next) => {
    let data = {
        "start_date": Date(),
        "end_date": Date(),
        "number": 1,
        "id_subject": 1,
        "id_student": 1,
    }
    let query = "INSERT INTO Semester (start_date, end_date, number, id_subject, id_student) VALUES (?, ?, ?, ?, ?)"
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

module.exports = { studentEnrollment };