import React, { useState, useEffect } from "react";
import { Modal } from '../components/modal/Modal'
import { MainContext } from "../context/MainContext";
import TeacherCreate from "./TeacherCreate";
import TeacherUpdate from "./TeacherUpdate";
import TeacherList from './TeacherList';
import Teacher from './Teacher'
import { getListTeachstu, findByNamesTeacher} from '../service/ProfesorService'


function TeacherPage() {
  const { openModal, setOpenModal, updating, idToEdit} = React.useContext(MainContext);
  const [teacher, setTeacher] = useState([]);
  const [itemSearch, setItemSearch] = useState('');
  useEffect(() => {
    getListTeachstu().then(data => {
      setTeacher(data);
    }
    );
  }, [openModal]);

  const onClick = () => {
    setOpenModal(true)
  }

  const onClickSearch = () => {
    if (itemSearch.trim().length != 0) {
      findByNamesTeacher(itemSearch).then(data => {
        setTeacher(data);
      }
      )
    }
    else
      getListTeachstu().then(data => {
        setTeacher(data);
      }
      );
  }
  const onChange = (event) => {
    if (event.target.name === 'itemSearch')
      setItemSearch(event.target.value)
  }

  return (
    <div>
      <h2>Lista de docentes</h2>
      <div>
      <input placeholder="Buscar..." name="itemSearch" value={itemSearch} onChange={onChange} />
      <button onClick={onClickSearch}>Buscar</button>
      <button className="btn btn-primary" onClick={onClick}>Registrar</button>
      </div>
      <TeacherList>
        {
          teacher.map(item =>
            <Teacher
              key={item.id}
              teacherItem={item} />
          )
        }
      </TeacherList>

      {!!openModal &&
        (
          <Modal>
            { updating ? <TeacherUpdate itemTeacherId={idToEdit} /> :<TeacherCreate /> }
          </Modal>
        )
      }

    </div>
  );
}

export default TeacherPage;