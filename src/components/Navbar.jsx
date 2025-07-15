import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom"; 

function Navbar({ productCount }) {
  return (
    <div className="bg-white shadow-sm py-2 fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 z-50">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon Logo"
        className="h-8"
      />

      {/* 🛒 Make cart icon clickable */}
      <Link to="/cart" className="relative">
        <RiShoppingBagLine className="text-4xl text-blue-950" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {productCount}
        </span>
      </Link>
    </div>
  );
}

export default Navbar;
