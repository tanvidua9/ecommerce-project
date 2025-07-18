import React from "react";
import CartList from "../components/CartList";

const sampleCart = [
  {
    id: 1,
    title: "Black Printed Coffee Mug",
    thumbnail:
      "https://images.pexels.com/photos/3483967/pexels-photo-3483967.jpeg",
    price: 15,
    quantity: 2,
  },
  {
    id: 2,
    title: "Printed Dark Blue Tshirt",
    thumbnail:
      "https://images.pexels.com/photos/19362668/pexels-photo-19362668.jpeg",
    price: 34,
    quantity: 4,
  },
];

function CartPage() {
  let subtotal = 0;
  for (let item of sampleCart) {
    subtotal += item.price * item.quantity;
  }


  return (
    <div className="max-w-5xl mx-auto mt-10 p-4 bg-white rounded">
      <div className="border border-gray-200 rounded">
        <div className="hidden sm:flex justify-between bg-gray-100 font-semibold text-sm px-4 py-2">
          <div className="w-1/3">Product</div>
          <div className="w-1/6 text-center">Price</div>
          <div className="w-1/6 text-center">Quantity</div>
          <div className="w-1/6 text-right">Subtotal</div>
        </div>

        <CartList items={sampleCart} />

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
            <button className="bg-teal-300 text-gray-500 text-sm px-4 py-2 rounded">
              UPDATE CART
            </button>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <div className="border border-gray-300 p-4 rounded w-full sm:w-2/3 md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Cart totals</h2>
            <div className="flex justify-between mb-2 text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-sm">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-teal-500 text-white mt-4 px-4 py-2 rounded">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
