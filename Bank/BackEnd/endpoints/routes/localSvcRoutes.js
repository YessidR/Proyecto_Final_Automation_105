const express = require("express");
const localSvcController = require("../controllers/localSvcController");

const router = express.Router();

router.get("/s/", localSvcController.transactions);
router.get("/:id", localSvcController.transactionId);
router.get("/", localSvcController.transactionStudentCode);
router.post("/", localSvcController.transactionPost);
router.patch("/:id", localSvcController.transactionPatch);
router.delete("/:id", localSvcController.transactionDelete);

module.exports = router;
