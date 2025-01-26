const SearchProduct = () => {
  return (
    // <div className="w-full h-full">
    //   {/* Price Range Filter */}
    //   <div className="mb-4">
    //     <label className="block text-sm font-semibold mb-2">Price Range:</label>
    //     <input
    //       type="range"
    //       min="0"
    //       max="1000"
    //       className="w-full h-2 bg-gray-200 rounded-lg"
    //     />
    //     <div className="flex justify-between text-sm text-gray-600">
    //       <span>$0</span>
    //       <span>$1000</span>
    //     </div>
    //   </div>

    //   {/* Model Filter */}
    //   <div className="mb-4">
    //     <label className="block text-sm font-semibold mb-2">Model:</label>
    //     <select className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
    //       <option>Select Model</option>
    //       <option>Model X</option>
    //       <option>Model Y</option>
    //       <option>Model Z</option>
    //     </select>
    //   </div>

    //   {/* Brand Filter */}
    //   <div className="mb-4">
    //     <label className="block text-sm font-semibold mb-2">Brand:</label>
    //     <div className="flex items-center mb-2">
    //       <input type="checkbox" id="brandA" className="mr-2" />
    //       <label htmlFor="brandA" className="text-sm">
    //         Brand A
    //       </label>
    //     </div>
    //     <div className="flex items-center mb-2">
    //       <input type="checkbox" id="brandB" className="mr-2" />
    //       <label htmlFor="brandB" className="text-sm">
    //         Brand B
    //       </label>
    //     </div>
    //     <div className="flex items-center mb-2">
    //       <input type="checkbox" id="brandC" className="mr-2" />
    //       <label htmlFor="brandC" className="text-sm">
    //         Brand C
    //       </label>
    //     </div>
    //   </div>

    //   {/* Category Filter */}
    //   <div className="mb-4">
    //     <label className="block text-sm font-semibold mb-2">Category:</label>
    //     <div className="flex items-center mb-2">
    //       <input type="checkbox" id="mountain" className="mr-2" />
    //       <label htmlFor="mountain" className="text-sm">
    //         Mountain
    //       </label>
    //     </div>
    //     <div className="flex items-center mb-2">
    //       <input type="checkbox" id="road" className="mr-2" />
    //       <label htmlFor="road" className="text-sm">
    //         Road
    //       </label>
    //     </div>
    //     <div className="flex items-center mb-2">
    //       <input type="checkbox" id="hybrid" className="mr-2" />
    //       <label htmlFor="hybrid" className="text-sm">
    //         Hybrid
    //       </label>
    //     </div>
    //   </div>

    //   {/* Availability Filter */}
    //   <div className="flex items-center">
    //     <input type="checkbox" id="inStock" className="mr-2" />
    //     <label htmlFor="inStock" className="text-sm">
    //       In Stock Only
    //     </label>
    //   </div>
    // </div>
    <div className="p-4 py-7 bg-white shadow-md">
      <div className="flex ">
        <input
          type="text"
          className="h-[43px] rounded-l-lg border-2 pl-2 border-red-200 w-full md:w-[380px] lg:w-[350px]"
          placeholder="Search Blog"
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
          <select className="w-full p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
            <option value="">Select Price Range</option>
            <option value="0-500">$0 - $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000+">$1000+</option>
          </select>
        </div>

        {/* 📌 Model Dropdown */}
        <div className="w-full ">
          <select className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
            <option value="">Select Model</option>
            <option value="X">Model X</option>
            <option value="Y">Model Y</option>
            <option value="Z">Model Z</option>
          </select>
        </div>

        {/* 🔖 Brand Dropdown */}
        <div className="w-full ">
          <select className="w-full p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
            <option value="">Select Brand</option>
            <option value="BrandA">Brand A</option>
            <option value="BrandB">Brand B</option>
            <option value="BrandC">Brand C</option>
          </select>
        </div>

        {/* 🚴‍♂️ Category Dropdown */}
        <div className="w-full ">
          <select className="w-full p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
            <option value="">Select Category</option>
            <option value="Mountain">Mountain</option>
            <option value="Road">Road</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* ✅ Availability Dropdown */}
        <div className="w-full ">
          <select className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
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
