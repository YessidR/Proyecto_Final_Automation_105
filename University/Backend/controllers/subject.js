const { getAllSubject} = require('../config/subject')


const getAllSubjects = async(req, res, next) => {
    getAllSubject(res)
}


module.exports = {getAllSubjects};