import Loding from "@/components/Loding/Loding";
import ProductCard from "./ProductCard";
import { useGetAllCategoryBicycleQuery } from "@/redux/features/bicycle/bicycle.api";

const Products = () => {
  const { data, isLoading } = useGetAllCategoryBicycleQuery(undefined);
  return (
    <div className="max-w-screen-xl mx-auto lg:px-0 px-3">
      {isLoading && <Loding />}
      <h2 className="text-4xl font-bold text-red-400 mb-4">Hot Sell</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-3 gap-3 lg:gap-4">
        {data?.data.slice(0, 8).map((item: any) => (
          <ProductCard key={item?.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
