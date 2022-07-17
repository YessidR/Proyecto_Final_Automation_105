const express = require("express");
const busAccController = require("../controllers/busAccController");

const router = express.Router();

router.get("/s/:userid", busAccController.accounts);
router.get("/:id", busAccController.accountId);
router.get("/", busAccController.accountNumber);
router.post("/", busAccController.accountPost);
router.patch("/:id", busAccController.accountPatch);
router.delete("/:id", busAccController.accountDelete);

module.exports = router;
