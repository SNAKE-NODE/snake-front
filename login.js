const signUser = async (event, username, password) => {
    event.preventDefault()
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
    await fetch("http://localhost:8000/players/registro", options);
    login(username, password)
}
const login = async (username, password) => {
    const query = fetch('https://snake-back-three.vercel.app/players/login', {
            method: 'POST',
            headers: {
                'Consent-Type': 'application/json'
            },
            body: JSON.stringify({user: username, password: password})
        })
    const result = await query.json()
    localStorage.setItem("token", result.token)
    console.log(result)
    canvaSnake()    
}