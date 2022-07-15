// Open csv files...
const path = require('path') // Genera proporciona ubicacion
const CSV = require('csv-parser')
const fs = require('fs') // File stream
const results = []; // Store data from csv

const CSVSOURCE = path.resolve('./University/Backend/config/Test-Enrollment.csv'); // csv file location
console.log (`location is: ${CSVSOURCE}`) //To confirm the location

string = 'abcdefghijklmnopqrstuvwxyz'
for (let i = 0; i < string.length; i++) {
    console.log(string[i])
}

fs.createReadStream(CSVSOURCE)
.pipe(CSV({}))
.on('data', (data) => results.push(data))
.on('end', () => {
    console.log(results)
    for (let i = 0; i < results.length; i++) {
        let obj = results[i]
        // console.log(obj.ID)
        querySelect = `SELECT * FROM productos WHERE id_enrollment=${obj.id_enrollment}`
        queryAdd = 
        console.log(querySelect)
    }
});

// Verificar estudiante q exista
// Generar 5 codigos de estudiante
// Cambiar status estudiante