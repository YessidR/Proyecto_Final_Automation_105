const express = require('express');
const router = express.Router();
const { getAllSubjects } = require('../controllers/subject');

router.get("/", getAllSubjects);


module.exports = router;