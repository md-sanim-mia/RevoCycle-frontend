"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ShoppingCart,
  Heart,
  Package,
  DollarSign,
  TrendingUp,
  Star,
  Clock,
  MapPin,
  CreditCard,
  Truck,
  User,
  Settings,
  Bell,
  Gift,
  Award,
  Calendar,
  Eye,
  ArrowUpRight,
  CheckCircle,
  XCircle,
  RefreshCw,
  AlertCircle,
  Phone,
  Mail,
  Edit,
} from "lucide-react";

const userStats = [
  {
    title: "Total Orders",
    value: "24",
    change: "+3 this month",
    trend: "up",
    icon: ShoppingCart,
    description: "lifetime orders",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    title: "Total Spent",
    value: "৳1,25,000",
    change: "+৳15,000 this month",
    trend: "up",
    icon: DollarSign,
    description: "lifetime spending",
    color: "bg-green-500",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    title: "Wishlist Items",
    value: "12",
    change: "+2 this week",
    trend: "up",
    icon: Heart,
    description: "saved items",
    color: "bg-red-500",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    title: "Reward Points",
    value: "2,450",
    change: "+150 this month",
    trend: "up",
    icon: Award,
    description: "available points",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
];

const recentOrders = [
  {
    id: "ORD-001",
    product: "Mountain Bike Pro",
    amount: "৳25,000",
    status: "delivered",
    date: "2024-01-15",
    image:
      "https://images.unsplash.com/photo-1645397925460-a514fdcb1ca3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trackingNumber: "TRK123456789",
    deliveryDate: "2024-01-18",
  },
  {
    id: "ORD-002",
    product: "Electric Bike X1",
    amount: "৳15,000",
    status: "shipped",
    date: "2024-01-20",
    image:
      "https://media.istockphoto.com/id/1222179237/photo/old-holland-vintage-classic-bicycle-in-public-cityscape-view.webp?a=1&s=612x612&w=0&k=20&c=ABXj_8nYT-TdCDp_owSMcqQVO9YtI4o7grJcFcrYX7M=",
    trackingNumber: "TRK987654321",
    deliveryDate: "2024-01-25",
  },
  {
    id: "ORD-003",
    product: "Road Bike Elite",
    amount: "৳35,000",
    status: "processing",
    date: "2024-01-22",
    image:
      "https://images.unsplash.com/photo-1621394971416-11408651a639?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
    trackingNumber: "TRK456789123",
    deliveryDate: "2024-01-28",
  },
  {
    id: "ORD-004",
    product: "Hybrid Bike Plus",
    amount: "৳20,000",
    status: "pending",
    date: "2024-01-23",
    image:
      "https://images.unsplash.com/photo-1645397925460-a514fdcb1ca3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trackingNumber: "TRK789123456",
    deliveryDate: "2024-01-30",
  },
];

const wishlistItems = [
  {
    id: 1,
    name: "Premium Mountain Bike",
    price: "৳45,000",
    originalPrice: "৳50,000",
    image:
      "https://images.unsplash.com/photo-1645397925460-a514fdcb1ca3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    discount: "10%",
    inStock: true,
  },
  {
    id: 2,
    name: "Kids Special Bike",
    price: "৳12,000",
    originalPrice: "৳15,000",
    image:
      "https://media.istockphoto.com/id/1222179237/photo/old-holland-vintage-classic-bicycle-in-public-cityscape-view.webp?a=1&s=612x612&w=0&k=20&c=ABXj_8nYT-TdCDp_owSMcqQVO9YtI4o7grJcFcrYX7M=",
    rating: 4.7,
    discount: "20%",
    inStock: true,
  },
  {
    id: 3,
    name: "Electric Pro Bike",
    price: "৳55,000",
    originalPrice: "৳60,000",
    image:
      "https://images.unsplash.com/photo-1621394971416-11408651a639?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
    rating: 4.8,
    discount: "8%",
    inStock: false,
  },
];

const quickActions = [
  {
    title: "Track Orders",
    description: "Track your recent orders",
    icon: Truck,
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    href: "/user-dashboard/orders",
  },
  {
    title: "View Wishlist",
    description: "See your saved items",
    icon: Heart,
    color: "bg-red-500",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
    href: "/user-dashboard/wishlist",
  },
  {
    title: "Account Settings",
    description: "Manage your profile",
    icon: Settings,
    color: "bg-gray-500",
    lightColor: "bg-gray-50",
    textColor: "text-gray-600",
    href: "/user-dashboard/settings",
  },
  {
    title: "Customer Support",
    description: "Get help and support",
    icon: Phone,
    color: "bg-green-500",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
    href: "/user-dashboard/support",
  },
];

const notifications = [
  {
    id: 1,
    title: "Order Delivered",
    message: "Your Mountain Bike Pro has been delivered",
    time: "2 hours ago",
    type: "success",
    unread: true,
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: 2,
    title: "Price Drop Alert",
    message: "Premium Mountain Bike is now 10% off",
    time: "1 day ago",
    type: "info",
    unread: true,
    icon: Gift,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    title: "Reward Points Earned",
    message: "You earned 150 points from your recent purchase",
    time: "3 days ago",
    type: "reward",
    unread: false,
    icon: Award,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 4,
    title: "Payment Reminder",
    message: "Complete payment for Order #ORD-004",
    time: "5 days ago",
    type: "warning",
    unread: false,
    icon: AlertCircle,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "shipped":
      return <Truck className="h-4 w-4 text-blue-500" />;
    case "processing":
      return <RefreshCw className="h-4 w-4 text-yellow-500" />;
    case "pending":
      return <Clock className="h-4 w-4 text-gray-500" />;
    case "cancelled":
      return <XCircle className="h-4 w-4 text-red-500" />;
    default:
      return <Clock className="h-4 w-4 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-green-100 text-green-800";
    case "shipped":
      return "bg-blue-100 text-blue-800";
    case "processing":
      return "bg-yellow-100 text-yellow-800";
    case "pending":
      return "bg-gray-100 text-gray-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function UserDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20 border-4 border-white/20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="bg-white/20 text-white text-2xl font-bold">
                  SH
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Welcome back, Sanim Hasan! 👋
                </h1>
                <p className="text-blue-100 text-lg">
                  Here's your RevoCycle account overview
                </p>
                <div className="flex items-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm">Gold Member</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-300" />
                    <span className="text-sm">Member since 2023</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Button variant="secondary" size="sm" className="mb-2">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <p className="text-sm text-blue-200">Last login: Today</p>
              <p className="text-xs text-blue-300">IP: 192.168.1.1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat, index) => (
          <Card
            key={index}
            className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${stat.color}`} />
            <div
              className={`absolute top-4 right-4 p-3 rounded-full ${stat.lightColor} group-hover:scale-110 transition-transform`}
            >
              <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="flex items-center text-sm">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500">{stat.change}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-blue-500" />
            Quick Actions
          </CardTitle>
          <CardDescription>
            Frequently used features for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-6 flex flex-col items-center gap-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-transparent group"
              >
                <div
                  className={`p-4 rounded-full ${action.lightColor} group-hover:scale-110 transition-transform`}
                >
                  <action.icon className={`h-6 w-6 ${action.textColor}`} />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">{action.title}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {action.description}
                  </p>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <Card className="lg:col-span-2 border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-blue-500" />
                  Recent Orders
                </CardTitle>
                <CardDescription>
                  Your latest purchases and their status
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="hover:shadow-md transition-all bg-transparent"
              >
                <Eye className="h-4 w-4 mr-2" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition-all duration-300 hover:bg-gray-50 group"
                >
                  <img
                    src={order.image || "/placeholder.svg"}
                    alt={order.product}
                    className="w-16 h-16 object-cover rounded-lg group-hover:scale-110 transition-transform"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-900">
                        {order.product}
                      </span>
                      <span className="font-bold text-gray-900">
                        {order.amount}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm text-gray-600">
                          Order #{order.id}
                        </p>
                        <p className="text-xs text-gray-500">
                          Tracking: {order.trackingNumber}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(order.status)}
                        <Badge
                          className={`capitalize ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Ordered: {order.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Truck className="h-3 w-3" />
                        Expected: {order.deliveryDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-orange-500" />
              Notifications
            </CardTitle>
            <CardDescription>Latest updates and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-xl border-l-4 ${notification.bgColor} border-l-current transition-all duration-300 hover:shadow-md group`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg ${notification.bgColor} group-hover:scale-110 transition-transform`}
                    >
                      <notification.icon
                        className={`h-4 w-4 ${notification.color}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {notification.title}
                          </p>
                          <p className="text-gray-600 text-xs mt-1">
                            {notification.message}
                          </p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-1" />
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Wishlist Items */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Your Wishlist
              </CardTitle>
              <CardDescription>Items you've saved for later</CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="hover:shadow-md transition-all bg-transparent"
            >
              <ArrowUpRight className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:bg-gray-50 group"
              >
                <div className="relative mb-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-500 text-white">
                      {item.discount} OFF
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4 text-red-500 fill-current" />
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-gray-900">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {item.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">
                        {item.rating}
                      </span>
                    </div>
                    <Badge variant={item.inStock ? "default" : "secondary"}>
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                  <Button
                    className="w-full mt-3"
                    variant={item.inStock ? "default" : "secondary"}
                    disabled={!item.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {item.inStock ? "Add to Cart" : "Notify Me"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Account Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Spending Overview */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              Spending Overview
            </CardTitle>
            <CardDescription>Your purchase history and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">৳15,000</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-600">+25%</p>
                  <p className="text-xs text-gray-500">vs last month</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mountain Bikes</span>
                  <div className="flex items-center gap-2">
                    <Progress value={60} className="w-20 h-2" />
                    <span className="text-sm font-medium">৳75,000</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Electric Bikes</span>
                  <div className="flex items-center gap-2">
                    <Progress value={30} className="w-20 h-2" />
                    <span className="text-sm font-medium">৳30,000</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Accessories</span>
                  <div className="flex items-center gap-2">
                    <Progress value={10} className="w-20 h-2" />
                    <span className="text-sm font-medium">৳20,000</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Details */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-500" />
              Account Details
            </CardTitle>
            <CardDescription>
              Your profile and contact information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback className="bg-blue-500 text-white">
                    SH
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Sanim Hasan</p>
                  <p className="text-sm text-gray-600">Gold Member</p>
                </div>
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    sanim.hasan@example.com
                  </span>
                  <Badge variant="outline" className="text-xs">
                    Verified
                  </Badge>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    +880 1712-345678
                  </span>
                  <Badge variant="outline" className="text-xs">
                    Verified
                  </Badge>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Dhaka, Bangladesh
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    2 Payment Methods
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-xs p-1 h-auto"
                  >
                    Manage
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
