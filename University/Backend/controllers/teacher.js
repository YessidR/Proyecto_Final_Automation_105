const { getTeacherById} = require('../config/teacher')



const getTeachersbyID = async(req, res, next) => {
    getTeacherById(req.params.id, res)
}



module.exports = { getTeachersbyID};