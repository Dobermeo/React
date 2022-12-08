import React, { useState,useEffect } from "react";
//import { useParams } from "react-router-dom";
import { findByIdTeacher,updateTeacher } from '../service/ProfesorService'
import { MainContext } from "../context/MainContext";


function TeacherUpdate({itemTeacherId}) {

    const { setOpenModal,setUpdating } = React.useContext(MainContext);

    const onClick = () => {
      setOpenModal(false)
      setUpdating(false)
  
    }
    
    const [teacher, setTeacher] = useState({curso:'' ,edad_alumnos:'',nombre:'',mail: '' ,contraseña:''});


    const onSubmit = (event) => {
        event.preventDefault();
        updateTeacher(teacher).then(data =>{
            setOpenModal(false);
        });
    }

    const onChange = (event) => {
        if(event.target.name==='curso')
        setTeacher({...teacher,curso:event.target.value})
        if(event.target.name==='edad_alumnos')
        setTeacher({...teacher,edad_alumnos:event.target.value,})    
      if(event.target.name==='nombre')    
      setTeacher({...teacher,nombre:event.target.value})
      if(event.target.name==='mail')
      setTeacher({...teacher,mail:event.target.value})
      if(event.target.name==='contraseña')
      setTeacher({...teacher,contraseña:event.target.value})
    }

    useEffect(() => {    
        findByIdTeacher(itemTeacherId).then(data => {
          setTeacher(data);     
        }
    
        );
    
      }, [itemTeacherId]);

    return (

        <form onSubmit={onSubmit}>
                  <h1>Pagina ACTUALIZAR id</h1>
      <button className="btn btn-primary" onClick={onClick}>Cerrar</button>
            
      <div className="mb-3">
                <label htmlFor="curso" className="form-label">Curso</label>
                <input 
                type="number"
                id="nombre"
                className="form-control"
                name= "curso"
                value={teacher.curso}
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
                value={teacher.edad_alumnos}
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
                value={teacher.nombre}
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
                value={teacher.mail}
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
                value={teacher.contraseña}
                onChange={onChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default TeacherUpdate