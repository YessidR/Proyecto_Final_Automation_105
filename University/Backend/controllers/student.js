const { database } = require('../config/database');

const studentEnrollment  = async (req, res, next) => {
    let data = {
        "validation_date": Date(),
        "date": Date(),
    }
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

module.exports = { studentEnrollment };