import { useEffect, useState } from "react";
import ProductCard from "../Home/ProductCard";
import SearchProduct from "./SearchProduct";

const BicyclesCard = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/fackdata.json") // If stored in 'public' folder
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(product);
  return (
    <div className="max-w-screen-xl mx-auto py-20  h-full gap-3">
      <div>
        <SearchProduct></SearchProduct>
      </div>
      <div
        className="w-full mt-4
      "
      >
        <h2 className="text-4xl font-bold text-red-400 mb-4">Best Sell</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-3 gap-3 lg:gap-4">
          {product.map((item: any) => (
            <ProductCard key={item?.name} item={item} />
          ))}
        </div>
      </div>
      {/* <div className="w-[500px] mt-14 min-h-screen p-4 bg-white shadow-lg rounded-md border h-full">
        <SearchProduct />
      </div> */}
    </div>
  );
};

export default BicyclesCard;
