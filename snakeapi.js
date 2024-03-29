require('dotenv').config()
export async function getTopPlayers(){
    const result = await fetch(`${process.env.URL_BACK}/tops/`)
    const playerObject = await result.json()
    return playerObject
}
export async function getPlayersById(id){
    const result = await fetch(`${process.env.URL_BACK}/players/${id}`)
    const playerObject = await result.json()
    return playerObject
}
export async function postScore(username, date, score){
    const tokenUser = sessionStorage.getItem('token')
    const objectToSend = {
        user: username,
        date: date,
        score: score
    }
    const options = {
        method: 'POST',
        headers: {
            'Authorization': tokenUser,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectToSend)
    }
    await fetch(`${process.env.URL_BACK}/tops/`, options);
}