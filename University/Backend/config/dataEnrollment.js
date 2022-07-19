const { database } = require('./databaseManager');

// Open csv files...
const path = require('path') // Standard location
const CSV = require('csv-parser')
const fs = require('fs') // File stream
const results = []; // Store data from csv

const CSVSOURCE = path.resolve('../Backend/config/Test-enrollment.csv'); // csv file location
// console.log (`location is: ${CSVSOURCE}`) //To confirm the location


// Logic for generating 5 random letters
function makePass(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Open csv file and
const {newEnrollment} = require ('./enrollment')
const { statusStudent } = require('./student')
const csv = async(req, res, next) => {
    fs.createReadStream(CSVSOURCE)
    .pipe(CSV({}))
    .on('data', (data) => results.push(data)) 
    .on('end', () => {
        // console.log(results)
        for (let i = 0; i < results.length; i++) {
            let obj = results[i]
            
            // Creating 5 random password
            let code1 = makePass(5)
            let code2 = makePass(5)
            let code3 = makePass(5)
            let code4 = makePass(5)
            let code5 = makePass(5)
 
            newEnrollment({id_student:obj.id_student, validation_date:obj.validation_date, date:obj.date, code_1:code1, code_2:code2, code_3:code3, code_4:code4, code_5:code5})

            statusStudent({id_student:obj.id_student})
            
        }
    }
)};

// csv()

module.exports = {csv}