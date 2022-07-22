const express = require("express");
const tellerController = require("../controllers/tellerController");

const router = express.Router();

router.get("/s", tellerController.tellers);
router.get("/login", tellerController.tellerLogin);
router.get("/login/:username/:password", tellerController.tellerLogin2);
router.get("/:id", tellerController.teller);
router.post("/", tellerController.tellerPost);
router.patch("/:id", tellerController.tellerPatch);
router.delete("/:id", tellerController.tellerDelete);

module.exports = router;
