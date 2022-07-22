const {getCredentials, getStudentByUsername} = require('../config/authentication')


const getStudent = async(req, res, next) => {
    getStudentByUsername(req.params.username, res)
}

const postCredentials = async(req, res, next) => {
    let data = {
        "username": req.body.user,
        "password": req.body.password,
    }
    getCredentials(data, res)
}

module.exports = { getStudent, postCredentials};