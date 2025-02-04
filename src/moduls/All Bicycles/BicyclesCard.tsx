import { useState } from "react";
import ProductCard from "../Home/ProductCard";
import {
  useGetAllBicycleQuery,
  useGetAllCategoryBicycleQuery,
} from "@/redux/features/bicycle/bicycle.api";

const BicyclesCard = () => {
  const [search, setSearch] = useState("");
  const [params, setParams] = useState({
    name: "",
    value: "",
  });
  const { data } = useGetAllBicycleQuery(params);
  const { data: categoryData } = useGetAllCategoryBicycleQuery(undefined);
  const Productscategory = categoryData?.data?.filter(
    (item: any, index: any, self: any) =>
      index === self.findIndex((t: any) => t.category === item.category)
  );
  const ProductsBrand = categoryData?.data?.filter(
    (item: any, index: any, self: any) =>
      index === self.findIndex((t: any) => t.brand === item.brand)
  );
  const ProductsModel = categoryData?.data?.filter(
    (item: any, index: any, self: any) =>
      index === self.findIndex((t: any) => t.model === item.model)
  );
  const handileClicSerach = () => {
    setParams({ name: "search", value: search });
  };

  return (
    <div className="max-w-screen-xl mx-auto py-20  h-full gap-3">
      <div>
        <div className="p-4 py-7 bg-white shadow-md">
          <div className="flex ">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="h-[43px] rounded-l-lg border-2 pl-2 border-red-200 w-full md:w-[380px] lg:w-[350px]"
              placeholder="Search Blog"
              name=""
              id=""
            />
            <button
              onClick={handileClicSerach}
              className="font-medium w-[70px] bg-red-400 rounded-r-lg text-white"
            >
              Search
            </button>
          </div>
          <div className="grid w-full mt-4 lg:grid-cols-5 md:grid-cols-2 items-center gap-4 ">
            {/* 🔎 Search Bar */}

            {/* 🎚️ Price Range */}
            <div className="w-full ">
              <select
                onChange={(e) =>
                  setParams({ name: "price", value: e.target.value })
                }
                // onChange={(e) => setParams({na})}
                className="w-full p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option disabled value="">
                  Select Price Range
                </option>
                <option value="0-150">$0 - $150</option>
                <option value="150-300">$150 - $300</option>
                <option value="300-500">$300 - $500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="1000-2000">$1000 - $2000</option>
                <option value="2000-3000">$2000 - $3000</option>
              </select>
            </div>

            {/* 📌 Model Dropdown */}
            <div className="w-full ">
              <select
                onChange={(e) =>
                  setParams({ name: "filter", value: e.target.value })
                }
                className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option disabled value="">
                  Select Model
                </option>
                {ProductsModel?.map((item: any) => (
                  <option value={item?.model}>{item?.model}</option>
                ))}
              </select>
            </div>

            {/* 🔖 Brand Dropdown */}
            <div className="w-full ">
              <select
                onChange={(e) =>
                  setParams({ name: "filter", value: e.target.value })
                }
                className="w-full p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option disabled value="">
                  Select Brand
                </option>
                {ProductsBrand?.map((item: any) => (
                  <option value={item?.brand}>{item?.brand}</option>
                ))}
              </select>
            </div>

            {/* 🚴‍♂️ Category Dropdown */}
            <div className="w-full ">
              <select
                onChange={(e) =>
                  setParams({ name: "filter", value: e.target.value })
                }
                className="w-full p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option disabled value="">
                  Select Category
                </option>
                {Productscategory?.map((item: any) => (
                  <option value={item?.category}>{item?.category}</option>
                ))}
              </select>
            </div>

            {/* ✅ Availability Dropdown */}
            <div className="w-full ">
              <select
                onChange={(e) =>
                  setParams({ name: "stock", value: e.target.value })
                }
                // onChange={(e) => setParams(e.target.value)}
                className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option disabled value="">
                  Availability
                </option>
                <option value="inStock">In Stock</option>
                <option value="outStock">Out of Stock</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full mt-4
      "
      >
        <h2 className="text-4xl font-bold text-red-400 mb-4">Best Sell</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-3 gap-3 lg:gap-4">
          {data?.data?.map((item: any, index: number) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BicyclesCard;
