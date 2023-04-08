import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/root";
import ItemRoot from "./Routes/item";
import Cart from "./Routes/cart";
import CheckOut from "./Routes/checkout";
import ThankYou from "./Routes/thankyou"
import { initializeApp } from "firebase/app";
import { CustomProvider } from "./context";

const firebaseConfig = {
  apiKey: "AIzaSyDiTuyNqy_VHUrDIzxihp6Ryngz6tVrESg",
  authDomain: "ecommerce-coderreact.firebaseapp.com",
  projectId: "ecommerce-coderreact",
  storageBucket: "ecommerce-coderreact.appspot.com",
  messagingSenderId: "605779131087",
  appId: "1:605779131087:web:2c487b033d2864c563d5ba",
};


initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <CheckOut/>,
  },
  {
    path: "/thankyou/:id",
    element: <ThankYou/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);
