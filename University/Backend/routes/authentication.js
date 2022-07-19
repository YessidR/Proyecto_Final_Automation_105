const express = require('express');
const router = express.Router();
const { getStudent, postCredentials} = require('../controllers/authentication');


router.get("/:username", getStudent)
router.get("/", getStudent)
router.get("/", postCredentials)

module.exports = router;