//GET
async function getPersonaje(status) {
    try {
        
        const response = await fetch ('https://rickandmortyapi.com/api/character',{

            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error("Error al obtener los personajes");
        }

        const personaje = await response.json()
        return personaje

    } catch (error) {
        console.error("Error al obtener el status", error)
        throw error
    }
}
export{getPersonaje}