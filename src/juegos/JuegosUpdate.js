import React, { useState,useEffect } from "react";
//import { useParams } from "react-router-dom";
import { findByIdJuegos,updateJuegos } from '../service/JuegosService'
import { MainContext } from "../context/MainContext";


function JuegosUpdate({itemJuegosId}) {

    const { setOpenModal,setUpdating} = React.useContext(MainContext);

    const onClick = () => {
      setOpenModal(false)
      setUpdating(false)
  
    }
    
    const [juegos, setJuegos] = useState({niveles:'' ,descripcion:''});


    const onSubmit = (event) => {
        event.preventDefault();
        updateJuegos(juegos).then(data =>{
            setOpenModal(false);
        });
    }

    const onChange = (event) =>{

        if(event.target.name==='niveles')
        setJuegos({...juegos,niveles:event.target.value})
    
        if(event.target.name==='descripcion')
        setJuegos({...juegos,descripcion:event.target.value})
    
      }

      useEffect(() => {    
        findByIdJuegos(itemJuegosId).then(data => {
          setJuegos(data);     
        }
    
        );
    
      }, [itemJuegosId]);
    
        return ( 
            <form onSubmit={onSubmit}>
                <h1>Pagina ACTUALIZAR id</h1>
      <button className="btn btn-primary" onClick={onClick}>Cerrar</button>
                
                <div className="mb-3">
                    <label htmlFor="niveles" className="form-label">Nivel</label>
                    <input 
                    type="number"
                    id="niveles"
                    className="form-control"
                    name= "niveles"
                    value={juegos.niveles}
                    onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripcion</label>
                    <input 
                    type="text" 
                    id="descripcion" 
                    className="form-control"
                    name= "descripcion"
                    value={juegos.descripcion}
                    onChange={onChange}
                    />
                </div>
                <button onClick={onClick}>Cerrar</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
     
    export default JuegosUpdate;