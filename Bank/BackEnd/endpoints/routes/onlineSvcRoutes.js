const express = require("express");
const onlineSvcController = require("../controllers/onlineSvcController");

const router = express.Router();

router.get("/s/", onlineSvcController.transactions);
router.get("/:id", onlineSvcController.transactionId);
router.get("/", onlineSvcController.transactionStudentCode);
router.post("/", onlineSvcController.transactionPost);
router.patch("/:id", onlineSvcController.transactionPatch);
router.delete("/:id", onlineSvcController.transactionDelete);

module.exports = router;
