const express = require('express');
const router = express.Router();
const { getAllStudentsbyID, getAllStudents } = require('../controllers/profile');

router.get("/", getAllStudents);
router.get("/:id", getAllStudentsbyID);


module.exports = router;