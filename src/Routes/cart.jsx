import { useContext } from "react";
import NavBar from "../Components/NavBar";
import { Context } from "../context";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import trash from '../assets/Images/Misc/trash3.svg'
import '../index.css'


function Cart() {
  const { productsAdded, clear, removeItem } = useContext(Context);
  const total = productsAdded.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );


  return (
    <>

      <NavBar />
      <Container>

        <h1 className="cart-title">Mi carrito</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Precio total</th>
            </tr>
          </thead>
          <tbody>
            {productsAdded.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
                <td>${product.price * product.quantity}</td>
                <td className='align-middle'>
                <Link onClick={() => { removeItem(product.id) }} title='Eliminar producto'><img src={trash} alt={"Eliminar producto"} /></Link>

                </td>
              </tr>
            ))}{" "}
            <p>Total compra $ {total}</p>
          </tbody>
        </Table>
        <Link to={"/"}>
          <button className="cart-btn">Seguir comprando</button>
        </Link>
        <Link to={"/checkout"}>
          <button className="cart-btn">Terminar compra</button>
        </Link>
        <button 
        onClick={clear}
        className="cart-btn">Vaciar Carrito</button>

      </Container>

    </>
  );
}

export default Cart;
