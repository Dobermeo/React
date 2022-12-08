import React, { useState } from "react";
import { MainContext } from "../context/MainContext";
import { createStudent } from '../service/EstudianteService'

function StudentCreate() {
  const { setOpenModal } = React.useContext(MainContext);

  const onClick = () => {
    setOpenModal(false)
  }

  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [curso, setCurso] = useState('');
  const [mail, setMail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [profesor_id, setProfesorid] = useState('');
  const [calificacion, setCalificacion] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      nombre,
      edad,
      curso,
      mail,
      contraseña,
      profesor_id,
      calificacion
    }
    createStudent(objeto)

  }

  const onChange = (event) =>{

    if(event.target.name==='nombre')
    setNombre(event.target.value)

    if(event.target.name==='edad')
    setEdad(event.target.value)

    if(event.target.name==='curso')
    setCurso(event.target.value)

    if(event.target.name==='mail')
    setMail(event.target.value)

    if(event.target.name==='contraseña')
    setContraseña(event.target.value)

    if(event.target.name==='profesor_id')
    setProfesorid(event.target.value)

    if(event.target.name==='calificacion')
    setCalificacion(event.target.value)
  }

    return ( 
        <form onSubmit={onSubmit}>
            
            
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                type="text"
                id="nombre"
                className="form-control"
                name= "nombre"
                value={nombre}
                onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input 
                type="number" 
                id="edad" 
                className="form-control"
                name= "edad"
                value={edad}
                onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="curso" className="form-label">Curso</label>
                <input 
                type="number" 
                id="curso" 
                className="form-control"
                name= "curso"
                value={curso}
                onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="mail" className="form-label">E_mail</label>
                <input 
                type="text" 
                id="mail" 
                className="form-control"
                name= "mail"
                value={mail}
                onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="contraseña" className="form-label">Contraseña</label>
                <input 
                type="text" 
                id="contraseña" 
                className="form-control"
                name= "contraseña"
                value={contraseña}
                onChange={onChange}
                />
                
            </div>
            <div className="mb-3">
                <label htmlFor="profesor_id" className="form-label">Profesor_id</label>
                <input 
                type="number" 
                id="profesor_id" 
                className="form-control"
                name= "profesor_id"
                value={profesor_id}
                onChange={onChange}
                />
                
            </div>
            <div className="mb-3">
                <label htmlFor="calificacion" className="form-label">Calificacion</label>
                <input 
                type="number" 
                id="calificacion" 
                className="form-control"
                name= "calificacion"
                value={calificacion}
                onChange={onChange}
                />
                
            </div>
            <button onClick={onClick}>Cerrar</button>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default StudentCreate;
