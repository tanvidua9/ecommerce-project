import React,{useState}from "react";
import CartList from "../components/CartList";

function CartPage() {
  const [subtotal, setSubtotal] = useState(0);


  return (
    <div className="max-w-5xl mx-auto mt-10 p-4 bg-white rounded">
      <div className="border border-gray-200 rounded">
        <CartList setSubtotal={setSubtotal}/>

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

//why do we need to store the data in localStorage too

