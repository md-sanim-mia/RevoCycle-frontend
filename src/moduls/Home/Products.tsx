import Loding from "@/components/Loding/Loding";
import ProductCard from "./ProductCard";
import { useGetAllCategoryBicycleQuery } from "@/redux/features/bicycle/bicycle.api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, isLoading } = useGetAllCategoryBicycleQuery(undefined);
  console.log(data);
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
  return (
    <div className="max-w-screen-xl mx-auto lg:px-0 px-3">
      {isLoading && <Loding />}
      <h2 className="text-4xl font-bold text-red-400 mb-4">Hot Sell</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-3 gap-3 lg:gap-4">
        {bikes.slice(0, 8).map((item: any) => (
          <ProductCard key={item?.name} product={item} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/blog">
          <Button
            variant="outline"
            size="lg"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 bg-transparent"
          >
            View All Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
