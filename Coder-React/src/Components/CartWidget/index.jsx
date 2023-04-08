import "./CartWidget.css";
import carrito from "../../assets/Images/Misc/carrito.png";

function CartWidget() {
  return (
    <div className="cart-widget">
      <img src={carrito} alt="Logo carrito" />
      <span>8</span>
    </div>
  );
}

export default CartWidget;
