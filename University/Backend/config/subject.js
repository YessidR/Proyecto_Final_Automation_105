const { database } = require('./databaseManager');

const insertSubject = (data, res) => {
    let query = "INSERT INTO Subject (name, id_teacher, id_career) VALUES (?, ?, ?)"
    database.run(query, [data.name, data.id_teacher, data.id_career], function (err, result) {
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

const getAllSubject = (res) => { 
    let query = "SELECT * FROM Subject"
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

const getSubjectById = (subjectId, res) => { 
    let query = "SELECT * FROM Subject WHERE id_subject = ?"
    database.get(query, subjectId, (err, data) => {
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

const deleteSubject = (subjectId, res) => {
    database.run(
        'DELETE FROM Subject WHERE id_subject = ?',
        enrollmentId,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
}

module.exports = { insertSubject, getAllSubject, getSubjectById, deleteSubject }