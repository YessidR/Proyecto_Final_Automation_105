const express = require("express");
const universityController = require("../controllers/universityController");

const router = express.Router();

router.get("/s", universityController.universities);
router.get("/login", universityController.universityLogin);
router.get("/login/:username/:password", universityController.universityLogin2);
router.get("/:id", universityController.university);
router.post("/", universityController.universityPost);
router.patch("/:id", universityController.universityPatch);
router.delete("/:id", universityController.universityDelete);

module.exports = router;
