const express = require("express");
const usrAccController = require("../controllers/usrAccController");

const router = express.Router();

router.get("/s/:userid", usrAccController.accounts);
router.get("/:id", usrAccController.accountId);
router.get("/", usrAccController.accountNumber);
router.post("/", usrAccController.accountPost);
router.patch("/:id", usrAccController.accountPatch);
router.delete("/:id", usrAccController.accountDelete);

module.exports = router;
