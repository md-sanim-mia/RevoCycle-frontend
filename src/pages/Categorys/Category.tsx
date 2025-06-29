import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import {
  Building2,
  Compass,
  Dribbble,
  Gauge,
  Heart,
  MapPin,
  Smile,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const categories = [
  {
    id: 1,
    name: "Outdoor",
    icon: MapPin,
    count: "1,234 items",
  },
  {
    id: 2,
    name: "Sport",
    icon: Dribbble,
    count: "2,567 items",
  },
  {
    id: 3,
    name: "Urban",
    icon: Building2,
    count: "890 items",
  },
  {
    id: 4,
    name: "Adventure",
    icon: Compass,
    count: "456 items",
  },
  {
    id: 5,
    name: "Electric",
    icon: Zap,
    count: "3,210 items",
  },
  {
    id: 6,
    name: "Kids",
    icon: Smile,
    count: "678 items",
  },
  {
    id: 7,
    name: "Racing",
    icon: Gauge,
    count: "892 items",
  },
  {
    id: 8,
    name: "Fitness",
    icon: Heart,
    count: "1,045 items",
  },
];
const Category = () => {
  return (
    <div className="container mx-auto  pt-14 lg:pt-20 lg:px-0 px-3  ">
      <section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of products across different categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6  mx-auto">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-white border-0 shadow-sm"
              >
                <CardContent className=" text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <category.icon className="h-12 w-12 text-gray-700 group-hover:text-teal-600 transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {category.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-6">{category.count}</p>

                  <Link to={`/categories/${category.name.toLowerCase()}`}>
                    <Button
                      variant="outline"
                      className="bg-transparent border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white transition-all duration-300 px-6 py-2 rounded-md font-medium"
                    >
                      Explore
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
