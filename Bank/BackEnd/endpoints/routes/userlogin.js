const express = require("express");
const userlogin = require("../controllers/userlogin");

const router = express.Router();

//let params = ["carlosmenacho", md5("carlosmenacho2")];

router.get("/:username/:password", userlogin);

// router.get("/", (req, res) => {


//     const qryLogin = "SELECT count(*) FROM User WHERE Username = ? AND Password = ?";

//     db.get(qryLogin, params, (err, row) => {
//         if (err) {
//             res.status(400);
//             res.json({"Error": err.message});
//         }
//         res.status(200);
//         res.json({
//             "message": "success",
//             "data": row
//         });
//     });
// });

module.exports = router;
