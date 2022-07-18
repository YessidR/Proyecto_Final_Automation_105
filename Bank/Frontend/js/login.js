let nameAccount = document.querySelector(".input-name")
let password = document.querySelector(".input-password")
let downMessage = document.querySelector(".notify")
let attemps = 3;

const userPwdVal = (username, pwd) => {
    return fetch('http://localhost:8000/user/login/'+username + '/'+ pwd,{
        method: "GET",
    })
    .then((response) => response.json())
    .then((responseData) => {
        
        if (responseData['data']['ID']>0){
            //console.log("user validated")
            return responseData['data']['ID'];
        }
        else{
            console.log("user not validated")
            return false;
        }
    })
    .catch(error => console.warn(error));
}

const entryFieldVal = (username, pwd) =>{
    if(pwd.length == 0 || username.length == 0){
        downMessage.innerHTML = "Invalid username or password!";
        return false;
    }
    else{
        return true;
    }
}

const validation = () => {
    if(attemps > 0){
        if(entryFieldVal(nameAccount.value, password.value)){
            userPwdVal(nameAccount.value, password.value).then((response) => {
                if(response == true){
                    console.log("exito");
                    location.href = "html/status.html";
                }
                else{
                    downMessage.innerHTML = "Incorrect username or password";
                    console.log("no exito");
                }
            });
        }        
    }
    else{
        alert("too many attemps")
        attemps = 3;
    }
    attemps-=1;
}

let loginBtn = document.querySelector(".login-btn").onclick = validation;