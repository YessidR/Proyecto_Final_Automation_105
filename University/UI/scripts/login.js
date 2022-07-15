let user = "username"
let pw = "password"

let userElem = document.getElementById('user')
let passwordElem = document.getElementById('password')
let logInButton = document.getElementById('boton')

logInButton.addEventListener('click', checkCredentials)


function checkCredentials() {
    if (userElem.value == user && passwordElem.value === pw) {
        console.log('ok')
    }
}