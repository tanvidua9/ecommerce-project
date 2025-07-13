import React, { useState } from "react";
import Product from "./Product";
import productData from "../data/products";

function ProductList() {
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
      return data.sort((x, y) =>
        parseFloat(x.price.replace("$", "")) - parseFloat(y.price.replace("$", ""))
      );
    } else if (sortType === "name") {
      return data.sort((x, y) => x.title.localeCompare(y.title));
    }
    return data;
  }

  const filtered = getFilteredData();
  const finalData = getSortedData([...filtered]);

  return (
    <>
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <select className="border border-gray-300 p-2 rounded" onChange={handleSort}>
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
          <Product key={index} {...product} />
        ))}
      </div>

       <div className="flex justify-start mt-10 mb-10">
            <button className="bg-red-700 text-white px-4 py-2 mr-2 rounded">1</button>
            <button className="bg-white text-red-700 border border-red-700 px-4 py-2 mr-2 rounded">2</button>
            <button className="bg-white text-red-700 border border-red-700 px-4 py-2 rounded">→</button>
        </div>
    </>
  );
}

export default ProductList;
