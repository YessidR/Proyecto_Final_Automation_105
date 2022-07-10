const database = require('../config/database');

const studentEnrollment  = async (req, res, next) => {
    let data = {
        "year": 199,
        "validate_date": 2030,
        "date": 4,
    }
    let query = "INSERT INTO Student (year, id_career, id_subject) VALUES (?, ?, ?)"
    database.run(query, [data.year, data.id_career, data.id_subject], function (err, result) {
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