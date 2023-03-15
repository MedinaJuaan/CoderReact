import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../../Mocks/products";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((item) => item.id === parseInt(id)));
      }, 1000);
    });
    promise.then((data) => {
      setProduct(data);
    });
  }, [id]);
  return (
    <div>
      <ItemDetail product= {product}/>
    </div>
  );
}
export default ItemDetailContainer;
