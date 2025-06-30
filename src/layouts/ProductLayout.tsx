import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { allPorducts } from "@/redux/features/AddToCard/addToCard.slice";

import { isShowSideber, setCardSideber } from "@/redux/features/sideberSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
const ProductLayout = () => {
  const dispatch = useAppDispatch();
  const handileClickHiden = () => {
    dispatch(setCardSideber(false));
  };
  const isShows = useAppSelector(isShowSideber);
  const items = useAppSelector(allPorducts);
  const subtotal = items.reduce(
    (sum: any, item: any) => sum + item.price * item.quantity,
    0
  );
  const savings = items.reduce((sum: any, item: any) => {
    if (item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);
  const shipping = subtotal > 500 ? 0 : 29.99;
  const total = subtotal + shipping;
  return (
    <div className="">
      {/* Sidebar (Fixed to Right) */}
      {/* <div
        className={
          isShows
            ? " lg:w-96 md:w-96 w-screen z-40 transition duration-300 transform ease-in-out  bg-white p-4 fixed right-0 top-0 h-full shadow-2xl"
            : " lg:w-96 md:w-96 w-screen z-40 transition duration-300 transform ease-in-out hidden bg-white p-4 fixed right-0 top-0 h-full shadow-2xl"
        }
      >
        <div className="flex justify-between items-center">
          <RxCross1
            className="cursor-pointer text-2xl"
            onClick={handileClickHiden}
          />
          <p> Sidebar Content</p>
        </div>
      </div> */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isShows ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handileClickHiden}
      />

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isShows ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
              <Badge className="bg-red-500 text-white">{items?.length}</Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={handileClickHiden}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 mb-6">
                  Add some bikes to get started!
                </p>
                <Button
                  onClick={handileClickHiden}
                  className="bg-red-500 hover:bg-red-600"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item: any) => (
                  <div
                    key={item.id}
                    className="group bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                              {item.name}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {item.category}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            // onClick={() => onRemoveItem(item.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-bold text-gray-900">
                            ${item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ${item.originalPrice}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center border rounded-lg bg-white">
                            <Button
                              variant="ghost"
                              size="sm"
                              // onClick={() =>
                              //   onUpdateQuantity(
                              //     item.id,
                              //     Math.max(1, item.quantity - 1)
                              //   )
                              // }
                              disabled={item.quantity <= 1}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="px-3 py-1 text-sm font-medium min-w-[40px] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              // onClick={() =>
                              //   onUpdateQuantity(item.id, item.quantity + 1)
                              // }
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <div className="font-bold text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            {item.originalPrice && (
                              <div className="text-xs text-green-600">
                                Save $
                                {(
                                  (item.originalPrice - item.price) *
                                  item.quantity
                                ).toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t bg-gray-50 p-6">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
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
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                {subtotal < 500 && (
                  <div className="text-xs text-gray-500">
                    Add ${(500 - subtotal).toFixed(2)} more for free shipping
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>

                  <span>${total}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-base font-semibold">
                  Checkout Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={handileClickHiden}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
