import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/fackdata.json") // If stored in 'public' folder
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(product);
  return (
    <div className="max-w-screen-xl mx-auto lg:px-0 px-3">
      <h2 className="text-4xl font-bold text-red-400 mb-4">Hot Sell</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-3 gap-3 lg:gap-4">
        {product.map((item: any) => (
          <ProductCard key={item?.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
