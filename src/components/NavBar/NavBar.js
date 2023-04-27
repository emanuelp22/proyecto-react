import CartWidget from "./CartWidget/CartWidget"
import "../NavBar/css/NavBar.css"



const NavBar = () => {
    return (

        <nav>
            <h3> Ferreteria NFP</h3>
            <div className="container-nav">
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Entregas y contacto</li>
                    <li>Carrito<CartWidget/> </li>
                </ul>


            </div>
        </nav>




    )
}

export default NavBar