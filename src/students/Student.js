import React from "react";
import imgBien from '../img/f1.png'; 
import imgMedio from '../img/f2.png'; 
import imgBienb from '../img/f3.png';
//import './student.css';
//import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";
function Student({studentItem}){
  const {setOpenModal, setUpdating, setIdToEdit}= React.useContext(MainContext)

  const onClick = () => {
    console.log(studentItem.id)
    setUpdating(true);
    setOpenModal(true);
    setIdToEdit(studentItem.id);
  }


    return(
       
        <tr>
           <td className="td1">{studentItem.id}</td>
              <td className="td1">{studentItem.nombre}</td>
              <td className="td1">{studentItem.edad}</td>
              <td className="td1">{studentItem.curso}</td>
              <td className="td1">{studentItem.mail}</td>
              <td className="td1">{studentItem.contraseña}</td>
              <td className="td1">{studentItem.profesor_id}</td>
              <td className="td1">{studentItem.calificacion}</td>
              <td className="td1">{studentItem.profesor}</td>
              <td className="tdi">
              {
                         (studentItem.calificacion > 0  && studentItem.calificacion <=6  ) &&   <img  className="imgcar"src={imgBien} />
              }  

              {
                         (studentItem.calificacion >= 7  && studentItem.calificacion <= 8 ) &&   <img  className="imgcar"src={imgMedio} />
              }   

              {
                         (studentItem.calificacion >= 9  && studentItem.calificacion <= 10  ) &&   <img  className="imgcar"src={imgBienb} />
              }      
              </td>
              <td className="td1"><button className="btn btn-primary" onClick={onClick}>Editar</button></td>
              
            
          
        </tr>
      

      
    );
    
    };
    export default Student;