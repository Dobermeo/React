import React from "react";
import './Teacher.css';
import { MainContext } from "../context/MainContext";
function Teacher({teacherItem}){
  const {setOpenModal, setUpdating, setIdToEdit}= React.useContext(MainContext)

  const onClick = () => {
    console.log(teacherItem.id)
    setUpdating(true);
    setOpenModal(true);
    setIdToEdit(teacherItem.id);
  }
    return(
        <tr>
           <td className="td1">{teacherItem.id}</td>
              <td className="td1">{teacherItem.curso}</td>
              <td className="td1">{teacherItem.edad_alumnos}</td>
              <td className="td1">{teacherItem.nombre}</td>
              <td className="td1">{teacherItem.mail}</td>
              <td className="td1">{teacherItem.contraseña}</td>
              <td className="td1"><button className="btn btn-primary" onClick={onClick}>Editar</button></td>
              
            
          
              </tr>
    );
    
    };
    export default Teacher;