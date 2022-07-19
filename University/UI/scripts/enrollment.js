//list of codes pulled from db
const codes = ["AAAAA", "BBBBB", "CCCCC", "DDDDD", "EEEEE"]
let courses = ["Math", "Algebra", "Trigonometry", "Calculus", "Something else", "Computer science", "data science", "something "]


//this boolean will be pulled from student class
let userEnrolled = false

//dom elements
let codeElement1 = document.getElementById("code1");
let codeElement2 = document.getElementById("code2");
let checkCodeHandler = document.querySelector(".btn-check-code");
let modalElement = document.querySelector(".modal-text");
const modalContainer = document.querySelector(".modal-container");
const modalCloseButton = document.querySelector(".modal-close");
const checkBoxes = document.getElementsByName("checkbox");
const endEndrollmentButton = document.querySelector(".end-enrollment")


//event listeners
checkCodeHandler.addEventListener('click', checkCodes)
modalCloseButton.addEventListener('click', hideModal)
endEndrollmentButton.addEventListener('click', setSubjects)


const subjectContainer = document.querySelector(".subject-container")
courses.forEach(course => {
    
    var newDiv = document.createElement("div");
    newDiv.className = 'subject';
    newDiv.innerHTML = (`${course} <input class="subject-checkbox" type="checkbox" name="checkbox" id="checksubject"></div>`);

    subjectContainer.appendChild(newDiv)
});


function hideModal() {
    modalContainer.classList.remove('show');
}

function showModal() {
    modalContainer.classList.add('show');
}



function getRandomCode() {
   return Math.floor(Math.random()*5+1)
}

function getCodeIndexes() {
    let code1 = getRandomCode(),
        code2 = getRandomCode();

    if (code1 === code2) {
        code2 = getRandomCode()
        if (code1 === code2) {
            code2 = getRandomCode()
        }
}
modalElement.textContent = `Please enter code n°${code1} and code n°${code2} as shown on your receipt`
return {code1, code2}
}

let {code1, code2} = getCodeIndexes();

console.log(codes[(code1-1)], code1)
console.log(codes[(code2-1)], code2)

function checkCodes() {
    if ((codeElement1.value).toUpperCase() == codes[(code1-1)] && (codeElement2.value).toUpperCase() == codes[(code2-1)]) {
        alert("all good")
        console.log("nice")

        //need to push this to db
        userEnrolled = true;
        checkBoxes.forEach(element => {
            element.disabled = false;
        });

        hideModal()
    } else {
        alert("oops, wrong codes")
        //console.log(`code 1 is ${codeElement1.value} and it should say ${codes[(code1-1)]}`)
        //console.log(`code 2 is ${codeElement2.value} and it should say ${codes[(code2-1)]}`)
    }
}


if (userEnrolled == false) {
    showModal()
    checkBoxes.forEach(element => {
        element.disabled = true;
    });
}


const maxSubjects = 5;
for (var i = 0; i < checkBoxes.length; i++)
  checkBoxes[i].onclick = selectiveCheck;

function selectiveCheck () {
  let checkedChecks = document.querySelectorAll(".subject-checkbox:checked");
  if (checkedChecks.length >= maxSubjects + 1)
    return false;
}


function setSubjects () {
    let checkedChecks = document.querySelectorAll(".subject-checkbox:checked");
    if (checkedChecks.length > 0) {
        enrolledsubjects = []
        checkedChecks.forEach(checkbox => {
            let checkedSubjectElem =checkbox.parentElement

            enrolledsubjects.push(checkedSubjectElem.textContent)

        });
        alert(`You have successfully enrolled in ${enrolledsubjects.join(". ")}`)
    } else {
        alert("No subjects selected!")
    }
    return enrolledsubjects
}


console.log(typeof(getCodeIndexes()))




// YESSID //

// const UI = require ("../../Backend/config/dataEnrollment.js")
function postSomething(){
    fetch('http://localhost:8000/bank', {
    method: "POST",
    // body: JSON.stringify({"id_enrollment": `${obj.id_enrollment}`,
    // "validation_date": `${obj.validation_date}`,
    // "date": `${obj.date}`,
    headers: {"Content-type": "application/json; charset=UTF-8"}
}).then(response => response.json())
.then(json => console.log(json))
}

postSomething()

