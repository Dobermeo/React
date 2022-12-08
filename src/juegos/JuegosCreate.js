import React, { useState } from "react";
import { MainContext } from "../context/MainContext";
import { createGame } from '../service/JuegosService'

function JuegosCreate() {
  const { setOpenModal } = React.useContext(MainContext);

  const onClick = () => {
    setOpenModal(false)
  }

  const [niveles, setNiveles] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      niveles,
      descripcion,
    }
    createGame(objeto)

  }

  const onChange = (event) =>{

    if(event.target.name==='niveles')
    setNiveles(event.target.value)

    if(event.target.name==='descripcion')
    setDescripcion(event.target.value)

  }

    return ( 
        <form onSubmit={onSubmit}>
            
            
            <div className="mb-3">
                <label htmlFor="niveles" className="form-label">Nivel</label>
                <input 
                type="number"
                id="niveles"
                className="form-control"
                name= "niveles"
                value={niveles}
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
                value={descripcion}
                onChange={onChange}
                />
            </div>
            <button onClick={onClick}>Cerrar</button>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default JuegosCreate;