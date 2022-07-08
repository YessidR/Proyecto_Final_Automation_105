const courses = [{
    id: 1,
    subject: "Maths",
    level: 1,
    teacher: "Albert Einstein",
},
{
    id: 2,
    subject: "Literature",
    level: 1,
    teacher: "Albert Fernandez",
},
{
    id: 3,
    subject: "Algebra",
    level: 2,
    teacher: "Javier Milei",
},
{
    id: 4,
    subject: "Architecture",
    level: 2,
    teacher: "Ted Mosby",
},
];


const $bodyTable = document.querySelector("#bodyTable");

courses.forEach(course => {

    const $tr = document.createElement("tr");

    let $tdCode = document.createElement("td");
    $tdCode.textContent = course.id; 
    $tr.appendChild($tdCode);

    let $tdSubject = document.createElement("td");
    $tdSubject.textContent = course.subject; 
    $tr.appendChild($tdSubject);

    let $tdLevel = document.createElement("td");
    $tdLevel.textContent = course.level;
    $tr.appendChild($tdLevel);

    let $tdTeacher = document.createElement("td");
    $tdTeacher.textContent = course.teacher;
    $tr.appendChild($tdTeacher);

    $bodyTable.appendChild($tr);

});