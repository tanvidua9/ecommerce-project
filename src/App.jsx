import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDesc from "./components/ProductDesc";
import NotFound from "./components/NotFound";
import CartPage from "./Pages/CartPage";


function App() {
  const savedDataString= localStorage.getItem("my-cart") || "{}";
  const savedData= JSON.parse(savedDataString);
 
  const [cart, setCart] = useState(savedData);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString= JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar productCount={totalCount} />
      <main className="pt-20 flex-1 bg-gray-100 pb-20 pl-30 pr-30">
        <div className="bg-white px-6 py-4 rounded">
          <Routes>
            <Route index element={<ProductList />} />
            <Route
              path="/products/:id"
              element={<ProductDesc onAddToCart={handleAddToCart} />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
