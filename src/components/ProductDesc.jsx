import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductData } from "../api";
import Loading from "./Loading";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import NotFound from "./NotFound";
import CartPage from "../Pages/CartPage";

function ProductDesc({onAddToCart}) {
  const id = +(useParams().id);
  const [product, setProduct]= useState(null);
  const[loading,setLoading]= useState(true);
  const[count, setCount]=useState(1);
  
  useEffect(function(){
    const p=getProductData(id);
    p.then(function(product){
      setProduct(product);
      setLoading(false);
    }).catch(function(){
      setLoading(false);
    })
  },[id])

  function handleButtonClick(){
    onAddToCart(id,count)
  }

  if(loading) return <Loading/>;

  if(!product)  return <NotFound/>;

  function handleCountChange(event){
    setCount(+event.target.value);
  }
  

  //undefined--> false
  //any object(even empty), any array(even empty)--> true
  // if(!product)  return <div className="text-indigo-800 text-3xl">Loading...</div>
  
  return (
    <>
      <div className="bg-white rounded-lg max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row h-full gap-6">
          <div className="w-full md:w-1/2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-cover w-full h-full max-h-96 rounded-md"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between max-h-96">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="text-2xl font-semibold text-gray-800">{product.title}</h1>
              <p className="text-lg font-bold text-gray-900">${product.price}</p>
              <p className="text-sm text-gray-700 overflow-auto">
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                consectetur adipisci velit...
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  onChange={handleCountChange}
                  value={count}
                  min={1}
                  className="w-12 border p-1 text-center rounded"
                />
                <button onClick={handleButtonClick} className="bg-red-500 text-white px-4 py-2 rounded text-sm">
                  ADD TO CART
                </button>
              </div>

              <Link to="/" className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-all duration-200">
                <span className="text-lg">←</span> Go Back
              </Link>

            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between px-6 mt-8">
        {id > 1 ? (
          <Link
            className="flex items-center gap-1 text-white bg-blue-950 hover:bg-indigo-700 px-4 py-2 rounded shadow"
            to={`/products/${id - 1}`}
          >
            <HiArrowSmLeft className="text-xl" />
            Previous
          </Link>
        ) : (
          <div></div>
        )}

        <Link
          className="ml-auto flex items-center gap-1 text-white bg-indigo-950 hover:bg-indigo-700 px-4 py-2 rounded shadow"
          to={`/products/${id + 1}`}
        >
          Next
          <HiArrowSmRight className="text-xl" />
        </Link>
      </div>

    </>
  );
}

export default ProductDesc;


