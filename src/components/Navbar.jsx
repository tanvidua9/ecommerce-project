import React from "react";
import { RiShoppingCartLine } from "react-icons/ri"; 
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <div className="bg-white shadow-sm py-2 fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 z-50">
     <h1 className="text-xl font-bold text-teal-700">ShopSmart</h1>

      <Link to="/cart" className="relative">
        <RiShoppingCartLine className="text-4xl text-teal-700" /> 
        <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {productCount}
        </span>
      </Link>
    </div>
  );
}

export default Navbar;
