import CartWidget from "./CartWidget/CartWidget"
import "../NavBar/css/NavBar.css"
import {NavLink , Link} from 'react-router-dom'
    



const NavBar = () => {
    return (

        <nav className="NavBar">
            <Link to='/'>
             <h3>Ferreteria NFP</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/inicio`}className={({isActive}) => isActive ? 'ActiveOption' : 'NavBar'}> Inicio</NavLink>
                <NavLink to={`/category/ferreteria`}className={({isActive}) => isActive ? 'ActiveOption' : 'NavBar'}> Ferreteria</NavLink>
                <NavLink to={`/category/Corralon`}className={({isActive}) => isActive ? 'ActiveOption' : 'NavBar'}> Corralón</NavLink>
                <NavLink to={`/category/Carrito`}className={({isActive}) => isActive ? 'ActiveOption' : 'NavBar'}><CartWidget/></NavLink>
            </div>
           
            

        </nav>


        
    )
}

export default NavBar