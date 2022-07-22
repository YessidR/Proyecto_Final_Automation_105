const express = require('express');
const router = express.Router();
const { getTeachersbyID } = require('../controllers/teacher');

router.get("/:id", getTeachersbyID);


module.exports = router;