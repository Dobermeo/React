const urlCrud = 'http://localhost:3001';

const getListJuegos = async () => {
    const response = await fetch(`${urlCrud}/juegos/`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const createGame = async (game) => {

    const resp = await fetch(`${urlCrud}/juegos`, {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

// Obtener solo un id
const findByIdJuegos = async (itemJuegosId) => {
    const response = await fetch(`${urlCrud}/juegos/${itemJuegosId}`);  
    const data = await response.json();     
    return  data;
}

const updateJuegos = async (juego) => {
    const resp = await fetch(`${urlCrud}/juegos`, {
        method: 'PUT',
        body: JSON.stringify(juego),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

const findByNamesJuegos = async (searchItem) => {
    const response = await fetch(`${urlCrud}/juegos/${searchItem}/search`);  
    const data = await response.json();     
    return  data;
}


export {
    getListJuegos,
    createGame,
    findByIdJuegos,
    updateJuegos,
    findByNamesJuegos

}