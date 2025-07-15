import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDesc from "./components/ProductDesc";
import NotFound from "./components/NotFound";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Inline Style in React:*/}
      {/* <div style={{width: "50%" , "background-color":"red", padding:"5px"}}></div> */}
      <main className="pt-20 flex-1 bg-gray-100 pb-20 pl-30 pr-30">
        <div className="bg-white px-6 py-4 rounded">
          <Routes>
            <Route index element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDesc />} />
            <Route path="*" element={<NotFound/>}/>
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
