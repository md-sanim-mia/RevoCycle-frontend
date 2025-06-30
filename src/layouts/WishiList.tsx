import { X, Heart, ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  isShowWishListSidebar,
  setWishListCardSidebar,
} from "@/redux/features/WishiListSidebar";
import {
  addToWishListProduct,
  allWishListPorducts,
  deleteWishListProduct,
} from "@/redux/features/WishIList/wishiList.slice";

const WishiList = () => {
  const dispatch = useAppDispatch();
  const handileClickHiden = () => {
    dispatch(setWishListCardSidebar(false));
  };
  const isShows = useAppSelector(isShowWishListSidebar);
  const items = useAppSelector(allWishListPorducts);

  return (
    <>
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
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-500 fill-current" />
              <h2 className="text-xl font-bold text-gray-900">Wishlist</h2>
              <Badge className="bg-red-500 text-white">{items.length}</Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={handileClickHiden}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Wishlist Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Heart className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Your wishlist is empty
                </h3>
                <p className="text-gray-500 mb-6">
                  Save bikes you love for later!
                </p>
                <Button
                  onClick={handileClickHiden}
                  className="bg-red-500 hover:bg-red-600"
                >
                  Start Shopping
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
                          //   s
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
                            onClick={() =>
                              dispatch(deleteWishListProduct(item.id))
                            }
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
                            <>
                              <span className="text-sm text-gray-400 line-through">
                                ${item.originalPrice}
                              </span>
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                {Math.round(
                                  ((item.originalPrice - item.price) /
                                    item.originalPrice) *
                                    100
                                )}
                                % OFF
                              </Badge>
                            </>
                          )}
                        </div>

                        {/* Action Button */}
                        <Button
                          size="sm"
                          onClick={() => dispatch(addToWishListProduct(item))}
                          //   disabled={!item.inStock}
                          className="w-full bg-red-500 hover:bg-red-600 text-white disabled:bg-gray-300"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {"Add to Cart"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t bg-gray-50 p-6">
              <div className="space-y-3">
                <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 text-base font-semibold">
                  Add All to Cart
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={handileClickHiden}
                >
                  Continue Browsing
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishiList;
