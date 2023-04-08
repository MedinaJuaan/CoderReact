import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ product }) {
  return (
    <Card className="item-card">
      <Card.Img className='card-img' variant="bottom" src={product.image} />
      <Card.Body className="card-info">
        <hr className="divider"/>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <hr className="divider"/>
        <Link to={`/item/${product.id}`}>
          <button className="info-btn" variant="primary">Mas información</button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;