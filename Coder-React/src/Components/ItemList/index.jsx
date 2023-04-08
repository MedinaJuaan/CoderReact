import Item from "../Item";
import "../ItemList/itemList.css";

function ItemList({ products }) {
  return (
    <div className="product-space">
      <ul className="product-list">
        {products.map((product, index) => (
          <Item product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
export default ItemList;
