import {signUser, login} from "./login.js"
import {snake} from "./snake"

const btnLogin = document.querySelector('#log-in')
const btnSignup = document.querySelector('#Register')

btnLogin.addEventListener(('click'), () => {
    const username = document.querySelector('#user')
    const password = document.querySelector('#passwordRegister')
    login(username.value, password.value)
    console.log(`Usuario: ${username.value}; Contraseña: ${password.value}`);
})

btnSignup.addEventListener(('click'), () => {
    const username = document.querySelector('#user')
    const password = document.querySelector('#passwordRegister')
    signUser(username.value, password.value)
    console.log(`Usuario: ${username.value}; Contraseña: ${password.value}`);
})


