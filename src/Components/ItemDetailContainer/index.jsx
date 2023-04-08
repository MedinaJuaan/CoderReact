import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", params.id);

    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ ...snapshot.data(), id: snapshot.id });
        }
      })
      .catch((error) => console.log({ error }));
  }, []);

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}
export default ItemDetailContainer;
