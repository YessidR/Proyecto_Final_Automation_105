const { database } = require('./databaseManager');

// Open csv files...
const path = require('path') // Genera proporciona ubicacion
const CSV = require('csv-parser')
const fs = require('fs') // File stream
const results = []; // Store data from csv

const CSVSOURCE = path.resolve('./University/Backend/config/Test-enrollment.csv'); // csv file location
// console.log (`location is: ${CSVSOURCE}`) //To confirm the location

// Creacion de codigos....
// string = 'abcdefghijklmnopqrstuvwxyz'
// for (let i = 0; i < string.length; i++) {
//     console.log(string[i])
// }

fs.createReadStream(CSVSOURCE)
.pipe(CSV({}))
.on('data', (data) => results.push(data))
.on('end', () => {
    // console.log(results)
    for (let i = 0; i < results.length; i++) {
        let obj = results[i]
        // console.log(`Objeto en posicion ${i}`, obj)
        queryEnrollment = `INSERT INTO Enrollment (id_enrollment, validation_date, date) VALUES (${obj.id_enrollment}, ${obj.validation_date}, ${obj.date})`
        console.log(queryEnrollment)
        querySelect = `UPDATE INTO Student (status) WHERE id_enrollment = ${obje.id_enrollment} VALUES (status = True)`
    //     // queryAdd = ""
    }
});

// Verificar estudiante q exista
// Generar 5 codigos de estudiante
// Cambiar status estudiante