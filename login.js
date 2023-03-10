export {signUser, login}
//METER EN PARÁMETROS EVENT, JUNTO A USERNAME
const signUser = async (username, password) => {
    // event.preventDefault()
    const objectToSend = {
        user: username,
        password: password
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectToSend)
    }
    await fetch("https://snake-back-three.vercel.app/players/registro", options);
    login(username, password)
}
const login = async (username, password) => {
    const objectToSend = {
        user: username,
        password: password
    }
    const query = await fetch('https://snake-back-three.vercel.app/players/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objectToSend)
        })
    const result = await query.json()
    localStorage.setItem("token", result.token)
    console.log(result.token)
    // canvaSnake()    
}