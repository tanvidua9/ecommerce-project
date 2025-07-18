import React, { useState,useCallback,useMemo } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDesc from "./components/ProductDesc";
import NotFound from "./components/NotFound";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";

function App() {
  const savedDataString= localStorage.getItem("my-cart") || "{}";
  const savedData= JSON.parse(savedDataString);
 
  const [cart, setCart] = useState(savedData);

  const handleAddToCart = useCallback((productId, count) => {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }, [cart]);


  const totalCount = useMemo(() => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }, [cart]);

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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
