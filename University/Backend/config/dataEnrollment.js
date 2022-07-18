const { database } = require('./databaseManager');

// Open csv files...
const path = require('path') // Genera proporciona ubicacion
const CSV = require('csv-parser')
const fs = require('fs') // File stream
const results = []; // Store data from csv

const CSVSOURCE = path.resolve('../Backend/config/Test-enrollment.csv'); // csv file location
console.log (`location is: ${CSVSOURCE}`) //To confirm the location

const {insertEnrollment} = require ('./enrollment')
const csv = async(req, res, next) => {
    fs.createReadStream(CSVSOURCE)
    .pipe(CSV({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // console.log(results)
        for (let i = 0; i < results.length; i++) {
            let obj = results[i]
        
            // Agregar logica para generar 5 codigos aleatoriamente 
            // Una vez generados los 5 codigos enviar el codigo del estudiante con los 5 codigos
            // Se loguea el estudiante y confirma los codigos...
            // Agregar codigo del estudiante y almacenar en la base de datos.


            insertEnrollment({validation_date:obj.validation_date, date:obj.date})

            // console.log(`Objeto en posicion ${i}`, obj)
            // queryEnrollment = `INSERT INTO Enrollment (id_enrollment, validation_date, date, id_student) VALUES (${obj.id_enrollment}, ${obj.validation_date}, ${obj.date}, ${obj.id_student})`
            // console.log(queryEnrollment)
            // querySelect = `UPDATE INTO Student (status) WHERE id_student = ${obj.id_student} VALUES (status = True)`
            // console.log(querySelect)
        //     // queryAdd = ""
        }
    }
)};

csv()

module.exports = {csv}


// Verificar estudiante q exista
// Generar 5 codigos de estudiante
// Cambiar status estudiante