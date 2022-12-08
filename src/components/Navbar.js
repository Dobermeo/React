import { NavLink } from "react-router-dom";
import './Navbar.css'
export default function Navbar (){

return (
    <ul>
        <li>
            <NavLink to="/estudiante">
                Estudiante
            </NavLink>
        </li>
        <li>
            <NavLink to="/profe">
                Profesor
            </NavLink>
        </li>
        <li>
            <NavLink to="/juegos">
                Juegos
            </NavLink>
        </li>
    </ul>
);

}