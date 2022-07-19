const express = require('express');
const router = express.Router();
const { postStudentEnrollment, 
    getEnrollment, 
    deleteStudents,
    getAllStudentEnrollments, getCodesById} = require('../controllers/studentEnrollment');


router.post("/", postStudentEnrollment);
router.get("/:id", getEnrollment);
router.get("/all", getAllStudentEnrollments);
router.delete("/delete/:id", deleteStudents);
router.get("/codes/:id", getCodesById)


module.exports = router;