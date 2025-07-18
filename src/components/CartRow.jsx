import React from "react";

function CartRow({ item }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-200 p-4 rounded gap-4">
      
      {/* Product Section */}
      <div className="flex items-center gap-3 sm:w-1/3">
        <button className="text-xl">✖</button>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-12 h-12 object-cover rounded"
        />
        <p className="text-teal-700 font-medium text-sm">{item.title}</p>
      </div>

      {/* Price */}
      <div className="sm:w-1/6 text-sm sm:text-center text-gray-700">
        <span className="sm:hidden font-semibold">Price: </span>
        ${item.price.toFixed(2)}
      </div>

      {/* Quantity */}
      <div className="sm:w-1/6 sm:text-center text-sm">
        <span className="sm:hidden font-semibold">Qty: </span>
        <input
          type="number"
          defaultValue={item.quantity}
          min={1}
          className="w-14 border px-2 py-1 text-center rounded ml-1 sm:ml-0"
        />
      </div>

      {/* Subtotal */}
      <div className="sm:w-1/6 sm:text-right text-sm text-gray-800 font-semibold">
        <span className="sm:hidden font-semibold">Subtotal: </span>
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}

export default CartRow;
