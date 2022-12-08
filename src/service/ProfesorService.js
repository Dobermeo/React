const urlCrud = 'http://localhost:3001';

const getListTeacher = async () => {
    const response = await fetch(`${urlCrud}/profe/`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const getListTeachstu = async () => {
    const response = await fetch(`${urlCrud}/estuprofe/`);    
    const data = await response.json();
    console.log(data)
    return  data;
}

const createTeacher = async (teacher) => {

    const resp = await fetch(`${urlCrud}/profe`, {
        method: 'POST',
        body: JSON.stringify(teacher),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

// Obtener solo un id
const findByIdTeacher = async (itemTeacherId) => {
    const response = await fetch(`${urlCrud}/profe/${itemTeacherId}`);  
    const data = await response.json();     
    return  data;
}

const updateTeacher = async (teacher) => {
    const resp = await fetch(`${urlCrud}/profe`, {
        method: 'PUT',
        body: JSON.stringify(teacher),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

const findByNamesTeacher = async (searchItem) => {
    const response = await fetch(`${urlCrud}/profe/${searchItem}/search`);  
    const data = await response.json();     
    return  data;
}

export {
    getListTeacher,
    getListTeachstu,
    createTeacher,
    findByIdTeacher,
    updateTeacher,
    findByNamesTeacher
}