const express = require("express");
const LocalSvcController = require("../controllers/LocalSvcController").LocalSvcController;

const router = express.Router();
const localSvcController = new LocalSvcController();

router.get("/s/", localSvcController.transactions);
router.get("/:id", localSvcController.transactionId);
router.get("/", localSvcController.transactionStudentCode);
router.post("/", localSvcController.transactionPost);
router.patch("/:id", localSvcController.transactionPatch);
router.delete("/:id", localSvcController.transactionDelete);

module.exports = router;
