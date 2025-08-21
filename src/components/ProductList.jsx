import React, { useEffect, useState } from "react";
import Product from "./Product";
import NoMatching from "./NoMatching";
import { getProductList } from "../api";
import Loading from "./Loading";

function ProductList() {
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("default");
  const[allProducts, setAllProducts]=useState([]);
  const [loading,setLoading]= useState(true);

  useEffect(()=>{
    const xyz = getProductList();
    const abc = xyz.then(function(products){
      setAllProducts(products);
      setLoading(false);
    })
  },[])

  console.log(allProducts);

  if (loading) return <Loading />;


  function handleSearch(e) {
    setQuery(e.target.value);
  }

  function handleSort(e) {
    setSortType(e.target.value);
  }

  function getFilteredData(data) {
    if (!query) return data;
    return data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  function getSortedData(data) {
    if (sortType === "price") {
      return data.sort((x, y) =>
        parseFloat(x.price) - parseFloat(y.price)
      );
    } else if (sortType === "name") {
      return data.sort((x, y) => x.title.localeCompare(y.title));
    }
    return data;
  }

  const filtered = getFilteredData(allProducts);
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

      {finalData.length>0 && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {finalData.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
      }


       {finalData.length==0 && 
       <>
          <NoMatching>Sorry, No match found</NoMatching>
          <NoMatching>You can find something else</NoMatching>
       </>}

      <div className="flex justify-start mt-10 mb-10">
            <button className="bg-red-700 text-white px-4 py-2 mr-2 rounded">1</button>
            <button className="bg-white text-red-700 border border-red-700 px-4 py-2 mr-2 rounded">2</button>
            <button className="bg-white text-red-700 border border-red-700 px-4 py-2 rounded">→</button>
      </div>
    </>
  );
}

export default ProductList;
