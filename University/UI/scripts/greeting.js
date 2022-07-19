let userId = localStorage.getItem('userId')
let firstname = localStorage.getItem('firstname')
let lastname = localStorage.getItem('lastname')

const greetingElem = document.querySelector('.greeting h1')

//show name and last name
greetingElem.textContent = (`Welcome, ${firstname} ${lastname}`)