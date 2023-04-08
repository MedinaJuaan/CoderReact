import Form from "react-bootstrap/Form";
import NavBar from "../Components/NavBar";
import { Context } from "../context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";
import '../index.css'

const CheckOut = () => {

  const { sendOrder, handleFormSubmit, orderId } = useContext(Context);

  // const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(formData);
  };

  const handleChange = (event) => {
    const { name, email, phone, value } = event.target;
    setFormData({ ...formData, name: value, email : value, phone: value });
  }


  return (
    <div>
      <NavBar />
      <Container className="checkout-container">
      <div className="row">
        <div className="col">
          <Form onSubmit={handleSubmit} className="form-container">

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} placeholder="Ingrese su nombre" onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Direccion de Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email}placeholder="Ingresar Email" onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" name="phone" value={formData.phone} placeholder="Ingrese su telefono" onChange={handleChange} required />
            </Form.Group>
            <button className="cart-btn"type='submit' variant="primary" onClick={sendOrder} >
              Generar pedido
            </button>
          </Form>
        </div>
        <div className="row my-5">
          {orderId ? <Navigate to={"/thankyou/" + orderId} /> : ""}
        </div>
      </div>
      </Container>
    </div>
  );
};
export default CheckOut;
