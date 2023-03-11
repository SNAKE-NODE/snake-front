export async function getTopPlayers(){
    // const topPlayers = []
    const result = await fetch('')
    const playerObject = await result.json()
    return playerObject
}