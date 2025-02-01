import ProductCard from "../Home/ProductCard";
import SearchProduct from "./SearchProduct";
import { useGetAllBicycleQuery } from "@/redux/features/bicycle/bicycle.api";

const BicyclesCard = () => {
  const { data } = useGetAllBicycleQuery(undefined);
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
          {data?.data?.map((item: any, index: number) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BicyclesCard;
