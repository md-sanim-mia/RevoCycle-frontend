import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Bookmark, Eye, Heart, Share2, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
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
const ProductCard = ({ product }: { product: any }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-500 transform hover:-translate-y-1">
      {/* Image Container with Advanced Effects */}

      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 group rounded-t-2xl">
        {/* Image */}
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className={`object-cover w-full h-full transition-all duration-700 ${
            imageLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          } group-hover:scale-110`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2 z-20">
          {product.badge && (
            <Badge
              className={`text-xs font-semibold px-3 py-1.5 backdrop-blur-md border-0 shadow-lg ${
                product.badge === "Sale"
                  ? "bg-red-500/90 text-white"
                  : product.badge === "New"
                  ? "bg-black/90 text-white"
                  : product.badge === "Premium"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
                  : "bg-red-500/90 text-white"
              }`}
            >
              {product.badge}
            </Badge>
          )}
          {product.originalPrice && (
            <Badge className="bg-green-500/90 text-white text-xs font-semibold px-2 py-1 backdrop-blur-md">
              -
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              %
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-20">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white/90 text-gray-600 hover:text-red-500"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
            />
          </button>
          <button className="w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-black border border-white/20">
            <Eye className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-black border border-white/20">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
          <Button className="w-full bg-black/90 backdrop-blur-md text-white hover:bg-red-500 transition-all duration-300 rounded-xl border border-white/20 shadow-lg hover:shadow-xl text-sm h-9">
            <ShoppingCart className="w-4 h-4 mr-1" />
            Quick Add
          </Button>
        </div>

        {/* Stock Warning */}
        {product.stock && product.stock < 10 && (
          <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <Badge className="bg-orange-500/90 text-white text-xs backdrop-blur-md">
              Only {product.stock} left
            </Badge>
          </div>
        )}
      </div>

      {/* Enhanced Content */}
      <div className="p-5">
        {/* Category with Icon */}
        {/* <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
            {product.category}
          </span>
        </div> */}

        {/* Title with Hover Effect */}
        <Link to={`/products/${product.id}`}>
          <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-500 transition-colors duration-300 text-lg leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Enhanced Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">
              ({product.reviews})
            </span>
          </div>
          <div className="text-xs text-gray-500">{product.rating}/5</div>
        </div>

        {/* Premium Price Display */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <div className="text-right">
              <div className="text-xs font-semibold text-green-600">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </div>
            </div>
          )}
        </div>

        {/* Features Preview */}
        {product.features && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.features
              .slice(0, 2)
              .map((feature: string, index: number) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs bg-gray-100 text-gray-600"
                >
                  {feature}
                </Badge>
              ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="px-4 border-gray-200 hover:border-red-500 hover:text-red-500 rounded-xl transition-all duration-300 bg-transparent"
          >
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Premium Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

export default ProductCard;
