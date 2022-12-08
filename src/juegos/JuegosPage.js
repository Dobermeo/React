import React, { useState, useEffect } from "react";
import { Modal } from '../components/modal/Modal'
import { MainContext } from "../context/MainContext";
import JuegosCreate from "./JuegosCreate";
import JuegosUpdate from "./JuegosUpdate";
import JuegosList from './JuegosList';
import Juegos from './Juegos'
import { getListJuegos, findByNamesJuegos } from '../service/JuegosService'

function JuegosPage() {
  const { openModal, setOpenModal, updating, idToEdit} = React.useContext(MainContext);
  const [juegos, setJuegos] = useState([]);
  const [itemSearch, setItemSearch] = useState('');
  useEffect(() => {
    getListJuegos().then(data => {
      setJuegos(data);
    }
    );
  }, [openModal]);

  const onClick = () => {
    setOpenModal(true)
  }

  const onClickSearch = () => {
    if (itemSearch.trim().length != 0) {
      findByNamesJuegos(itemSearch).then(data => {
        setJuegos(data);
      }
      )
    }
    else
      getListJuegos().then(data => {
        setJuegos(data);
      }
      );
  }
  const onChange = (event) => {
    if (event.target.name === 'itemSearch')
      setItemSearch(event.target.value)
  }

  return (
    <div>
      <h2>Lista de juegos</h2>
      <div>
      <input placeholder="Buscar..." name="itemSearch" value={itemSearch} onChange={onChange} />
      <button onClick={onClickSearch}>Buscar</button>
      <button className="btn btn-primary" onClick={onClick}>Registrar</button>
      </div>
      <JuegosList>
        {
          juegos.map(item =>
            <Juegos
              key={item.id}
              juegosItem={item} />
          )
        }
      </JuegosList>

      {!!openModal &&
        (
          <Modal>
            { updating ? <JuegosUpdate itemJuegosId={idToEdit} /> :<JuegosCreate /> }
          </Modal>
        )
      }
    </div>
  );
}

export default JuegosPage;