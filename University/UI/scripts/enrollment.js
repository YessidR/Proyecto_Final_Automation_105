//list of codes pulled from db
let courses = ["Math", "Algebra", "Trigonometry", "Calculus", "Something else", "Computer science", "data science", "something "]
let codes = ['AAAAA', 'BBBBB', 'CCCCC', 'DDDDD', 'EEEEE']

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

function setCodes(list) {
    codes = list
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


function getCodesbyID (){
    let userId = localStorage.getItem('userId')
    fetch(`http://localhost:8000/enrollment/codes/${userId}`).then((res)=>{       
        return res.json();
    }).then((data) => {
        let info = data['data']
        console.log(info.code1)
        let codes = [info.code1, info.code2, info.code3, info.code4, info.code5]
        console.log(codes)
        validateCodes(codes)
    })
}

function validateCodes(list) {
}
