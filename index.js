import {signUser, login} from "./login.js"
import {canvaSnake} from "./snake"
import { signUser, login } from "./login.js"
import { getTopPlayers} from "./snakeapi.js"
document.addEventListener('DOMContentLoaded', async () => {
    const topPlayers = await getTopPlayers()
    drawTopPlayers(topPlayers)
})


const btnLogin = document.querySelector('#log-in')
const btnSignup = document.querySelector('#Register')

btnLogin.addEventListener(('click'), () => {
    const username = document.querySelector('#user')
    const password = document.querySelector('#passwordRegister')
    login(username.value, password.value)
})

btnSignup.addEventListener(('click'), () => {
    const username = document.querySelector('#user')
    const password = document.querySelector('#passwordRegister')
    signUser(username.value, password.value)
})

canvaSnake();
