import React from "react";
import { Link } from "react-router-dom";

const getRandomSale = () => {
  return (Math.random() * (30 - 5) + 5).toFixed(1);
};

function Product({ id, thumbnail, title, price, category }) {
  const sale = getRandomSale();

  return (
    <div className="p-4 flex flex-col items-center text-center bg-white rounded shadow-sm relative">
      <div className="absolute top-2 right-2 text-xs text-orange-600 font-bold">
        {sale}% <br /> OFF
      </div>

      <div className="w-full h-48 mb-4">
        <img
          src={thumbnail}
          alt={title}
          className="object-contain w-full h-full rounded"
        />
      </div>

      <h4 className="text-sm text-gray-500">{category}</h4>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-800 font-bold">${price}</p>

      

      <Link
        to={`/products/${id}`}
        className="rounded px-3 py-1 bg-teal-600 text-white text-sm mt-2"
      >
        See description
      </Link>
    </div>
  );
}

export default Product;
