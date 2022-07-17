const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/s", userController.users);
router.get("/login", userController.userLogin);
router.get("/login/:username/:password", userController.userLogin2);
router.get("/:id", userController.user);
router.post("/", userController.userPost);
router.patch("/:id", userController.userPatch);
router.delete("/:id", userController.userDelete);

module.exports = router;
