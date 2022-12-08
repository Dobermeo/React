function TeacherList(props){
    return(
        <table className="tabla1">
        <caption>Profesor</caption>
        <thead>
          <tr>
                       <th className="t1"> id </th>
                       <th className="t1"> Curso </th>
                       <th className="t1"> Edad_alumnos </th>
                       <th className="t1"> Nombre </th>
                       <th className="t1"> E_mail</th>
                       <th className="t1"> Contraseña</th>
                       <th className="t1"> Opciones</th>
    
                       
                       
                       
                       
          </tr>
        </thead>
       
       <tbody>

            {props.children}

        </tbody>
        </table>
    );
    }
    
    export default TeacherList;