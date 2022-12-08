import React, { useState } from "react";
import { MainContext } from "../context/MainContext";
import { createTeacher } from '../service/ProfesorService'

function TeacherCreate() {
    const { setOpenModal } = React.useContext(MainContext);

  const onClick = () => {
    setOpenModal(false)
  }

  const [curso, setCurso] = useState('');
  const [edad_alumnos, setEdad_alumnos] = useState('');
  const [nombre, setNombre] = useState('');
  const [mail, setMail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      curso, 
      edad_alumnos, 
      nombre,
      mail, 
      contraseña, 
    }
    createTeacher(objeto)

  }

  const onChange = (event) =>{

    if(event.target.name==='curso')
    setCurso(event.target.value)

    if(event.target.name==='edad_alumnos')
    setEdad_alumnos(event.target.value)

    if(event.target.name==='nombre')
    setNombre(event.target.value)

    if(event.target.name==='mail')
    setMail(event.target.value)

    if(event.target.name==='contraseña')
    setContraseña(event.target.value)
  }

    return ( 
        <form onSubmit={onSubmit}>
            
            
            <div className="mb-3">
                <label htmlFor="curso" className="form-label">Curso</label>
                <input 
                type="number"
                id="nombre"
                className="form-control"
                name= "curso"
                value={curso}
                onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="edad_alumnos" className="form-label">Edad de sus alumnos</label>
                <input 
                type="number" 
                id="edad_alumnos" 
                className="form-control"
                name= "edad_alumnos"
                value={edad_alumnos}
                onChange={onChange}
                />
            </div>
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

            <button onClick={onClick}>Cerrar</button>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default TeacherCreate;
