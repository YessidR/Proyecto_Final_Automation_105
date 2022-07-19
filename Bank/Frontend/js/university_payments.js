let studentVal = document.querySelector(".student-value")
let am2Pay = document.querySelector(".amount-value")
let uniName = document.querySelector(".uni-val")
let contactVal = document.querySelector(".contact-val")
let studentID = document.querySelector(".student-id")

const universityID = localStorage.getItem('universityID')
const userID = localStorage.getItem('userID');
let amountDep;
let bankID;

const getTranNumber = (min = 10000, max = 99999) =>{
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * difference); 
  rand = rand + min;
  return rand;
}

const updateInfo = (sc, ap, un, c) =>{
  studentVal.innerHTML= sc;
  am2Pay.innerHTML = ap;
  uniName.innerHTML = un;
  contactVal.innerHTML = c;

}

const getUniData = (id) => {
  return fetch('http://localhost:8000/university/'+ id,{
      method: "GET",
  })
  .then((response) => response.json())
  .then((responseData) => {

      return responseData['data'];
  })
  .catch(error => console.warn(error));
}


const getUniSvc = () =>{
    return fetch('http://localhost:8000/onlinesvc/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            transactionnumber: getTranNumber(), 
            studentcode: studentID.value,
            amount: amountDep,
            universityaccountid: bankID,
            useraccountid: userID
        })
    })
    .then((response) => response.json())
    .then((responseData) => {

        return responseData['data'];
    })
    .catch(error => console.log(error));
}

function uniUpdate  (){
  try{
    getUniSvc().then( (response) =>{
      console.log(response)
    });
  } catch (error){
    console.log("student code error222")
  } 
}

const payFnc = () =>{
  uniUpdate()
}

let payBtn = document.querySelector(".pay-btn").onclick = payFnc

window.onload = function() {
  getUniData(universityID).then( (response) =>{
    updateInfo(userID, response['DepositAmount'], response['Name'],response['Email'])
    amountDep = response['DepositAmount'];
    bankID = response['ID'] 
    console.log(response)
  });
};
