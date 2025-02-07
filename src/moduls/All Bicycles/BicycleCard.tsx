import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
export type TItems = {
  name: string;
  brand: string;
  price: number;
  model: string;
  quantity: number;
  category: string;
  description: string;
  image: string;
  _id: string;
};

const BicycleCard = ({ item }: { item: TItems }) => {
  return (
    <Card className="w-full max-w-[313px] relative group overflow-hidden border rounded-lg shadow-lg">
      <div className="relative group">
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Hot Sell 🔥
        </span>
        <img
          className="h-48 w-full object-cover rounded-t-lg group-hover:opacity-70"
          src={item.image}
          alt=""
        />

        {/* Hover Options - Only on Image */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="bg-white text-black hover:bg-red-400 hover:text-white p-3 rounded-full shadow-md">
            <FaShoppingCart size={20} />
          </Button>
          <Button className="bg-white text-black p-3  hover:bg-red-400 hover:text-white rounded-full shadow-md">
            <Link to={`/product-deatils/${item?._id}`}>
              <FaEye size={20} />
            </Link>
          </Button>
          <Button className="bg-white text-black hover:bg-red-400 hover:text-white p-3 rounded-full shadow-md">
            <FaHeart size={20} />
          </Button>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {" "}
        <div className="flex justify-between">
          <p className="text-red-500 font-bold">${item.price}</p>{" "}
          <p className=" font-bold">stock : 0/{item.quantity}</p>{" "}
        </div>
      </CardContent>
      <CardFooter className=""></CardFooter>
    </Card>
  );
};

export default BicycleCard;
