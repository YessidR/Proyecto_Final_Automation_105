const $bodyTable = document.querySelector("#bodyTable");
let student = []; 
let id_user = localStorage.getItem('userId');
console.log(id_user);
getStudentsProfilebyID();

function getStudentsProfilebyID (){
    fetch(`http://localhost:8000/profile/${id_user}`).then((res)=>{       
        return res.json();
    }).then((data) => {
        student = data["data"];

        const $tr = document.createElement("tr");

        let $tdCode = document.createElement("td");
        $tdCode.textContent = student.id_student; 
        $tr.appendChild($tdCode);

        let $tdName = document.createElement("td");
        $tdName.textContent = student.first_name+" "+student.last_name; 
        $tr.appendChild($tdName);

        let $tdPhone = document.createElement("td");
        $tdPhone.textContent = student.phone;
        $tr.appendChild($tdPhone);

        let $tdStatus = document.createElement("td");
        student.status === 'true' ? $tdStatus.textContent = "Active": $tdStatus.textContent = "Inactive";
        $tr.appendChild($tdStatus);

        $bodyTable.appendChild($tr);
    })
}
