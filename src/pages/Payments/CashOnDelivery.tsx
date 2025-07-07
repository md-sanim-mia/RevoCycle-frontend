"use client";

import { useState } from "react";

import {
  ArrowLeft,
  Check,
  MapPin,
  Phone,
  Mail,
  User,
  CreditCard,
  Truck,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";
import { allPorducts } from "@/redux/features/AddToCard/addToCard.slice";
import { Helmet } from "react-helmet-async";

// Mock cart items
// const cartItems = [
//   {
//     id: 1,
//     name: "Mountain Explorer Pro 2024",
//     price: 1299.99,
//     originalPrice: 1599.99,
//     quantity: 1,
//     image:
//       "https://images.unsplash.com/photo-1544191696-15693072e0b5?w=300&h=300&fit=crop&crop=center",
//     category: "Mountain Bikes",
//     color: "Matte Black",
//     size: "Large",
//   },
//   {
//     id: 2,
//     name: "Urban Commuter E-Bike",
//     price: 2199.99,
//     quantity: 1,
//     image:
//       "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=300&fit=crop&crop=center",
//     category: "Electric Bikes",
//     color: "Silver",
//     size: "Medium",
//   },
// ];

const steps = [
  { id: 1, name: "Information", icon: User },
  { id: 2, name: "Delivery", icon: Truck },
  { id: 3, name: "Payment", icon: CreditCard },
  { id: 4, name: "Confirmation", icon: Check },
];

export default function CashOnDelivery() {
  const [currentStep, setCurrentStep] = useState(1);
  const cartItems = useAppSelector(allPorducts);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Delivery Address
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Bangladesh",

    // Additional Options
    deliveryInstructions: "",
    saveAddress: false,
    newsletter: false,

    // Order Notes
    orderNotes: "",
  });

  const subtotal = cartItems.reduce(
    (sum: any, item: any) => sum + item.price * item.quantity,
    0
  );
  const savings = cartItems.reduce((sum: any, item: any) => {
    if (item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);
  const deliveryFee = subtotal > 1000 ? 0 : 50;
  const total = subtotal + deliveryFee;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlaceOrder = () => {
    // Handle order placement
    console.log("Order placed:", { formData, cartItems, total });
    setCurrentStep(4);
  };

  return (
    <>
      <Helmet>
        <title>RevoCycle - Checkout page </title>
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep >= step.id
                        ? "bg-black border-black text-white"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <div
                      className={`text-sm font-medium ${
                        currentStep >= step.id ? "text-black" : "text-gray-400"
                      }`}
                    >
                      {step.name}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 mx-4 transition-all duration-300 ${
                        currentStep > step.id ? "bg-black" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="Enter your email"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+880 1XXX-XXXXXX"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) =>
                          handleInputChange("newsletter", checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="newsletter"
                        className="text-sm text-gray-600"
                      >
                        Subscribe to our newsletter for updates and exclusive
                        offers
                      </Label>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        onClick={handleNextStep}
                        className="bg-black hover:bg-gray-800 text-white px-8"
                      >
                        Continue to Delivery
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Delivery Address */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Delivery Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        placeholder="Enter your street address"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="apartment">
                        Apartment, Suite, etc. (Optional)
                      </Label>
                      <Input
                        id="apartment"
                        value={formData.apartment}
                        onChange={(e) =>
                          handleInputChange("apartment", e.target.value)
                        }
                        placeholder="Apartment, suite, unit, building, floor, etc."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                          placeholder="Enter your city"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State/Division *</Label>
                        <Select
                          value={formData.state}
                          onValueChange={(value) =>
                            handleInputChange("state", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select state/division" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dhaka">Dhaka</SelectItem>
                            <SelectItem value="chittagong">
                              Chittagong
                            </SelectItem>
                            <SelectItem value="sylhet">Sylhet</SelectItem>
                            <SelectItem value="rajshahi">Rajshahi</SelectItem>
                            <SelectItem value="khulna">Khulna</SelectItem>
                            <SelectItem value="barisal">Barisal</SelectItem>
                            <SelectItem value="rangpur">Rangpur</SelectItem>
                            <SelectItem value="mymensingh">
                              Mymensingh
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) =>
                            handleInputChange("zipCode", e.target.value)
                          }
                          placeholder="Enter ZIP code"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) =>
                            handleInputChange("country", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Bangladesh">
                              Bangladesh
                            </SelectItem>
                            <SelectItem value="India">India</SelectItem>
                            <SelectItem value="Pakistan">Pakistan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="deliveryInstructions">
                        Delivery Instructions (Optional)
                      </Label>
                      <Textarea
                        id="deliveryInstructions"
                        value={formData.deliveryInstructions}
                        onChange={(e) =>
                          handleInputChange(
                            "deliveryInstructions",
                            e.target.value
                          )
                        }
                        placeholder="Any special instructions for delivery..."
                        rows={3}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="saveAddress"
                        checked={formData.saveAddress}
                        onCheckedChange={(checked) =>
                          handleInputChange("saveAddress", checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="saveAddress"
                        className="text-sm text-gray-600"
                      >
                        Save this address for future orders
                      </Label>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={handlePrevStep}
                        className="bg-transparent"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={handleNextStep}
                        className="bg-black hover:bg-gray-800 text-white px-8"
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Payment Method */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Cash on Delivery */}
                    <div className="border-2 border-black rounded-lg p-6 bg-gray-50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-black rounded-full mr-3"></div>
                          <h3 className="font-semibold text-gray-900">
                            Cash on Delivery
                          </h3>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          Recommended
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Pay with cash when your order is delivered to your
                        doorstep. No advance payment required.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center text-green-600">
                          <Shield className="w-4 h-4 mr-2" />
                          100% Secure
                        </div>
                        <div className="flex items-center text-green-600">
                          <Truck className="w-4 h-4 mr-2" />
                          Free Delivery
                        </div>
                        <div className="flex items-center text-green-600">
                          <Clock className="w-4 h-4 mr-2" />
                          Quick Processing
                        </div>
                      </div>
                    </div>

                    {/* Order Notes */}
                    <div>
                      <Label htmlFor="orderNotes">Order Notes (Optional)</Label>
                      <Textarea
                        id="orderNotes"
                        value={formData.orderNotes}
                        onChange={(e) =>
                          handleInputChange("orderNotes", e.target.value)
                        }
                        placeholder="Any special requests or notes for your order..."
                        rows={3}
                      />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Important Information:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          • Please have the exact amount ready for cash payment
                        </li>
                        <li>
                          • Delivery will be made within 3-5 business days
                        </li>
                        <li>
                          • Free assembly service included with your purchase
                        </li>
                        <li>• 30-day return policy applies to all orders</li>
                      </ul>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={handlePrevStep}
                        className="bg-transparent"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={handlePlaceOrder}
                        className="bg-red-500 hover:bg-red-600 text-white px-8"
                      >
                        Place Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Order Confirmation */}
              {currentStep === 4 && (
                <Card>
                  <CardContent className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Order Confirmed!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Thank you for your order. We'll send you a confirmation
                      email shortly.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-gray-600">Order Number</p>
                      <p className="font-bold text-lg">
                        #BH{Date.now().toString().slice(-6)}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="outline" className="bg-transparent">
                        Track Order
                      </Button>
                      <Link to="/">
                        <Button className="bg-black hover:bg-gray-800 text-white">
                          Continue Shopping
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-4">
                    {cartItems?.map((item: any) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="object-cover"
                          />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">
                            {item.quantity}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {item.color} • {item.size}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-semibold text-gray-900">
                              ${item.price}
                            </span>
                            {item.originalPrice && (
                              <span className="text-xs text-gray-400 line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    {savings > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Savings</span>
                        <span className="font-medium text-green-600">
                          -${savings.toFixed(2)}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Delivery</span>
                      <span className="font-medium">
                        {deliveryFee === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          `$${deliveryFee.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    {subtotal < 1000 && (
                      <div className="text-xs text-gray-500">
                        Add ${(1000 - subtotal).toFixed(2)} more for free
                        delivery
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  {/* Security Features */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Shield className="w-4 h-4 mr-2 text-green-600" />
                      Secure Checkout
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Truck className="w-4 h-4 mr-2 text-green-600" />
                      Free Assembly Included
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
