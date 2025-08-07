import React, { useState,useCallback,useMemo} from "react";
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
import UserRoute from "./components/UserRoute";
import AuthRoute from "./components/AuthRoute";
import Alert from "./components/Alert";
import UserProvider from "./providers/UserProvider";
import AlertProvider from "./providers/AlertProvider";
import CartProvider from "./providers/CartProvider";


function App() {

  return (
    <UserProvider>
      <CartProvider>
        <AlertProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar/>
            <Alert/>
            <main className="pt-20 flex-1 bg-gray-100 pb-20 px-4 sm:px-6 lg:px-8">
              <div className="bg-white px-4 py-4 rounded shadow-sm">
                <Routes>
                  <Route index element={<UserRoute><ProductList/></UserRoute>} />
                  <Route
                    path="/products/:id"
                    element={<UserRoute><ProductDesc/></UserRoute>}
                  />
                  <Route path="/cart" element={<UserRoute><CartPage/></UserRoute>} />
                  <Route path="/login" element={<AuthRoute><LoginPage/></AuthRoute>} />
                  <Route path="/signup" element={<AuthRoute><SignUpPage/></AuthRoute>} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
            <Footer />
          </div>
        </AlertProvider>
      </CartProvider> 
    </UserProvider>
  );
}

export default App;
