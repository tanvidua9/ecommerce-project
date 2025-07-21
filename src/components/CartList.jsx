import React from "react";
import CartRow from "./CartRow";

function CartList({ items, handleRemove, handleChange, localCart }) {
  return (
    <div>
      {items.map((item) => (
        <CartRow key={item.id} item={{...item, quantity: localCart[item.id] || 1}} handleRemove={handleRemove} handleChange={handleChange}/>
      ))}
    </div>
  );
}

export default CartList;
