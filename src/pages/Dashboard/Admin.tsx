import { useGetallSellesQuery } from "@/redux/features/payment/payment.api";
import {
  AlertCircle,
  CheckCircle,
  CreditCard,
  Globe,
  RefreshCw,
  Target,
  Truck,
  XCircle,
} from "lucide-react";
import {
  ShoppingCart,
  Users,
  Package,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Eye,
  ArrowUpRight,
  Star,
  Clock,
  Phone,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  Award,
  Zap,
} from "lucide-react";
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
import { SalesChart } from "./Sales-Chart";
import { RevenueChart } from "./Revnu-Chart";
import { OrdersChart } from "./Orders-Chart";
import { CategoryChart } from "./Category-Chart";
import { Helmet } from "react-helmet-async";
const Admin = () => {
  const { data } = useGetallSellesQuery(undefined);
  console.log(data);
  const stats = [
    {
      title: "Total Revenue",
      value: "৳4,52,318",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      description: "from last month",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Total Orders",
      value: "2,350",
      change: "+180.1%",
      trend: "up",
      icon: ShoppingCart,
      description: "from last month",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Products Sold",
      value: "12,234",
      change: "+19%",
      trend: "up",
      icon: Package,
      description: "from last month",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Active Users",
      value: "573",
      change: "+201",
      trend: "up",
      icon: Users,
      description: "from last month",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  const additionalStats = [
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.5%",
      trend: "up",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Avg Order Value",
      value: "৳1,925",
      change: "+৳125",
      trend: "up",
      icon: CreditCard,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Return Rate",
      value: "2.1%",
      change: "-0.3%",
      trend: "down",
      icon: RefreshCw,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      trend: "up",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "আহমেদ হাসান",
      email: "ahmed@example.com",
      amount: "৳25,000",
      status: "completed",
      date: "2024-01-15",
      avatar: "/placeholder.svg?height=40&width=40",
      product: "Mountain Bike Pro",
      paymentMethod: "Cash on Delivery",
    },
    {
      id: "ORD-002",
      customer: "ফাতিমা খান",
      email: "fatima@example.com",
      amount: "৳15,000",
      status: "pending",
      date: "2024-01-15",
      avatar: "/placeholder.svg?height=40&width=40",
      product: "Electric Bike X1",
      paymentMethod: "bKash",
    },
    {
      id: "ORD-003",
      customer: "রহিম উদ্দিন",
      email: "rahim@example.com",
      amount: "৳35,000",
      status: "processing",
      date: "2024-01-14",
      avatar: "/placeholder.svg?height=40&width=40",
      product: "Road Bike Elite",
      paymentMethod: "Nagad",
    },
    {
      id: "ORD-004",
      customer: "সারা আক্তার",
      email: "sara@example.com",
      amount: "৳20,000",
      status: "completed",
      date: "2024-01-14",
      avatar: "/placeholder.svg?height=40&width=40",
      product: "Hybrid Bike Plus",
      paymentMethod: "Cash on Delivery",
    },
    {
      id: "ORD-005",
      customer: "করিম মিয়া",
      email: "karim@example.com",
      amount: "৳18,000",
      status: "cancelled",
      date: "2024-01-13",
      avatar: "/placeholder.svg?height=40&width=40",
      product: "Kids Bike Special",
      paymentMethod: "Rocket",
    },
  ];

  const topProducts = [
    {
      name: "Mountain Bike Pro",
      sales: 1234,
      revenue: "৳2,46,800",
      growth: 12,
      image: "/images/mountain-bike.jpg",
      rating: 4.8,
      stock: 45,
      category: "Mountain",
    },
    {
      name: "Electric Bike X1",
      sales: 987,
      revenue: "৳1,97,400",
      growth: 8,
      image: "/images/electric-bike.jpg",
      rating: 4.9,
      stock: 23,
      category: "Electric",
    },
    {
      name: "Road Bike Elite",
      sales: 756,
      revenue: "৳1,51,200",
      growth: -3,
      image: "/images/road-bike.jpg",
      rating: 4.7,
      stock: 67,
      category: "Road",
    },
    {
      name: "Hybrid Bike Plus",
      sales: 654,
      revenue: "৳1,30,800",
      growth: 15,
      image: "/images/hybrid-bike.jpg",
      rating: 4.6,
      stock: 34,
      category: "Hybrid",
    },
  ];

  const quickActions = [
    {
      title: "Add New Product",
      description: "Add a new bike to inventory",
      icon: Package,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
      href: "/dashboard/products/new",
    },
    {
      title: "View Orders",
      description: "Manage customer orders",
      icon: ShoppingCart,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
      href: "/dashboard/orders",
    },
    {
      title: "Customer Support",
      description: "Handle customer queries",
      icon: Phone,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
      href: "/dashboard/support",
    },
    {
      title: "Analytics Report",
      description: "View detailed analytics",
      icon: BarChart3,
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
      href: "/dashboard/analytics",
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "New Order Received",
      message: "Order #ORD-001 from আহমেদ হাসান",
      time: "2 minutes ago",
      type: "order",
      unread: true,
      icon: ShoppingCart,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "Low Stock Alert",
      message: "Mountain Bike Pro is running low (5 left)",
      time: "1 hour ago",
      type: "warning",
      unread: true,
      icon: AlertCircle,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      id: 3,
      title: "Payment Received",
      message: "৳25,000 payment confirmed via bKash",
      time: "3 hours ago",
      type: "success",
      unread: false,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      title: "Order Cancelled",
      message: "Order #ORD-005 was cancelled by customer",
      time: "5 hours ago",
      type: "error",
      unread: false,
      icon: XCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "processing":
        return <RefreshCw className="h-4 w-4 text-blue-500" />;
      case "cancelled":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>RevoCycle - Admin - Dashboard </title>
      </Helmet>
      <div>
        <div className="space-y-8">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-2">
                    Welcome back, Admin! 👋
                  </h1>
                  <p className="text-gray-300 text-lg">
                    Here's what's happening with BikeHub today.
                  </p>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-blue-400" />
                      <span className="text-sm">Online Store Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-green-400" />
                      <span className="text-sm">12 Orders Shipping</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Today's Date</p>
                  <p className="text-xl font-semibold">
                    {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Last updated: Just now
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 ${stat.color}`}
                />
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
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={
                        stat.trend === "up" ? "text-green-500" : "text-red-500"
                      }
                    >
                      {stat.change}
                    </span>
                    <span className="text-gray-500 ml-1">
                      {stat.description}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalStats.map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        stat.trend === "up" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">
                      vs last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Sales Chart */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  Monthly Sales Overview
                </CardTitle>
                <CardDescription>
                  Sales performance over the last 12 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SalesChart />
              </CardContent>
            </Card>

            {/* Revenue Chart */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  Revenue Trends
                </CardTitle>
                <CardDescription>
                  Monthly revenue breakdown and growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueChart />
              </CardContent>
            </Card>
          </div>

          {/* Orders and Category Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Orders Chart */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-purple-500" />
                  Order Status Distribution
                </CardTitle>
                <CardDescription>
                  Current order status breakdown
                </CardDescription>
              </CardHeader>
              <CardContent>
                <OrdersChart />
              </CardContent>
            </Card>

            {/* Category Performance */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-orange-500" />
                  Category Performance
                </CardTitle>
                <CardDescription>Sales by bike category</CardDescription>
              </CardHeader>
              <CardContent>
                <CategoryChart />
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Frequently used actions for faster workflow
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
                      <p className="font-semibold text-gray-900">
                        {action.title}
                      </p>
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
                      <ShoppingCart className="h-5 w-5 text-blue-500" />
                      Recent Orders
                    </CardTitle>
                    <CardDescription>
                      Latest customer orders and their status
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
                      <Avatar className="h-12 w-12 group-hover:scale-110 transition-transform">
                        <AvatarImage src={order.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          {order.customer.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-900">
                            {order.customer}
                          </span>
                          <span className="font-bold text-gray-900">
                            {order.amount}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="text-sm text-gray-600">
                              {order.product}
                            </p>
                            <p className="text-xs text-gray-500">
                              {order.paymentMethod}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(order.status)}
                            <Badge
                              variant={
                                order.status === "completed"
                                  ? "default"
                                  : order.status === "pending"
                                  ? "secondary"
                                  : order.status === "processing"
                                  ? "outline"
                                  : "destructive"
                              }
                              className="capitalize"
                            >
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {order.date}
                        </p>
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
                  <Activity className="h-5 w-5 text-red-500" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Latest notifications and alerts
                </CardDescription>
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

          {/* Top Products */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-500" />
                    Top Performing Products
                  </CardTitle>
                  <CardDescription>
                    Best selling bikes this month with detailed metrics
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:shadow-md transition-all bg-transparent"
                >
                  <ArrowUpRight className="h-4 w-4 mr-2" />
                  View Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition-all duration-300 hover:bg-gray-50 group"
                  >
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg group-hover:scale-110 transition-transform"
                      />
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        #{index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">
                          {product.name}
                        </span>
                        <span className="font-bold text-gray-900">
                          {product.revenue}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500">
                            {product.sales} sales
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {product.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-xs text-gray-600">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Progress
                            value={Math.abs(product.growth) * 5}
                            className="flex-1 w-20 h-2"
                          />
                          <span className="text-xs text-gray-500">
                            Stock: {product.stock}
                          </span>
                        </div>
                        <div className="flex items-center">
                          {product.growth > 0 ? (
                            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                          )}
                          <span
                            className={`text-xs font-semibold ${
                              product.growth > 0
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {product.growth > 0 ? "+" : ""}
                            {product.growth}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Admin;
