import Item from "../Item";
import "../ItemList/itemList.css";
import { Container } from "react-bootstrap";

function ItemList({ products }) {
  return (
    <Container>
      <div className="products-container">
        {products.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </div>
    </Container>
  );
}
export default ItemList;