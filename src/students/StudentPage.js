import React, { useState, useEffect } from "react";
import { Modal } from '../components/modal/Modal'
import { MainContext } from "../context/MainContext";
import StudentCreate from "./StudentCreate";
import StudentUpdate from "./StudentUpdate";
import StudentList from './StudentList';
import Student from './Student'
import { getListProfestu, findByNamesStudent } from '../service/EstudianteService'
import './student.css'

function StudentPage() {
  const { openModal, setOpenModal, updating, idToEdit} = React.useContext(MainContext);
  const [student, setStudent] = useState([]);
  const [itemSearch, setItemSearch] = useState('');
  useEffect(() => {
    getListProfestu().then(data => {
      setStudent(data);
    }
    );
  }, [openModal]);

  const onClick = () => {
    setOpenModal(true)
  }

  const onClickSearch = () => {
    if (itemSearch.trim().length != 0) {
      findByNamesStudent(itemSearch).then(data => {
        setStudent(data);
      }
      )
    }
    else
    getListProfestu().then(data => {
        setStudent(data);
      }
      );
  }
  const onChange = (event) => {
    if (event.target.name === 'itemSearch')
      setItemSearch(event.target.value)
  }

  return (
    


    <div>
      <h2>Lista de estudiante</h2>
      <div>
      <input placeholder="Buscar..." name="itemSearch" value={itemSearch} onChange={onChange} />
      <button onClick={onClickSearch}>Buscar</button>
      <button className="btn btn-primary" onClick={onClick}>Registrar</button>
      </div>
      
      <StudentList>
        {
          student.map(item =>
            <Student
              key={item.id}
              studentItem={item} />
          )
        }
      </StudentList>

      {!!openModal &&
        (
          <Modal>
            { updating ? <StudentUpdate itemStudentId={idToEdit} /> :<StudentCreate /> }
          </Modal>
        )
      }
      
    </div>
  );
}

export default StudentPage;