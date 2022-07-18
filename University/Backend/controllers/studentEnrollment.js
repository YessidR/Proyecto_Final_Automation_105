const { getAllStudentEnrollment, 
    getStudentEnrollmentById, 
    insertStudentEnrollment, 
    deleteStudentEnrollment} = require('../config/studentEnrollment')


const postStudentEnrollment  = async (req, res, next) => {
    let data = {
        "start_date": req.body.start_date,
        "end_date": req.body.end_date,
        "number": req.body.number,
        "id_subject": req.body.id_subject,
        "id_student": req.body.id_student,
    }
    insertStudentEnrollment(data, res)
}

const getEnrollment = async(req, res, next) => {
    getStudentEnrollmentById(req.params.id, res)
}

const getAllStudentEnrollments = async(req, res, next) => {
    getAllStudentEnrollment(res)
}

const deleteStudents = (req, res, next) => {
    deleteStudentEnrollment(req.params.id, res)
}

module.exports = { postStudentEnrollment, getEnrollment, deleteStudents, getAllStudentEnrollments};