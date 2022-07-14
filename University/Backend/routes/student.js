const express = require('express');
const router = express.Router();
const { studentEnrollment } = require('../controllers/student');

router.post("/", studentEnrollment);

module.exports = router;