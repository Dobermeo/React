
import API from '../constants/apiUrl';
const urlCrud = 'http://localhost:3001';

const getListStudent = async () => {
    const response = await fetch(`${API}/estudiante/`);    
    const data = await response.json();
    //console.log(data)
    return  data;
}

const getListProfestu = async () => {
    const response = await fetch(`${API}/profestu/`);    
    const data = await response.json();
    //console.log(data)
    return  data;
}
const createStudent = async (student) => {

    const resp = await fetch(`${urlCrud}/estudiante`, {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

// Obtener solo un id
const findByIdStudent = async (itemStudentId) => {
    const response = await fetch(`${urlCrud}/estudiante/${itemStudentId}`);  
    const data = await response.json();     
    return  data;
}

const updateStudent = async (student) => {
    const resp = await fetch(`${urlCrud}/estudiante`, {
        method: 'PUT',
        body: JSON.stringify(student),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

const findByNamesStudent = async (searchItem) => {
    const response = await fetch(`${API}/estudiante/${searchItem}/search`);  
    const data = await response.json();     
    return  data;
}



export {
    getListStudent,
    createStudent,
    findByIdStudent,
    updateStudent,
    findByNamesStudent,
    getListProfestu
}