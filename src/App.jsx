import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDesc from "./components/ProductDesc";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-20 flex-1 bg-gray-100 p-6 pb-20 pl-30 pr-30">
        <div className="bg-white px-6 py-4 rounded">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:title" element={<ProductDesc />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
