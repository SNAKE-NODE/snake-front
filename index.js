const btnLogin = document.getElementById('log-in')
const btnSignup = document.querySelector('#Register')

btnLogin.addEventListener(('submit'), () => {
    const username = document.querySelector('#user')
    const password = document.querySelector('#passwordRegister')
    console.log(`Usuario: ${username.value}; Contraseña: ${password.value}`);
})