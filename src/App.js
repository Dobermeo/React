import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainProvider  } from "./context/MainContext";
import './App.css';
import TeacherPage from './teacher/TeacherPage';
import StudentPage from './students/StudentPage';
import JuegosPage from './juegos/JuegosPage';
import Navbar from "./components/Navbar";
import StudentCreate from "./students/StudentCreate";
import TeacherCreate from "./teacher/TeacherCreate";
import JuegosCreate from "./juegos/JuegosCreate";
import StudentUpdate from "./students/StudentUpdate";

function App () {

  return (
    <MainProvider>

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/estudiante" element={<StudentPage />} />
        <Route path="/profe" element={<TeacherPage />} />  
        <Route path="/juegos" element={<JuegosPage />} /> 
        <Route path="/createstudiante" element={<StudentCreate />}/>
        <Route path="/createprofesor" element={<TeacherCreate />}/>
        <Route path="/creategame" element={<JuegosCreate />}/>
        <Route path="/estudianteupdate/:studentId" element={ <StudentUpdate /> }/>
        
        
      </Routes>
    </BrowserRouter>   
    </MainProvider>
  );
}

export default App;
