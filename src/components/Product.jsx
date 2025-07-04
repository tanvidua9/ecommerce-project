import React from 'react';

function Product(data) {
  return (
    <div className="p-4 flex flex-col items-center text-center">
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover rounded mb-4" />
      <h4 class="text-md text-gray-600">{data.category}</h4>
      <h3 className="text-lg font-semibold">{data.title}</h3>
      <p className="text-gray-800 font-bold">{data.price}</p>
    </div>
  );
}

export default Product;