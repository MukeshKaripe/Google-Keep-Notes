import { Link , NavLink } from "react-router-dom";
import './Menu.css';
const Menu = () =>{
    return (
        <>
        <NavLink activeclassname='active_class_usage' to='/' >
       About us
        </NavLink>
        <NavLink  activeclassname="active_class_usage" to='/contact'>
      contact us
        </NavLink>
        <NavLink to="/home" activeclassname="active_class_usage">
            Home
          </NavLink>
          <NavLink to="/search" activeclassname="active_class_usage">
           search
          </NavLink>
          <NavLink  to="/users/:name" >Users</NavLink>
        <br>
        </br>
        <br></br>
        <a   href="/">About with anchor tag</a>
        <a href="/contact">contact should be with anchor tag</a>
        </>
    )
    ;
    }
    
    export default Menu;
