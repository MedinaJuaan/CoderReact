import CartWidget from "../CartWidget";
import "./NavBar.css";
function NavBar () {
    return(
        <div className="navbar">
            <ul>
                <li>
                    <button>Camaras</button>
                </li>
                <li>
                    <button>Alarmas</button>
                </li>
                <li>
                    <button>Accesorios Camaras</button>
                </li>
                <li>
                    <button>Accesorios Alarmas</button>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}
export default NavBar