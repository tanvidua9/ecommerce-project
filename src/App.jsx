import React, { useState,useCallback,useMemo, useEffect } from "react";
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
import Loading from "./components/Loading";
import axios from "axios";
import UserRoute from "./components/UserRoute";
import AuthRoute from "./components/AuthRoute";
import UserContext from "./components/UserContext";

function App() {
  const savedDataString= localStorage.getItem("my-cart") || "{}";
  const savedData= JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
  const [user,setUser]= useState();
  const [loadingUser,setLoadingUser]= useState(true);

  console.log("user:" , user);
  
   useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get('https://myeasykart.codeyogi.io/me', {
        headers: {
          Authorization: token
        }
      }).then((response) => {
        setUser(response.data);
        setLoadingUser(false);
      }).catch((error) => {
        console.log("error: ", error);
        setLoadingUser(false);
      })
    } else {
      setLoadingUser(false);
    }
  }, [])


  const handleAddToCart = useCallback((productId, count) => {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }, [cart]);

  function updateCart(newCart){
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }


  const totalCount = useMemo(() => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }, [cart]);

  if(loadingUser){
    return <Loading/>;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}> 
      <div className="flex flex-col min-h-screen">
        <Navbar productCount={totalCount} />
        <main className="pt-20 flex-1 bg-gray-100 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="bg-white px-4 py-4 rounded shadow-sm">
            <Routes>
              <Route index element={<UserRoute><ProductList/></UserRoute>} />
              <Route
                path="/products/:id"
                element={<UserRoute><ProductDesc onAddToCart={handleAddToCart} /></UserRoute>}
              />
              <Route path="/cart" element={<UserRoute><CartPage cart={cart} updateCart={updateCart}/></UserRoute>} />
              <Route path="/login" element={<AuthRoute><LoginPage setUser={setUser} /></AuthRoute>} />
              <Route path="/signup" element={<AuthRoute><SignUpPage setUser={setUser} /></AuthRoute>} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
