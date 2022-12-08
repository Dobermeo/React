import React, { useState,useEffect } from "react";
//import { useParams } from "react-router-dom";
import { findByIdStudent,updateStudent } from '../service/EstudianteService'
import { MainContext } from "../context/MainContext";


function StudentUpdate({itemStudentId}) {

    const { setOpenModal,setUpdating, idToEdit } = React.useContext(MainContext);

    const onClick = () => {
      setOpenModal(false)
      setUpdating(false)
  
    }
    
    const [student, setStudent] = useState({nombre:'' ,edad:'',curso:'',mail: '' ,contraseña:'' ,profesor_id:'' ,calificacion:''});


    const onSubmit = (event) => {
        event.preventDefault();
        updateStudent(student).then(data =>{
            setOpenModal(false);
        });
    }

    const onChange = (event) => {
        if(event.target.name==='nombre')
        setStudent({...student,nombre:event.target.value})
        if(event.target.name==='edad')
        setStudent({...student,edad:event.target.value,})    
      if(event.target.name==='curso')    
      setStudent({...student,curso:event.target.value})
      if(event.target.name==='mail')
      setStudent({...student,mail:event.target.value})
      if(event.target.name==='contraseña')
      setStudent({...student,contraseña:event.target.value})

      if(event.target.name==='profesor_id')
      setStudent({...student,profesor_id:event.target.value})

      if(event.target.name==='calificacion')
      setStudent({...student,calificacion:event.target.value})
    }

    useEffect(() => {    
        findByIdStudent(itemStudentId).then(data => {
          setStudent(data);     
        }
    
        );
    
      }, [itemStudentId]);

    return (

        <form onSubmit={onSubmit}>
                  <h1>Pagina ACTUALIZAR id</h1>
      <button className="btn btn-primary" onClick={onClick}>Cerrar</button>
      <button type="submit" className="btn btn-primary">Submit</button>
            
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                type="text"
                id="nombre"
                className="form-control"
                name= "nombre"
                value={student.nombre}
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
                value={student.edad}
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
                value={student.curso}
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
                value={student.mail}
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
                value={student.contraseña}
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
                value={student.profesor_id}
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
                value={student.calificacion}
                onChange={onChange}
                /> 
            </div>
        </form>
    );

}

export default StudentUpdate