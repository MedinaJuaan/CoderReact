import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const ItemDetail = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="bottom" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Link to={`/cart`}>
          <Button variant="primary">Agregar al carrito</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default ItemDetail;
