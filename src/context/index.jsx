import { createContext, useState } from "react";
import {  collection,  getFirestore,  addDoc,  doc,  updateDoc,} from "firebase/firestore";

export const Context = createContext();

export function CustomProvider({ children }) {

  const [productsAdded, setProductsAdded] = useState([]);

  const [orderId, setOrderId] = useState(null);


  //Probamos form
  const [formData, setFormData] = useState({});
  
  const handleFormSubmit = (data) => {
    setFormData(data);
  }

  //Funcion para form



  function onAdd(product, quantity) {
    const isAdded = isInCart(product);
    if (isAdded) {
      const productToModify = productsAdded.find(
        (productsAdded) => productsAdded.id === product.id
      );
      const productModified = {
        ...productToModify,
        quantity: productToModify.quantity + quantity,
      };
      setProductsAdded((prevState) =>
        prevState.map((productsAdded) =>
          productsAdded.id === product.id ? productModified : productsAdded
        )
      );
    } else {
      setProductsAdded((prevState) =>
        prevState.concat({ ...product, quantity })

      );
    }
  }

  function removeItem(itemId) {
    setProductsAdded((prevState) =>
      prevState.filter((productAdded) => productAdded.id !== itemId)
    );
  }
  function clear() {
    setProductsAdded([]);
  }
  function isInCart(product) {
    return productsAdded.some(
      (productsAdded) => productsAdded.id === product.id
    );
  }

  const db = getFirestore();

function updateOrder(productId, finalStock) {
  const itemRef = doc(db, "items", productId);
  updateDoc(itemRef, { stock: finalStock }).catch((error) =>
    console.log({ error })
  );
}

function sendOrder() {
  const total = productsAdded.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  const order = {
    buyer: formData,
    items: productsAdded,
    total: total,
  };

  const collectionRef = collection(db, "orders");

  addDoc(collectionRef, order)
    .then((response) => {
      const orderId = response.id; 
      setOrderId(orderId);
      productsAdded.map((product) => {
        const finalStock = product.stock - product.quantity;
        updateOrder(product.id, finalStock);
      });
    })
    .catch((error) => console.log({ error }));
}



  return (
    <Context.Provider value={{ productsAdded, onAdd , removeItem, clear, sendOrder, orderId, formData, handleFormSubmit}}>
      {children}
    </Context.Provider>
  );
}