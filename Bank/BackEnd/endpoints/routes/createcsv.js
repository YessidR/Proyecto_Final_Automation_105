const express = require("express")
const router = express.Router();
const db = require("../../database.js")

const getStudentEnrollmentById = (res) => {
  let query = "SELECT * FROM UniversityServiceOnline "
  db.all(query, (err, data) => {

    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    
    let csv = "Student-Code,Date-Time,Details" + "\r\n";
    for (let index = 0; index < data.length; index++) {
      csv += data[index].StudentCode + "," + data[index].DateTime + "," + data[index].Details + "\r\n"
    }
    const fs = require("fs");
    fs.writeFileSync("studentswhopayed.csv", csv);
    


  });
}
const sendemail = () => {
  let nodemailer = require('nodemailer');
  let myemail = 'bankprog105@gmail.com';
  let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bankprog105@gmail.com',
      pass: 'fdzsjiknymsocebf'

    }
  });
  let message = {
    from: myemail,
    to: 'Jhimi321123@gmail.com',
    subject: 'documento con estudiantes que realizaron un pago',
    text: 'vea adjunto el documento .csv',
    attachments: [
      {
        path: './studentswhopayed.csv'
      }
    ]
  }

  transport.sendMail(message, function (err) {
    if (err) {
      console.log("could not send the email due to " + err);
      return;
    }
    console.log("email have been sent");
  })
}

router.get("/", async (req, res, next) => {
  getStudentEnrollmentById(res);
  sendemail();
  res.json({
    "message": "success",
  })
});
module.exports = router 