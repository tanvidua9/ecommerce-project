import React from "react";
import CartRow from "./CartRow";

function CartList({ items, handleRemove, handleChange, localCart, updateMyCart }) {
  return (
    <div>
      <div className="hidden sm:flex justify-between bg-gray-100 font-semibold text-sm px-4 py-2">
        <div className="w-1/3">Product</div>
        <div className="w-1/6 text-center">Price</div>
        <div className="w-1/6 text-center">Quantity</div>
        <div className="w-1/6 text-right">Subtotal</div>
      </div>

      {items.map((item) => (
        <CartRow
          key={item.id}
          item={{ ...item, quantity: localCart[item.id] || 1 }}
          handleRemove={handleRemove}
          handleChange={handleChange}
        />
      ))}

      <div className="flex justify-between items-center flex-wrap gap-4 px-4 py-4">
        <div className="flex gap-3 flex-wrap">
          <input
            placeholder="Coupon code"
            className="border px-3 py-2 rounded text-sm w-40"
          />
          <button className="bg-teal-500 text-white text-sm px-4 py-2 rounded">
            APPLY COUPON
          </button>
        </div>

        <div>
          <button
            className="bg-teal-500 text-white text-sm px-4 py-2 rounded"
            onClick={updateMyCart}
          >
            UPDATE CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
