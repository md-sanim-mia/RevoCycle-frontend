import { useState } from "react";
import ProductCard from "../Home/ProductCard";
import {
  // useGetAllBicycleQuery,
  useGetAllCategoryBicycleQuery,
} from "@/redux/features/bicycle/bicycle.api";
import Loding from "@/components/Loding/Loding";

const BicyclesCard = () => {
  const [search, setSearch] = useState("");
  const [params, setParams] = useState({
    name: "",
    value: "",
  });
  console.log(params);
  // const { data } = useGetAllBicycleQuery(params);
  const bikes = [
    {
      id: 1,
      name: "Mountain Explorer Pro",
      price: 1299.99,
      originalPrice: 1599.99,
      rating: 4.8,
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1645397925460-a514fdcb1ca3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Sale",
      category: "Mountain Bikes",
      stock: 5,
      features: ["Carbon Frame", "Shimano XT"],
    },
    {
      id: 2,
      name: "Urban Commuter E-Bike",
      price: 2199.99,
      rating: 4.9,
      reviews: 89,
      image:
        "https://media.istockphoto.com/id/1222179237/photo/old-holland-vintage-classic-bicycle-in-public-cityscape-view.webp?a=1&s=612x612&w=0&k=20&c=ABXj_8nYT-TdCDp_owSMcqQVO9YtI4o7grJcFcrYX7M=",
      badge: "New",
      category: "Electric Bikes",
      features: ["50km Range", "Fast Charge"],
    },
    {
      id: 3,
      name: "Road Racing Elite",
      price: 899.99,
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1647116375420-d75f055eda0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      category: "Road Bikes",
      features: ["Lightweight", "Aerodynamic"],
    },
    {
      id: 4,
      name: "Kids Adventure Bike",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.6,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1621394971416-11408651a639?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
      badge: "Sale",
      category: "Kids Bikes",
      features: ["Safety First", "Adjustable"],
    },
    {
      id: 5,
      name: "Mountain Explorer Pro",
      price: 1299.99,
      originalPrice: 1599.99,
      rating: 4.8,
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1645397925460-a514fdcb1ca3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Sale",
      category: "Mountain Bikes",
      stock: 5,
      features: ["Carbon Frame", "Shimano XT"],
    },
    {
      id: 6,
      name: "Urban Commuter E-Bike",
      price: 2199.99,
      rating: 4.9,
      reviews: 89,
      image:
        "https://media.istockphoto.com/id/1222179237/photo/old-holland-vintage-classic-bicycle-in-public-cityscape-view.webp?a=1&s=612x612&w=0&k=20&c=ABXj_8nYT-TdCDp_owSMcqQVO9YtI4o7grJcFcrYX7M=",
      badge: "New",
      category: "Electric Bikes",
      features: ["50km Range", "Fast Charge"],
    },
    {
      id: 7,
      name: "Road Racing Elite",
      price: 899.99,
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1647116375420-d75f055eda0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      category: "Road Bikes",
      features: ["Lightweight", "Aerodynamic"],
    },
    {
      id: 8,
      name: "Kids Adventure Bike",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.6,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1621394971416-11408651a639?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
      badge: "Sale",
      category: "Kids Bikes",
      features: ["Safety First", "Adjustable"],
    },
  ];
  const { data: categoryData, isFetching } =
    useGetAllCategoryBicycleQuery(undefined);
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
      {isFetching && <Loding />}
      <div>
        <div className="p-4 py-7 bg-white shadow-md">
          <div className="flex ">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="h-[43px] rounded-l-lg border-2 pl-2 border-red-200 w-full md:w-[380px] lg:w-[350px]"
              placeholder="Search Products"
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
          {bikes.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BicyclesCard;
