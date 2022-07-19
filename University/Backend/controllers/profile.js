const { getAllStudent, getStudentById} = require('../config/student')



const getAllStudentsbyID = async(req, res, next) => {
    getStudentById(req.params.id, res)
}

const getAllStudents = async(req, res, next) => {
    getAllStudent(res)
}


module.exports = { getAllStudentsbyID, getAllStudents};