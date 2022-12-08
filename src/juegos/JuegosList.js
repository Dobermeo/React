function JuegosList(props){
    return(
        <table className="tabla1">
        <caption>Profesor</caption>
        <thead>
          <tr>
                       <th className="tr1"> id </th>
                       <th className="tr1"> Nivel </th>
                       <th className="tr1"> Descripcion </th>
                       <th className="tr1"> Opciones</th>
    
                                  
          </tr>
        </thead>
       
       <tbody>

            {props.children}

        </tbody>
        </table>
    );
    }
    
    export default JuegosList;