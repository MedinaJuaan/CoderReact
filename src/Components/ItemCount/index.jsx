import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {
  
  const [count, setCount] = useState(1);
  return (

    <div className="itemCount-cont">
      <div className="counters">
        <button
          type="button"
          className="btn itemcount-btn"
          onClick={() => setCount((prevState) => prevState - 1)}
          disabled={count < 2}>
          -
        </button>
        <div className="btn count-number">
          {count}
        </div>
        <button
          type="button"
          className="btn itemcount-btn"
          disabled={count === stock}
          onClick={() => setCount((prevState) => prevState + 1)}>
          +
        </button>
      </div>

      <div>
        <button className="add-item" onClick={() => onAdd(count)}>
          Agregar {count} al carrito
        </button>
      </div>

    </div >

  );
};

export default ItemCount;
