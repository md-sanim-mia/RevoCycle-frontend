import Loding from "@/components/Loding/Loding";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useGetSingleBicycleQuery } from "@/redux/features/bicycle/bicycle.api";
import { setTotalProduct } from "@/redux/features/bicycle/bicycle.slice";
import { setProducts } from "@/redux/features/payment/payment.slice";
import { useAppDispatch } from "@/redux/hook";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  ChevronRight,
  Heart,
  MessageCircle,
  Minus,
  Plus,
  Share2,
  Star,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../Home/ProductCard";
import { Progress } from "@/components/ui/progress";
const product = {
  id: 1,
  name: "Mountain Explorer Pro 2024",
  price: 1299.99,
  originalPrice: 1599.99,
  rating: 4.6,
  reviews: 248,
  inStock: true,
  stock: 12,
  images: [
    "https://images.unsplash.com/photo-1544191696-15693072e0b5?w=800&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=800&h=800&fit=crop&crop=center",
  ],
  description:
    "Experience the ultimate mountain biking adventure with our premium Mountain Explorer Pro. Engineered for serious riders who demand performance, durability, and style on every trail.",
  features: [
    "Carbon Fiber Frame - Ultra-lightweight yet incredibly strong",
    "Shimano XT 12-Speed Drivetrain - Smooth and precise shifting",
    "Fox Suspension Fork - Superior shock absorption",
    "Tubeless Ready Wheels - Enhanced traction and puncture resistance",
    "Hydraulic Disc Brakes - Reliable stopping power in all conditions",
    "Ergonomic Saddle - Comfort for long rides",
  ],
  specifications: {
    "Frame Material": "Carbon Fiber",
    "Wheel Size": "29 inches",
    Drivetrain: "Shimano XT 12-Speed",
    Suspension: "Fox 32 Float Performance",
    Brakes: "Shimano MT520 Hydraulic Disc",
    Weight: "12.5 kg",
    "Max Rider Weight": "120 kg",
    Warranty: "2 Years",
  },
  category: "Mountain Bikes",
  brand: "BikeHub Pro",
};

// Mock reviews data with Unsplash avatars
const reviews = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    rating: 5,
    date: "2024-01-15",
    title: "Absolutely Amazing Bike!",
    comment:
      "This bike exceeded all my expectations. The carbon frame is incredibly light yet sturdy, and the Shimano XT drivetrain shifts like butter. I've taken it on some challenging trails and it performs flawlessly every time.",
    helpful: 24,
    images: [
      "https://images.unsplash.com/photo-1544191696-15693072e0b5?w=200&h=200&fit=crop&crop=center",
    ],
    verified_purchase: true,
  },
  {
    id: 2,
    user: {
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    rating: 4,
    date: "2024-01-10",
    title: "Great bike, minor assembly issues",
    comment:
      "The bike quality is excellent and rides beautifully. Assembly took a bit longer than expected, but customer service was helpful. The Fox suspension is a game-changer on rough terrain.",
    helpful: 18,
    verified_purchase: true,
  },
  {
    id: 3,
    user: {
      name: "Mike Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      verified: false,
    },
    rating: 5,
    date: "2024-01-08",
    title: "Perfect for trail riding",
    comment:
      "Been using this for 3 months now. The hydraulic brakes are incredibly responsive, and the tubeless wheels have saved me from multiple punctures. Highly recommend!",
    helpful: 31,
    verified_purchase: true,
  },
  {
    id: 4,
    user: {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    rating: 5,
    date: "2024-01-05",
    title: "Best investment I've made!",
    comment:
      "As a professional mountain biker, I'm very picky about my equipment. This bike delivers on every front - performance, comfort, and durability. The carbon frame makes a huge difference on long rides.",
    helpful: 42,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=200&h=200&fit=crop&crop=center",
    ],
    verified_purchase: true,
  },
  {
    id: 5,
    user: {
      name: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    rating: 4,
    date: "2024-01-02",
    title: "Solid performance bike",
    comment:
      "Great bike overall. The build quality is excellent and it handles well on various terrains. Only minor complaint is that the seat could be more comfortable for longer rides, but that's easily replaceable.",
    helpful: 15,
    verified_purchase: true,
  },
];

// Mock related products with Unsplash images
const relatedProducts = [
  {
    id: 2,
    name: "Urban Commuter E-Bike",
    price: 2199.99,
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=600&fit=crop&crop=center",
    badge: "New",
    category: "Electric Bikes",
  },
  {
    id: 3,
    name: "Road Racing Elite",
    price: 899.99,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&crop=center",
    category: "Road Bikes",
  },
  {
    id: 4,
    name: "Hybrid City Cruiser",
    price: 649.99,
    rating: 4.5,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=600&h=600&fit=crop&crop=center",
    category: "Hybrid Bikes",
  },
  {
    id: 5,
    name: "Electric Mountain Beast",
    price: 3299.99,
    rating: 4.9,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1544191696-15693072e0b5?w=600&h=600&fit=crop&crop=center",
    badge: "Premium",
    category: "E-Mountain",
  },
];

const ProductDeatils = () => {
  const { productId } = useParams();
  console.log(productId);
  // const { data, isLoading } = useGetSingleBicycleQuery(productId);
  // const product = data?.data;
  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  const [totalCount, setCount] = useState(1);
  // dispatch(setTotalProduct(product?.quantity));
  // const handileClickincrease = () => {
  //   if (totalCount < product?.quantity) {
  //     setCount(totalCount + 1);
  //   }
  // };
  // const handileClickdecrease = () => {
  //   if (totalCount > 1) {
  //     setCount(totalCount - 1);
  //   }
  // };

  // const handileClickPaymentsDeatils = () => {
  //   dispatch(
  //     setProducts({
  //       product: product,
  //       price: product.price * totalCount,
  //       quantity: totalCount,
  //     })
  //   );
  //   navigation("/payments");
  // };

  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const ratingDistribution = [
    { stars: 5, count: 156, percentage: 63 },
    { stars: 4, count: 62, percentage: 25 },
    { stars: 3, count: 20, percentage: 8 },
    { stars: 2, count: 7, percentage: 3 },
    { stars: 1, count: 3, percentage: 1 },
  ];

  const handleSubmitReview = () => {
    if (userRating > 0 && userReview.trim()) {
      // Handle review submission
      console.log("Review submitted:", {
        rating: userRating,
        review: userReview,
      });
      setUserRating(0);
      setUserReview("");
    }
  };
  return (
    <>
      {/* <div className="max-w-screen-xl h-full lg:px-10 mx-auto p-6 grid grid-cols-1  lg:grid-cols-2 gap-6">

        {isLoading && <Loding />}
        <div>
          <Carousel showArrows={true} infiniteLoop={true} showThumbs={true}>
            {data?.data?.productImage?.map((img: string, index: number) => (
              <div key={index}>
                <img src={img} alt="Bicycle" className="w-full object-cover " />
              </div>
            ))}
          </Carousel>
        </div>


        <div className="lg:px-6 h-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {product?.name}
          </h1>

          <p className="text-gray-600 mt-4">{product?.description}</p>
          <p className="text-3xl font-bold text-red-500 mt-4">
            ${product?.price}
          </p>
          <div className="mt-4 grid gap-4 items-end">
            <div className="flex justify-between items-center gap-8">
              <p className="font-semibold text-lg">Brand:</p>
              <p className="text-lg">{product?.brand}</p>
            </div>
            <div className="flex justify-between items-center gap-8">
              <p className="font-semibold text-lg">Model:</p>
              <p className="text-lg">{product?.model}</p>
            </div>
            <div className="flex justify-between items-center gap-8">
              <p className="font-semibold text-lg">Stock:</p>
              <p className="text-lg">{product?.quantity}</p>
            </div>

            <div className=" flex items-center justify-between">
              <label
                htmlFor="quantity"
                className="font-semibold text-lg text-gray-700"
              >
                Totall Price : ${product?.price * totalCount}
              </label>
              <div className="flex items-center">
                <button
                  onClick={handileClickdecrease}
                  className="px-4 py-2 bg-gray-300 text-lg text-gray-700 rounded-l-md hover:bg-gray-400"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={totalCount}
                  className="w-16 text-center p-2 border-t border-b border-gray-300 text-lg"
                  readOnly
                />
                <button
                  onClick={handileClickincrease}
                  className="px-4 py-2 bg-gray-300 text-lg text-gray-700 rounded-r-md hover:bg-gray-400"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className=" lg:flex md:flex gap-4 mt-5 mb-4">
            <button className="w-full py-2 px-4 lg:mb-0  md:mb-0 mb-4 bg-black text-white font-semibold rounded-md hover:bg-red-500">
              Add to Cart
            </button>
            <button
              onClick={handileClickPaymentsDeatils}
              className="w-full py-2 px-4 bg-red-400 text-white font-semibold rounded-md hover:bg-black"
            >
              Buy Now
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>Free shipping on orders over $500.</p>
            <p className="mt-2">30-day returns for full refunds.</p>
          </div>
        </div>
      </div> */}
      <div className="min-h-screen bg-white">
        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Bikes</span>
            <ChevronRight className="w-4 h-4" />
            <span>{product.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl border bg-gray-50">
                <img
                  src={product.images[currentImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-500">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image: any, index: any) => (
                  <button
                    key={index}
                    className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                      currentImage === index
                        ? "border-red-500"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setCurrentImage(index)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{product.brand}</Badge>
                  <Badge variant="outline">{product.category}</Badge>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge className="bg-green-100 text-green-800">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF
                  </Badge>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <Separator />

              {/* Add to Cart Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 min-w-[60px] text-center font-medium">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setQuantity(Math.min(product.stock, quantity + 1))
                      }
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-sm">
                    {product.inStock ? (
                      <span className="text-green-600 font-medium">
                        ✓ {product.stock} in stock
                      </span>
                    ) : (
                      <span className="text-red-600 font-medium">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                  >
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={
                      isWishlisted ? "text-red-500 border-red-500" : ""
                    }
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        isWishlisted ? "fill-current" : ""
                      }`}
                    />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent"
                >
                  Buy Now - Fast Checkout
                </Button>
              </div>

              <Separator />

              {/* Key Features */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature: any, index: number) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-16">
            <Tabs defaultValue="reviews" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="reviews">
                  Reviews ({product.reviews})
                </TabsTrigger>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              </TabsList>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="space-y-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Rating Overview */}
                  <div className="lg:col-span-1">
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <div className="text-4xl font-bold text-gray-900 mb-2">
                            {product.rating}
                          </div>
                          <div className="flex items-center justify-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < Math.floor(product.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-gray-600">
                            Based on {product.reviews} reviews
                          </div>
                        </div>

                        <div className="space-y-3">
                          {ratingDistribution.map((item) => (
                            <div
                              key={item.stars}
                              className="flex items-center gap-3"
                            >
                              <div className="flex items-center gap-1 w-12">
                                <span className="text-sm">{item.stars}</span>
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              </div>
                              <Progress
                                value={item.percentage}
                                className="flex-1 h-2"
                              />
                              <span className="text-sm text-gray-600 w-8">
                                {item.count}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Write Review */}
                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">
                          Write a Review
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Your Rating
                            </label>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <button
                                  key={i}
                                  onClick={() => setUserRating(i + 1)}
                                  className="p-1"
                                >
                                  <Star
                                    className={`h-6 w-6 transition-colors ${
                                      i < userRating
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-300 hover:text-yellow-400"
                                    }`}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Your Review
                            </label>
                            <Textarea
                              placeholder="Share your experience with this product..."
                              value={userReview}
                              onChange={(e) => setUserReview(e.target.value)}
                              rows={4}
                            />
                          </div>

                          <Button
                            onClick={handleSubmitReview}
                            disabled={userRating === 0 || !userReview.trim()}
                            className="w-full bg-red-500 hover:bg-red-600"
                          >
                            Submit Review
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Reviews List */}
                  <div className="lg:col-span-2 space-y-6">
                    {reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage
                                src={review.user.avatar || "/placeholder.svg"}
                              />
                              <AvatarFallback>
                                {review.user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>

                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-semibold text-gray-900">
                                  {review.user.name}
                                </span>
                                {review.user.verified && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    Verified
                                  </Badge>
                                )}
                                {review.verified_purchase && (
                                  <Badge variant="outline" className="text-xs">
                                    Verified Purchase
                                  </Badge>
                                )}
                              </div>

                              <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating
                                          ? "text-yellow-400 fill-current"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">
                                  {review.date}
                                </span>
                              </div>

                              <h4 className="font-medium text-gray-900 mb-2">
                                {review.title}
                              </h4>
                              <p className="text-gray-600 mb-4 leading-relaxed">
                                {review.comment}
                              </p>

                              {review.images && (
                                <div className="flex gap-2 mb-4">
                                  {review.images.map((image, index) => (
                                    <div
                                      key={index}
                                      className="w-16 h-16 rounded-lg overflow-hidden border"
                                    >
                                      <img
                                        src={image || "/placeholder.svg"}
                                        alt="Review image"
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}

                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <button className="flex items-center gap-1 hover:text-gray-700">
                                  <ThumbsUp className="w-4 h-4" />
                                  Helpful ({review.helpful})
                                </button>
                                <button className="flex items-center gap-1 hover:text-gray-700">
                                  <MessageCircle className="w-4 h-4" />
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    <div className="text-center">
                      <Button variant="outline">Load More Reviews</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="description">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Product Description
                    </h3>
                    <div className="prose max-w-none text-gray-600 space-y-4">
                      <p>{product.description}</p>
                      <p>
                        The Mountain Explorer Pro represents the pinnacle of
                        mountain bike engineering. Every component has been
                        carefully selected and tested to ensure maximum
                        performance and reliability on the most challenging
                        trails.
                      </p>
                      <p>
                        Whether you're tackling steep climbs, navigating
                        technical descents, or cruising through forest paths,
                        this bike delivers an unmatched riding experience that
                        will elevate your mountain biking adventures.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specifications">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between py-3 border-b border-gray-100"
                          >
                            <span className="font-medium text-gray-700">
                              {key}:
                            </span>
                            <span className="text-gray-600">
                              {value as React.ReactNode}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="shipping">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Shipping Information
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Free shipping on orders over $500</li>
                          <li>• Standard delivery: 5-7 business days</li>
                          <li>• Express delivery: 2-3 business days</li>
                          <li>• Professional assembly included</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Returns & Exchanges
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• 30-day return policy</li>
                          <li>• Free returns for defective items</li>
                          <li>• Return shipping costs may apply</li>
                          <li>• Items must be in original condition</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Related Products
              </h2>
              <Button variant="outline">View All</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProductDeatils;
