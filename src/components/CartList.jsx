import React, { useState, useEffect } from "react";
import CartRow from "./CartRow";
import Loading from "../components/Loading";
import { withCart } from "./withProvider";

function CartList({cart,updateCart, setSubtotal}) {
  const [quantityMap, setQuantityMap]= useState({});
  
  const cartToQuantityMap= ()=>
    cart.reduce(
      (m,cartItem)=>({...m , [cartItem.product.id]: cartItem.quantity}),
    {}
  );


  useEffect(
    function(){
      setQuantityMap(cartToQuantityMap());
    },
    [cart]
  )

  function handleRemove(event){
    const productId= event.currentTarget.getAttribute("productid");
    const newQuantityMap= cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  }

  function updateMyCart(){
    updateCart(quantityMap);
  }


  function handleChange(event,productId){
      const newValue= +event.target.value;
      //const productId= event.target.getAttribute("productid");
      const newQuantityMap= {...quantityMap, [productId]: newValue};
      setQuantityMap(newQuantityMap);
    }
  
  
    useEffect(() => {
      let subtotal = 0;
      for (let cartItem of cart) {
        const quantity = quantityMap[cartItem.product.id] || cartItem.quantity;
        subtotal += cartItem.product.price * quantity;
      }
      setSubtotal(subtotal);
    }, [cart, quantityMap]);

  

  return (
    <div>
      <div className="hidden sm:flex justify-between bg-gray-100 font-semibold text-sm px-4 py-2">
        <div className="w-1/3">Product</div>
        <div className="w-1/6 text-center">Price</div>
        <div className="w-1/6 text-center">Quantity</div>
        <div className="w-1/6 text-right">Subtotal</div>
      </div>

      {cart.map((cartItem) => (
        <CartRow
          key={cartItem.product.id}
          item={{ ...cartItem.product, quantity: quantityMap[cartItem.product.id] || cartItem.quantity }}
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

export default withCart(CartList);
