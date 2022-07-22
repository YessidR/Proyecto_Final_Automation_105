// const courses = [{
//     id: 1,
//     subject: "Maths",
//     level: 1,
//     teacher: "Albert Einstein",
// },
// {
//     id: 2,
//     subject: "Literature",
//     level: 1,
//     teacher: "Albert Einstein",
// },
// {
//     id: 3,
//     subject: "Algebra",
//     level: 2,
//     teacher: "Javier Milei",
// },
// {
//     id: 4,
//     subject: "Architecture",
//     level: 2,
//     teacher: "Ted Mosby",
// },
// ];

let courses = [];
const $bodyTable = document.querySelector("#bodyTable");

getSubjects();

function getSubjects (){
    fetch("http://localhost:8000/subject").then((res)=>{
        return res.json();
    }).then((data)=>{
        courses = data["data"];
        courses.forEach(course => {
            let idteacher =  course.id_teacher;
            getTeacher(idteacher,course);
       
        });

    })
}

function getTeacher(idteacher,course){
    fetch(`http://localhost:8000/teacher/${idteacher}`).then((res2)=>{
                console.log(idteacher)
                return res2.json();
            }).then((data2)=>{
                teacher = data2["data"]
                const $tr = document.createElement("tr");
        
                let $tdCode = document.createElement("td");
                $tdCode.textContent = course.id_subject; 
                $tr.appendChild($tdCode);
        
                let $tdSubject = document.createElement("td");
                $tdSubject.textContent = course.name; 
                $tr.appendChild($tdSubject);
        
                let $tdLevel = document.createElement("td");
                $tdLevel.textContent = course.id_career;
                $tr.appendChild($tdLevel);
        
                let $tdTeacher = document.createElement("td");
                $tdTeacher.textContent = teacher.first_name+" "+teacher.last_name;
                $tr.appendChild($tdTeacher);
        
                $bodyTable.appendChild($tr);

            })
}




// SELECT S.ID_SUBJECT, S.NAME, ( T.first_name|| ' '|| T.last_name) 
// AS TEACHERNAME FROM SUBJECT as S JOIN TEACHER AS T ON S.ID_TEACHER = T.ID_TEACHER ORDER BY ID_SUBJECT