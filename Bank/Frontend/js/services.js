

const firstUniversity = () =>{
    localStorage.setItem('universityID', 3);
}

const secondUniversity = () =>{
    localStorage.setItem('universityID', 2);
}

const thirduniversity = () =>{
    localStorage.setItem('universityID', 1);
}



let uni1 = document.getElementById("uni1").onclick = firstUniversity;
let uni2 = document.getElementById("uni2").onclick = secondUniversity;
let uni3 = document.getElementById("uni3").onclick = thirduniversity;