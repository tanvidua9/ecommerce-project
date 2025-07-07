import React, { useState } from 'react';
import ProductDesc from './ProductDesc';

function Product({ image, title, price, category }) {
  const [showDesc, setShowDesc] = useState(false);

  if (showDesc) {
    return (
      <ProductDesc
        image={image}
        title={title}
        price={price}
        onBack={() => setShowDesc(false)} 
      />
    );
  }

  return (
    <div className="p-4 flex flex-col items-center text-center">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
      <h4 className="text-md text-gray-600">{category}</h4>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-800 font-bold">{price}</p>

      <button
        className="rounded-md p-1 bg-gray-800 text-white text-sm mt-2"
        onClick={() => setShowDesc(true)}
      >
        See description
      </button>
    </div>
  );
}

export default Product;
