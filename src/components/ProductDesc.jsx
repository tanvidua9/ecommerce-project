import React from "react";

function ProductDesc({ image, title, price, onBack }) {
  return (
    <div className="bg-white shadow-md rounded-lg max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row h-full gap-6">

        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full max-h-96 rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between max-h-96">
          <div className="flex flex-col gap-4 text-left">
            <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
            <p className="text-lg font-bold text-gray-900">{price}</p>
            <p className="text-sm text-gray-700 overflow-auto">
              Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
              consectetur adipisci velit, sed quia non incidunt lores ta porro
              ame. numquam eius modi tempora incidunt lores ta porro ame.
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <div className="flex gap-2 items-center">
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-12 border p-1 text-center rounded"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded text-sm">
                ADD TO CART
              </button>
            </div>

            <button
              className="text-blue-600 text-sm underline"
              onClick={onBack}
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDesc;
