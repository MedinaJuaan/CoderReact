import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import { Context } from "../../context";
import './ItemDetail.css'
import { Container } from "react-bootstrap";

const ItemDetail = ({ product }) => {
  const [added, setAdded] = useState(0)
  const { onAdd } = useContext(Context)

  function onAddProduct(count) {
    setAdded(count)
    onAdd(product, count)

  }

  return (
    <Container>
      <div className="detail-card text-center">
        <div className="detail-top">
          <img src={product.image} className="detail-img" alt={product.title} />
        </div>
        <div className="detail-bot">
          <h5 className="detail-title">{product.name}</h5>
          <hr />
          <p className="detail-text">{product.description}</p>
          <hr />
          <p className="detail-price stock">Quedan {product.stock} unidades disponibles</p>
          <p className="detail-price total">Precio: ${product.price}</p>
          <div className="detail-cart">
          <div >
            {added == 0 && (
              <ItemCount stock={product.stock} onAdd={onAddProduct} />
            )}
            <div>
              {added >= 1 && (
                <Link to="/cart">
                  <button className="keep-shopping ">Terminar compra</button>
                </Link>
              )}
              <div>
                <Link to="/">
                  <button className="keep-shopping">Seguir comprando</button>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ItemDetail;