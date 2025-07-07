import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product";

const productData = [
   {
    title: "Father's Day Coffee Mug",
    category: "Mugs",
    price: "$19.00",
    image: "https://images.pexels.com/photos/5946759/pexels-photo-5946759.jpeg",
  },
  {
    title: "Black Printed Coffee Mug",
    category: "Mugs",
    price: "$15.00",
    image: "https://images.pexels.com/photos/1545668/pexels-photo-1545668.jpeg",
  },
  {
    title: "Printed Brown T-shirt",
    category: "T-shirt",
    price: "$25.00",
    image: "https://images.pexels.com/photos/6311599/pexels-photo-6311599.jpeg",
  },
  {
    title: "Printed Dark Blue T-shirt",
    category: "T-shirt",
    price: "$34.00",
    image: "https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg",
  },
  {
    title: "Green Printed T-shirt",
    category: "T-shirt",
    price: "$34.00",
    image: "https://images.pexels.com/photos/6256298/pexels-photo-6256298.jpeg",
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("default");

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  function handleSort(e) {
    setSortType(e.target.value);
  }

  function getFilteredData() {
    if (!query) return productData;
    return productData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  function getSortedData(data) {
    if (sortType === "price") {
      return data.sort((x, y) => {
        return (
          parseFloat(x.price.replace("$", "")) -
          parseFloat(y.price.replace("$", ""))
        );
      });
    } else if (sortType === "name") {
      return data.sort((x, y) => (x.title < y.title ? -1 : 1));
    }
    return data;
  }

  const filtered = getFilteredData();
  const finalData = getSortedData([...filtered]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="pt-20 flex-1 bg-gray-100 p-6 pb-20 pl-30 pr-30">
        <div className="bg-white px-6 py-4 rounded">
          <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
            <select
              className="border border-gray-300 p-2 rounded"
              onChange={handleSort}
            >
              <option value="default">Default Sorting</option>
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
            </select>

            <input
              value={query}
              onChange={handleSearch}
              placeholder="Search"
              className="border border-gray-700 rounded-md p-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {finalData.map((product, index) => (
              <Product
                key={index}
                title={product.title}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>

          <div className="flex justify-start mt-10 mb-10">
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
