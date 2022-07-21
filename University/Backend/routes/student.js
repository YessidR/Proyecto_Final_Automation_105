const express = require('express');
const router = express.Router();
const { studentEnrollment } = require('../controllers/student');

router.post("/", studentEnrollment);
router.get("/index", "../index.html")

module.exports = router;