// Open csv files...
const path = require('path') // Genera proporciona enlaces
const CSV = require('csv-parser')
const fs = require('fs') // File stream
const results = []; // Store data from csv

const CSVSOURCE = path.resolve('./University/Backend/config/Test-csv.csv'); // csv file location
console.log (CSVSOURCE)

fs.createReadStream(CSVSOURCE)
.pipe(CSV({}))
.on('data', (data) => results.push(data))
.on('end', () => {
    console.log(results)
});