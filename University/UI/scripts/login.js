let userElem = document.getElementById('user')
let passwordElem = document.getElementById('password')
let logInButton = document.getElementById('boton')
let wrongPassOrUser = document.querySelector('.msg')


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
        let userId = (data.data.id_student)
        let firstname = (data.data.first_name)
        let lastname = (data.data.last_name)
        localStorage.setItem('userId', userId)
        localStorage.setItem('firstname', firstname)
        localStorage.setItem('lastname', lastname)
        checkCredentials(data.data.password);
    })
}

function checkCredentials(pw) {
    if (passwordElem.value === pw) {
        hideMsg()
        window.location.replace('./index.html')
        return userId;
    } else {
        showMsg()
    }
}

