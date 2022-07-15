const express = require('express');
const router = express.Router();
const { studentEnrollment, 
    getEnrollment, 
    updateStudents, 
    deleteStudents,
    getAllStudentEnrollments } = require('../controllers/studentEnrollment');

router.post("/", studentEnrollment);
router.get("/:id", getEnrollment);
router.get("/all", getAllStudentEnrollments);
router.patch("/update/:id", updateStudents);
router.delete("/delete/:id", deleteStudents);


module.exports = router;