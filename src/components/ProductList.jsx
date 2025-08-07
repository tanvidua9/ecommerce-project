import React, { useEffect, useState,useCallback,useMemo } from "react";
import Product from "./Product";
import NoMatching from "./NoMatching";
import { getProductList } from "../api";
import Loading from "./Loading";
import {useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

function ProductList() {
  const[productData, setProductData]=useState();
  const [loading,setLoading]= useState(true);
  let [searchParams, setSearchParams] = useSearchParams();
  //[...searchParams] --> [["page",1],["query", "samsung"],["sort","title"]]

  const params= Object.fromEntries([...searchParams]);  //{"page":1, query:"samsung", "sort":"title"}

  let {query,sortType,page}=  params;

  query = query || "";
  sortType = sortType || "default";
  page= +page||1;

  useEffect(()=>{
    let sortBy;
    let backendSortType;

    if (sortType === "name") {
      sortBy = "title";
      backendSortType = "asc";
    } else if (sortType === "lowToHigh") {
      sortBy = "price";
      backendSortType = "asc";
    } else if (sortType === "highToLow") {
      sortBy = "price";
      backendSortType = "desc";
    }

    setLoading(true);

    const xyz = getProductList({sortBy,sortType : backendSortType,query, page});
    const abc = xyz.then(function(body){
      setProductData(body);
      setLoading(false);
    })
  },[sortType,query,page])

  //useCallback	- Prevents function recreation on every render (good for passing to children)
  const handleSearch = useCallback((e) => {
    setSearchParams(
      {...params,query:e.target.value,page:1},
      {replace:false});
  }, [params]);

  const handleSort = useCallback((e) => {
    setSearchParams(
      {...params, sortType:e.target.value},
      {replace:false}
    )
  }, [params]);


  //useMemo - Prevents re-filtering and re-sorting unless relevant state changes
  
  if (loading) return <Loading />;


  return (
    <> 
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <select className="border border-gray-300 p-2 rounded text-sm" onChange={handleSort} value={sortType}>
          <option value="default">Default Sorting</option>
          <option value="name">Sort by Name</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>

        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search"
          className="border border-gray-300 rounded-md p-2 text-sm"
        />
      </div>

      {productData.data.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {productData.data.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      )}

      {productData.data.length == 0 && (
        <>
          <NoMatching>Sorry, no match found.</NoMatching>
          <NoMatching>Try a different keyword.</NoMatching>
        </>
      )}

      <Pagination productData={productData} page={page} params={params} />
    </>
  );
}

export default ProductList;


//Array(5)=[undefined,undefined,undefined,undefined,undefined]
//Array(5).keys() --> gives an iterator pointing towards each key of element of array
//[...Array(5).keys()]--> gives an actual array of keys = [0,1,2,3,4]
//for above task, we use range func of lodash




//Search?, images?