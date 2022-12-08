function StudentList(props){
    return(

        <table className="tabla1">
        <caption>Estudiante</caption>
        <thead>
          <tr>
                       <th className="th1"> id </th>
                       <th className="th1"> Nombre </th>
                       <th className="th1"> Edad </th>
                       <th className="th1"> Curso </th>
                       <th className="th1"> E_mail</th>
                       <th className="th1"> Contraseña</th>
                       <th className="th1"> Profesor_id</th>
                       <th className="th1"> Calificacion</th>
                       <th className="th1"> Nombre del profesor</th>
                       <th className="th1"> Reaccion</th>
                       <th className="th1"> Opciones</th>
    
                       
                       
                       
                       
          </tr>
        </thead>
       
       <tbody>

            {props.children}

        </tbody>
        </table>
    );
    }
    
    export default StudentList;