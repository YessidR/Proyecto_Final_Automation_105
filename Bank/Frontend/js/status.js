let headText = document.querySelector(".header-text");
let account_number = document.querySelector(".account-num");
let balance_num = document.getElementById("balance-value");
let type_acc = document.getElementById("type-value");
let currency = document.getElementById("currency-value");
let status_acc = document.getElementById("status-value");

const userID = localStorage.getItem('userID');

const updateInfo = ( accNum, balNum, typeAcc, curr, st) =>{   
    account_number.innerHTML = accNum;
    balance_num.innerHTML = balNum;
    type_acc.innerHTML = typeAcc;
    currency.innerHTML = curr;
    status_acc.innerHTML = st;
}

const getUserName = (id) =>{
    return fetch('http://localhost:8000/user/'+ id,{
        method: "GET",
    })
    .then((response) => response.json())
    .then((responseData) => {

        return responseData['data'];
    })
    .catch(error => console.warn(error));
}

const getUserByID = (id) => {
    return fetch('http://localhost:8000/usracc/s/'+ id,{
        method: "GET",
    })
    .then((response) => response.json())
    .then((responseData) => {

        return responseData['data'][0];
    })
    .catch(error => console.warn(error));
}


const getUpdateUserValues = () =>{
    getUserByID(userID).then( (response) =>{
        console.log("response")
        updateInfo(response['Number'], response['Balance'], response['Type'], response['Currency'],response['Status'])
    });
    getUserName(userID).then((response) =>{      
        headText.innerHTML="Welcome back " + response['Name'] +'!';
    })
}


window.onload = function() {
    getUpdateUserValues();
};