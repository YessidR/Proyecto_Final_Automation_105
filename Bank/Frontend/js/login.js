let nameAccount = document.querySelector(".input-name")
let password = document.querySelector(".input-password")
let loginBtn = document.querySelector(".login-btn").onclick = validation;

let attemps = 3;


function validation() {
    if(attemps > 0){
        if (nameAccount.value.includes("@")){ 
            if (nameAccount.value =="hol@" && password.value=="carlos"){
                console.log("exito");
                //var loc = window.location.pathname;
                //var dir = loc.substring(0, loc.lastIndexOf('/'));
                location.href = "html/status.html";
            }
            else{
                console.log("no exito");
            }
        }
    }
    else{
        alert("too many attemps")
        attemps = 3;
    }
    attemps-=1;
}
