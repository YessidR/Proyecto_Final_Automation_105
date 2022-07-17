const express = require("express");
const universityController = require("../controllers/universityController");

const router = express.Router();

router.get("/s", universityController.users);
router.get("/login", universityController.userLogin);
router.get("/login/:username/:password", universityController.userLogin2);
router.get("/:id", universityController.user);
router.post("/", universityController.userPost);
router.patch("/:id", universityController.userPatch);
router.delete("/:id", universityController.userDelete);

module.exports = router;
