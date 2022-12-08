import React from "react";
import { MainContext } from "../context/MainContext";
import './juegos.css';
function Juegos({juegosItem}){
  const {setOpenModal, setUpdating, setIdToEdit}= React.useContext(MainContext)

  const onClick = () => {
    console.log(juegosItem.id)
    setUpdating(true);
    setOpenModal(true);
    setIdToEdit(juegosItem.id);
  }
    return(
        <tr>
           <td className="ta1">{juegosItem.id}</td>
              <td className="ta1">{juegosItem.niveles}</td>
              <td className="ta1">{juegosItem.descripcion}</td>
              <td className="ta1"><button className="btn btn-primary" onClick={onClick}>Editar</button></td>
              
            
          
        </tr>
    );
    
    };
    export default Juegos;