import React, { useEffect, useState,useCallback,useMemo } from "react";
import Product from "./Product";
import NoMatching from "./NoMatching";
import { getProductList } from "../api";
import Loading from "./Loading";
import { Navigate } from "react-router-dom";

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

  //useCallback	- Prevents function recreation on every render (good for passing to children)
  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const handleSort = useCallback((e) => {
    setSortType(e.target.value);
  }, []);


  //useMemo - Prevents re-filtering and re-sorting unless relevant state changes
  const filtered = useMemo(() => {
    if (!query) return allProducts;
    return allProducts.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [allProducts, query]);

  const finalData = useMemo(() => {
    if (sortType === "price") {
      return [...filtered].sort((x, y) => x.price - y.price);
    } else if (sortType === "name") {
      return [...filtered].sort((x, y) => x.title.localeCompare(y.title));
    }
    return filtered;
  }, [filtered, sortType]);
  
  if (loading) return <Loading />;


  return (
    <>
   
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <select className="border border-gray-300 p-2 rounded text-sm" onChange={handleSort}>
          <option value="default">Default Sorting</option>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>

        <input
          value={query}
          onChange={handleSearch}
          placeholder="Search"
          className="border border-gray-300 rounded-md p-2 text-sm"
        />
      </div>

      {finalData.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {finalData.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      )}

      {finalData.length == 0 && (
        <>
          <NoMatching>Sorry, no match found.</NoMatching>
          <NoMatching>Try a different keyword.</NoMatching>
        </>
      )}

      <div className="flex justify-start mt-10 mb-10">
        <button className="bg-orange-700 text-white px-4 py-2 mr-2 rounded">1</button>
        <button className="bg-white text-orange-700 border border-orange-700 px-4 py-2 mr-2 rounded">2</button>
        <button className="bg-white text-orange-700 border border-orange-700 px-4 py-2 rounded">→</button>
      </div>
    </>
  );
}

export default ProductList;
