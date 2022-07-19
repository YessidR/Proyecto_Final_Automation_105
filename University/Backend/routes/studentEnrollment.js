const express = require('express');
const router = express.Router();
const {csv} = require('../config/dataEnrollment') 
const { postStudentEnrollment, 
    getEnrollment, 
    deleteStudents,
    getAllStudentEnrollments, getCodesById} = require('../controllers/studentEnrollment');


router.post("/", postStudentEnrollment);
router.get("/:id", getEnrollment);
router.get("/all", getAllStudentEnrollments);
router.delete("/delete/:id", deleteStudents);
router.post("/bank", csv)
router.put("/status", csv)

module.exports = router;

