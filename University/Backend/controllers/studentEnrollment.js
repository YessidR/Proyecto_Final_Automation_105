//const { getStudentEnrollmentById } = require('../config/database')
const { insertEnrollment } = require('../config/databaseManager')
const { getAllStudentEnrollment, 
    getStudentEnrollmentById, 
    insertStudentEnrollment, 
    updateStudent,
    deleteStudent} = require('../config/studentEnrollment')


const studentEnrollment  = async (req, res, next) => {
    let data = {
        "start_date": Date(),
        "end_date": Date(),
        "number": 1,
        "id_subject": 1,
        "id_student": 1,
    }
    insertStudentEnrollment(data, res)
}

const getEnrollment = async(req, res, next) => {
    getStudentEnrollmentById(req.params.id, res)
}

const getAllStudentEnrollments = async(req, res, next) => {
    getAllStudentEnrollment(res)
}

const updateStudents = async(req, res, next) => {
    updateStudent(30, 3, res);
}

const deleteStudents = (req, res, next) => {
    deleteStudent(req.params.id, res)
}

module.exports = { studentEnrollment, getEnrollment, updateStudents, deleteStudents, getAllStudentEnrollments};