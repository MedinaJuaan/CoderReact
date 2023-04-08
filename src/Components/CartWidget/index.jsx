import "./CartWidget.css";
import cart from "../../assets/Images/Misc/cart-fill.svg";
import { useContext } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";

function CartWidget() {
  const { productsAdded } = useContext(Context);
  return (

    productsAdded.length > 0 ?

    <Link to="/cart" className="btn position-relative" title='Ir al carrito'>
    <div className="cart-widget">
      <img src={cart} alt={'Cart Icon'}/>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{productsAdded.length} </span>
    </div>
  </Link>
  :
  ''
  );
}

export default CartWidget;
