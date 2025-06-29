import { useState } from "react";

const SearchProduct = () => {
  const [params, setParams] = useState("");
  console.log(params);
  return (
    <div className="p-4 py-7 bg-white shadow-md">
      <div className="flex ">
        <input
          type="text"
          className="h-[43px] rounded-l-lg border-2 pl-2 border-red-200 w-full md:w-[380px] lg:w-[350px]"
          placeholder="Search Products"
          name=""
          id=""
        />
        <button className="font-medium w-[70px] bg-red-400 rounded-r-lg text-white">
          Search
        </button>
      </div>
      <div className="grid w-full mt-4 lg:grid-cols-5 md:grid-cols-2 items-center gap-4 ">
        {/* 🔎 Search Bar */}

        {/* 🎚️ Price Range */}
        <div className="w-full ">
          <select
            onChange={(e) => setParams(e.target.value)}
            className="w-full p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option value="">Select Price Range</option>
            <option value="0-500">$0 - $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000+">$1000+</option>
          </select>
        </div>

        {/* 📌 Model Dropdown */}
        <div className="w-full ">
          <select
            onChange={(e) => setParams(e.target.value)}
            className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option value="">Select Model</option>
            <option value="X">Model X</option>
            <option value="Y">Model Y</option>
            <option value="Z">Model Z</option>
          </select>
        </div>

        {/* 🔖 Brand Dropdown */}
        <div className="w-full ">
          <select
            onChange={(e) => setParams(e.target.value)}
            className="w-full p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option value="">Select Brand</option>
            <option value="BrandA">Brand A</option>
            <option value="BrandB">Brand B</option>
            <option value="BrandC">Brand C</option>
          </select>
        </div>

        {/* 🚴‍♂️ Category Dropdown */}
        <div className="w-full ">
          <select
            onChange={(e) => setParams(e.target.value)}
            className="w-full p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option value="">Select Category</option>
            <option value="Mountain">Mountain</option>
            <option value="Road">Road</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* ✅ Availability Dropdown */}
        <div className="w-full ">
          <select
            onChange={(e) => setParams(e.target.value)}
            className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option value="">Availability</option>
            <option value="InStock">In Stock</option>
            <option value="OutOfStock">Out of Stock</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
