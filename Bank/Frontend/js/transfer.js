try{
    var account_target = document.querySelector(".account-target");
    var ammount_target = document.querySelector(".ammount-target");
    var pay_btn = document.querySelector(".transfer-btn").onclick = make_transfer;
}catch(error){}

getId = (max,min) =>{
   return Math.floor(Math.random()*(max-min)+min); 
}

const getDate  = () =>{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

function make_transfer(){
    if(ammount_target.value.length == 10 && account_target.value.length <1){
        console.log("Enter a valid account or ammount ")
        return false
    }
    else{
        let transaction = "- " + getId(1000,2000) + " " + account_target.value + " " + getDate() + " " + ammount_target.value;
        console.log(transaction)
    }
}

try{
    module.exports = getDate;
}catch(error){}