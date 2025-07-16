import React from "react";

function CartRow({ item }) {
  return (
    <div className="flex items-center justify-between border border-gray-200  p-4 rounded">
      <div className="flex items-center gap-3 w-1/3">
        <button className="text-xl">✖</button>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-12 h-12 object-cover rounded"
        />
        <p className="text-teal-700 font-medium text-sm">{item.title}</p>
      </div>

      <div className="w-1/6 text-center">${item.price.toFixed(2)}</div>

      <div className="w-1/6 text-center">
        <input
          type="number"
          defaultValue={item.quantity}
          min={1}
          className="w-14 border px-2 py-1 text-center rounded"
        />
      </div>

      <div className="w-1/6 text-right font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}

export default CartRow;
