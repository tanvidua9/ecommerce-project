import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="pt-20 flex-1 bg-gray-100 p-6 pb-20 pl-30 pr-30">
        <div className="bg-white px-6 py-4 rounded">
          <div className="flex justify-end mb-6">
            <select className="border border-gray-300 p-2 rounded">
              <option>Default Sorting</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Product
              title="Black Printed Coffee Mug"
              category="Mugs"
              price="$15.00"
              image="https://images.pexels.com/photos/1545668/pexels-photo-1545668.jpeg"
            />
            <Product
              title="Father's Day Coffee Mug"
              category="Mugs"
              price="$19.00"
              image="https://images.pexels.com/photos/5946759/pexels-photo-5946759.jpeg"
            />
            <Product
              title="Green Printed T-shirt"
              category="T-shirt"
              price="$34.00"
              image="https://images.pexels.com/photos/6256298/pexels-photo-6256298.jpeg"
            />
            <Product
              title="Printed Brown T-shirt"
              category="T-shirt"
              price="$25.00"
              image="https://images.pexels.com/photos/6311599/pexels-photo-6311599.jpeg"
            />
            <Product
              title="Printed Dark Blue T-shirt"
              category="T-shirt"
              price="$34.00"
              image="https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg"
            />
          </div>

          <div className="flex justify-start mt-6 mb-10 mt-10">
            <button className="bg-red-700 text-white px-4 py-2 mr-2 rounded">1</button>
            <button className="bg-white text-red-700 border border-red-700 px-4 py-2 mr-2 rounded">2</button>
            <button className="bg-white text-red-700 border border-red-700 px-4 py-2 rounded">→</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
