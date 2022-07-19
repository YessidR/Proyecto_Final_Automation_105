let userElem = document.getElementById('user')
let passwordElem = document.getElementById('password')
let logInButton = document.getElementById('boton')
let wrongPassOrUser = document.querySelector('.msg')
let userId = ""

logInButton.addEventListener('click', getCredentials, hideMsg)

const username = userElem.value

function hideMsg() {
    wrongPassOrUser.classList.remove('show');
}

function showMsg() {
    wrongPassOrUser.classList.add('show');
}

function getCredentials(){
    fetch(`http://localhost:8000/auth/${userElem.value}`).then((res) =>{
        return res.json()
    }).then((data) => {
        userId = data.data.userId
        checkCredentials(data.data.password)
    })  
}

function checkCredentials(pw) {
    if (passwordElem.value === pw) {
        console.log('credentials ok')
        hideMsg()
  
        window.location.replace('./index.html')
        return userId;
    } else {
        showMsg()
    }
}

