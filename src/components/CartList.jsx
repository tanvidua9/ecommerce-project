import React from "react";
import CartRow from "./CartRow";

function CartList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <CartRow key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartList;
