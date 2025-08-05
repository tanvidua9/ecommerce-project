import React, { memo,useContext } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Navbar({ productCount}) {
  const { setUser } = useContext(UserContext);
  function handleLogout(){
    localStorage.removeItem("token");
    setUser(undefined);
  }

  return (
    <div className="bg-white shadow-sm py-2 fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 z-50">
      <button onClick={() => navigate("/")} className="text-xl font-bold text-teal-700">ShopSmart</button>

      <div className="flex items-center gap-3">
        <button onClick={handleLogout} className="text-sm text-teal-700 border border-teal-600 px-3 py-1 rounded hover:bg-teal-50">
          Logout
        </button>
        <Link to="/cart" className="relative ml-3">
          <RiShoppingCartLine className="text-3xl text-teal-700" />
          <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {productCount}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default memo(Navbar);
