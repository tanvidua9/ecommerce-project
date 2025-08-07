import React from "react";

function CartRow({ item, handleRemove, handleChange}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-200 p-4 rounded gap-4">
      <div className="flex items-center gap-3 sm:w-1/3">
        <button className="text-xl" onClick={handleRemove} productid={item.id}>✖</button>
        <img
          // src={item.thumbnail}
          src={"https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg"}
          alt={item.title}
          className="w-12 h-12 object-cover rounded"
        />
        <p className="text-teal-700 font-medium text-sm">{item.title}</p>
      </div>

      <div className="sm:w-1/6 text-sm sm:text-center text-gray-700">
        ${item.price.toFixed(2)}
      </div>

      <div className="sm:w-1/6 sm:text-center text-sm">
        <input
          id={item.id}
          type="number"
          value={item.quantity}
          min={1}
          // onChange={handleChange}
          // productid={item.id}
          onChange={(e) => handleChange(e, item.id)}
          className="w-14 border px-2 py-1 text-center rounded ml-1 sm:ml-0"
        />
      </div>

      <div className="sm:w-1/6 sm:text-right text-sm text-gray-800 font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}

export default CartRow;
